/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is another name for hard flour?',
      answers: [
        'A: Bread flour',
        'B: King Arthur flour',
        'C: Whole wheat flour',
        'D: Ciabatta flour'
      ],
      correctAnswer: 'A'
    },
    {
      question: 'Which type of flour has the lowest gluten content?',
      answers: [
        'A: Bread flour',
        'B: All purpose flour',
        'C: Cake flour',
        'D: Almond flour'
      ],
      correctAnswer: 'D'
    },
    {
      question: 'What is the name of this dish?'+'<br>'+ '<br>'+'<img src="images/salmon_coulibiac.jpg" alt"Russian Coulibiac" style=" width:500px; height:200px;">'+'<br>',
      answers: [
        'A: Beef Wellington ',
        'B: Shepherd pie',
        'C: Russian Salmon Coulibiac',
        'D: Tourtiere'
      ],
      correctAnswer: 'C'
    },
    {
      question: 'Which item does not belong in the traditional full English breakfast? ',
      answers: [
        'A:Baked beans',
        'B:Grilled tomatoes',
        'C:Cabbage',
        'D:Marmalade'
      ],
      correctAnswer: 'D'
    },
    {
      question: 'When is the national Cookie Day? ',
      answers: [
        'A:December 4th',
        'B:September 4th',
        'C:January 15th',
        'D:May 15th'
      ],
      correctAnswer: 'A'
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
      <button type="button" class="startBttn"> Start Quiz</button>
    </div>`)
  }
//This function is to display the question templates
function questionTemplate(){
  const currentQuestion=store.questions[store.questionNumber].question;
  const firstChoice=store.questions[store.questionNumber].answers[0];
  const secondChoice=store.questions[store.questionNumber].answers[1];
  const thirdChoice=store.questions[store.questionNumber].answers[2];
  const fourthChoice=store.questions[store.questionNumber].answers[3];
  const totalQuestion=store.questions.length;
  //fcvconst rightAnswer=store.questions[store.questionNumber].correctAnswer;
  $('.message').html(`
    <div class="questionNumber">
    
      <h3> Question Number:${store.questionNumber+1}/${totalQuestion}</h3>
      <h3 id="currentScore"> Score:${store.score}</h3>
    
    </div>
    <div class="quizQuestion">
      <form class="quizChoice">
        <h2> ${currentQuestion}</h2>
          <input name="choice" type="radio" required value ="A">
            <label for ="A">${firstChoice}</label><br>
          <input name="choice" type="radio" value ="B">
            <label for ="B">${secondChoice}</label><br>
          <input name="choice" type="radio" value ="C">
            <label for ="C">${thirdChoice}</label><br>
          <input name="choice" type="radio" value ="D">
            <label for ="D">${fourthChoice}</label><br>
            <button type="submit" class=" submitBttn"> Submit</button>
      </form>
      
    </div>`)
  }


//this fucntion is to display the final result template
function finalResult(){
  $('.message').html(`
    <p>Your Score is:${store.score}</p>
  `)
}
/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function displayWelcomeMessage(){
  if (store.quizStarted===false){
    welcomeMessage()
  }
}
/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)

//This function is for when the start the quiz button is clicked
function startQuiz(){
  //when the users click on the start Quiz button, take them to the first question
  $('.startBttn').on('click', ()=>{
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
  $('.quizChoice').children('input').attr('disabled',true);
  
  if (chosenAnswer===rightAnswer){
    store.score++;   
    messageText = `<p class ="correctMessage">That is correct</p>`;
    $('#currentScore').text('Score: ' + store.score);
  } else {
      messageText = `<p class="incorrectMessage">That is incorrect. The correct answer is ${rightAnswer}</p>`;  
    }
  $(`label[for='${chosenAnswer}']`).after(messageText);
  $('.quizQuestion').append(`
  <button type="submit" class="nextBttn"> Next</button>
  `)
}
//This function is for submit answer for each question
function submitAnswer(){
  $('body').on('submit','.quizChoice', (event)=>{
    event.preventDefault();
    checkAnswer();  
   });
}

//This function is for moving to the next question
function nextQuestion(){
  $('body').on('click', '.nextBttn', () =>{
    if( store.questionNumber<store.questions.length-1){
      $('.nextBttn').hide();
      store.questionNumber++;
      questionTemplate();    
    }else{
      $('.message').html(`
      <div class="finalResult">
        <p>Your Final Score is:${store.score}/${store.questions.length}</p>
       <button type="submit" class="restartBttn"> Restart the Quiz</button>
      </div>
      `)
    }
  });
}

//This function is for retsarting the quiz
function restart(){
$('body').on('click', '.restartBttn', ()=>{
  $('.finalResult').hide();
  displayWelcomeMessage();
  store.questionNumber=0;
  store.score=0;
  startQuiz();
})
}
function renderQuizApp(){  
  displayWelcomeMessage()
  startQuiz() 
  nextQuestion() 
  submitAnswer()
  restart();
}
$(renderQuizApp);