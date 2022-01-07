var startTimer = document.getElementById("timer");
//timer btn
var start = document.getElementById("start-btn");
//start btn
var next = document.getElementById("next-btn");
//next btn
//eventlistener for starting the game
startTimer.addEventListener("click", startGame);
//start the game
function startGame(){
    startTimer.style.visibility = "hidden"; //hide start btn
    //start the timer
    
}

function setNextQuestion(){
// set up for next question
}

function results(){
    //for results
}

//timer rules if a question is wrong
// array of questions and snwers to loop through
const questions = [
    {
        question: 'what is css used for?',
        answers: [
           { text: 'the code used to style your html', correct: true},
           { text: 'fhdfd', correct: false},
           { text: '', correct: false},
           { text: '', correct: false},

        ]
    },
    {
        question: 'what is css used for?',
        answers: [
           { text: 'the code used to style your html', correct: true},
           { text: 'fhdfd', correct: false},
           { text: '', correct: false},
           { text: '', correct: false},

        ]
    },
    {
        question: 'what is css used for?',
        answers: [
           { text: 'the code used to style your html', correct: true},
           { text: 'fhdfd', correct: false},
           { text: '', correct: false},
           { text: '', correct: false},

        ]
    },
    {
        question: 'what is css used for?',
        answers: [
           { text: 'the code used to style your html', correct: true},
           { text: 'fhdfd', correct: false},
           { text: '', correct: false},
           { text: '', correct: false},

        ]
    }
];


//highscore storage

//input for name



