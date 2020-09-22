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
      correctAnswer: 'Bread flour'
    },
    {
      question: 'Which type of flour has the lowest gluten content?',
      answers: [
        'Bread flour',
        'All purpose flour',
        'Cake flour',
        'Almond flour'
      ],
      correctAnswer: 'Almond flour'
    },
    {
      question: 'What is the name of this dish? ',
      answers: [
        'Beef Wellington ',
        'Shepherd pie',
        'Russian Salmon Coulibiac',
        'Tourtiere'
      ],
      correctAnswer: 'Russian Salmon Coulibiac'
    },
    {
      question: 'Which item does not belong in the traditional full English breakfast? ',
      answers: [
        'Baked beans',
        'Grilled tomatoes',
        'Cabbage',
        'Marmalade'
      ],
      correctAnswer: 'Marmalade'
    },
    {
      question: 'When is the national Cookie Day? ',
      answers: [
        'December 4th',
        'September 4th',
        'January 15th',
        'May 15th'
      ],
      correctAnswer: 'December 4th'
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
function welcomeMessage(store){
//This fucntion is to display the welcome message
  if (store.quizStarted===false){
    $('.message').append(`
      <div class="welcome">
        <p>This quiz is to test your knowldge of the culinary world</p>
        <button type="button"> Start Quiz</button>
      </div>`)
  }
}
//This function is to display the template for each question
function questionTemplate(){

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

}
/********** EVENT HANDLER FUNCTIONS **********/
// These functions handle events (submit, click, etc)
//This function is for when the start the quiz button is clicked

function startQuiz(){

}
//This function is for submit answer for each question
function submitAnswer(){

}
//This function is for moving to the next question
function nextQuestion(){

}
//This function is for retsarting the quiz
function restart(){

}
function handleQuizApp(){
  welcomeMessage()
}
$(handleQuizApp);