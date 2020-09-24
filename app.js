/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is another name for hard flour?',
      answers: [
        'Bread flour',
        'King Arthur flour',
        'Whole wheat flour',
        'Ciabatta flour'
      ],
      correctAnswer: 'firstChoice'
    },
    {
      question: 'Which type of flour has the lowest gluten content?',
      answers: [
        'Bread flour',
        'All purpose flour',
        'Cake flour',
        'Almond flour'
      ],
      correctAnswer: 'fourthChocie'
    },
    {
      question: 'What is the name of this dish? ',
      answers: [
        'Beef Wellington ',
        'Shepherd pie',
        'Russian Salmon Coulibiac',
        'Tourtiere'
      ],
      correctAnswer: 'thirdChoice'
    },
    {
      question: 'Which item does not belong in the traditional full English breakfast? ',
      answers: [
        'Baked beans',
        'Grilled tomatoes',
        'Cabbage',
        'Marmalade'
      ],
      correctAnswer: 'fourthChoice'
    },
    {
      question: 'When is the national Cookie Day? ',
      answers: [
        'December 4th',
        'September 4th',
        'January 15th',
        'May 15th'
      ],
      correctAnswer: 'firstChoice'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
//This funtion is to display the welcome message
function welcomeMessage(){
//This fucntion is to display the welcome message
  $('.message').append(`
    <div class="welcome">
      <p>This quiz is to test your knowldge of the culinary world</p>
      <button type="button" id="startBttn"> Start Quiz</button>
    </div>`)
  }
//This function is to display the question templates
function questionTemplate(){
  const currentQuestion=store.questions[store.questionNumber+1].question;
  const firstChoice=store.questions[store.questionNumber].answers[0];
  const secondChoice=store.questions[store.questionNumber].answers[1];
  const thirdChoice=store.questions[store.questionNumber].answers[2];
  const fourthChoice=store.questions[store.questionNumber].answers[3];
  //fcvconst rightAnswer=store.questions[store.questionNumber].correctAnswer;
  $('.message').html(`
    <div class="questionNumber">
    
      <h3> Question Number:${store.questionNumber+1}/5</h3>
      <h3 id="currentScore"> Score:${store.score}</h3>
    
    </div>
    <div class="quizQuestion">
      <form class="quizChoice">
        <h2> ${currentQuestion}</h2>
          <input name="choice" type="radio" value ="firstChoice">
            <label for ="firstChoice">${firstChoice}</label><br>
          <input name="choice" type="radio" value ="secondChoice">
            <label for ="secondChoice">${secondChoice}</label><br>
          <input name="choice" type="radio" value ="thirdChoice">
            <label for ="thirdChoice">${thirdChoice}</label><br>
          <input name="choice" type="radio" value ="fourthChoice">
            <label for ="fourthChoice">${fourthChoice}</label><br>
      </form>
      <button type="submit" class="submitBttn"> Submit</button>
    </div>`)
  }

//This function is to display the answer for each question
function questionAnswer(){

}
//this fucntion is to display the final result template
function finalResult(){

}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function renderQuiz(){
  if (store.quizStarted===false){
    welcomeMessage()
  }
}
/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)
//This function is for when the start the quiz button is clicked

function startQuiz(){
  //when the users click on the start Quiz button, take them to the first question
  $('#startBttn').on('click', ()=>{
    $('.welcome').hide();// first hide the welcome message
    questionTemplate();
  })
}
//this question to check whether the answer is correct or not
function checkAnswer(){
  let chosenAnswer=$("input[name=choice]:checked").val();
  const rightAnswer=store.questions[store.questionNumber].correctAnswer;
  let messageText="";
  $('.submitBttn').hide();
  if (chosenAnswer===rightAnswer){
    store.score++;   
    messageText = "<p>That is correct</p>";
    $('#currentScore').text('Score: ' + store.score);
  } else {
      messageText = "<p>That is incorrect</p>";  
    }
  $(`label[for='${chosenAnswer}']`).after(messageText);
  $('.quizQuestion').append(`
  <button type="submit" class="nextBttn"> Next</button>
  `)
}
//This function is for submit answer for each question
function submitAnswer(){
  $('body').on('click','.submitBttn', ()=>{
   // $('.message').innerHTML= checkAnswer()
   checkAnswer();     
  });
}
//This function is for moving to the next question
function nextQuestion(){
  
}
//This function is for retsarting the quiz
function restart(){

}
function handleQuizApp(){
  
  renderQuiz()
  startQuiz()  
  submitAnswer()
}
$(handleQuizApp);