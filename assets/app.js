const timer = document.getElementById("timer");
const start = document.getElementById("start-btn");
let score = 0;
var answerOptions = document.getElementById('anser-grid');
var questionOptions = document.getElementById('question-storage');
var answerList = document.getElementById("answer-list");
var currentQuestion = 0;
const userinput = document.getElementById("input-inital");
let userName = userinput.value; 
let savedScores = [];
const quizBox = document.getElementById("question");

//click to start the game
start.addEventListener("click", startGame);
//find score is local storage
let localSavedScores = JSON.parse(localStorage.getItem("score"));
//if no scores do nothing if scores
if (localSavedScores !== ""){
//push the scores to the saved scores array
savedScores.push(localSavedScores);
}

let timeLeft = 60; // 60 sec

//timer function
function startTimer(){

    let timerId = setInterval(function(){
        
        // we want deduct 1 from a counter for every passing sec
        timeLeft--;

        // show the time remaining in the 'timer'
       timer.textContent = '00:' + timeLeft;
    
        // when time <0 , then stop the timer (stop taking one), 
        if(timeLeft == 0){
            clearInterval(timerId);
            // end game
            endGame();
            
        }
    
    },1000);


}

function startGame(){
    //hide start btn and show questions
   document.getElementById('landing-page').classList.add('hide');
   document.getElementById('question').classList.remove('hide');
   document.getElementById('timer').classList.remove('hide');
   //start the timer
   startTimer();
   renderQuestion(0);
// run next quesstion function
    
}
function renderQuestion(questionIndex){

    // get the question from questions array
    const question = questions[questionIndex];

    // get the title, put in the dom
    const title = question.title;

    const choices = question.choices;


    questionOptions.textContent = title;

    // clear the existing li
    answerList.textContent = "";

    // get the choices
    // loop thru
    for (let index = 0; index < choices.length; index++) {
        const choice = choices[index];

        // generate btn, put in the dom
        const li = document.createElement('li');
        const button = document.createElement('button');

        button.classList.add('btn-choice');
        button.classList.add('btn');

        // add an attribute to identify if is correct or not
        button.setAttribute('data-is-correct', choice.isAnswer);

        button.textContent = choice.title;
        button.addEventListener('click', answerCheck);
        li.appendChild(button);

        answerList.append(li);

    }

}

function answerCheck(event){
    event.preventDefault();
    score = score;
    // when the user click on the choice btn

    // check if user picked on the correct ans
    const isCorrect = event.target.getAttribute('data-is-correct') === 'true';
    
    if(isCorrect){
        score = score + 20;
       
    }else{
        // if wrong
        // deduct the time by 10 sec
        timeLeft = timeLeft - 10;
     
    }

    

    // move on to next question
    currentQuestion = currentQuestion + 1;
    // if no questions left, we will end the game
    if(currentQuestion >= questions.length){
        // end the game
        return endGame();
    }
    renderQuestion(currentQuestion);
}

score = score;

function endGame(){
//time left == 0
    timeLeft = -01;
    //clear timer
    timer.classList.add("hide");

  //hide questions and show highscore input 
document.getElementById('question').classList.add('hide');
document.getElementById('end-game').classList.remove('hide');

const highScoreSubmit = document.getElementById("score-submit");

//submit name
highScoreSubmit.addEventListener("click", function (submit){
    
    const userName = userinput.value; 

submit.preventDefault();
if(userName === ""){
    console.log("no name added");
}
else 
if(userName !== ""){
    console.log("button was clicked");
    //if there is an input show highscores
    document.getElementById('end-game').classList.add('hide');
    document.getElementById("highscore-page").classList.remove('hide'); 
    console.log(userName);
    console.log(score);

    yourHighScore = "Player: " + userName + " Score: "+ score;

    savedScores.push(yourHighScore);

    
    localStorage.setItem("score", JSON.stringify(savedScores));
    
    
    //render list of highscores
    for (let i = 0; i < savedScores.length; i++) {
        const scores = savedScores[i];
        
        const highScoreList = document.createElement("li");
        highScoreList.textContent = scores;
        
        leadersTable = document.getElementById("highscore-list");
        leadersTable.appendChild(highScoreList);
        
    }
}

});

}
