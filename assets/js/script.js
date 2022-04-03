var intro = document.querySelector("#intro")
var startbtn = document.querySelector("#start-btn")
var introText = document.querySelector("#intro")
var timerText = document.querySelector("#timer")
var answerCheck = document.querySelector(".answer-check")
var s1 = document.querySelector('.s1')
var s2 = document.querySelector('.s2')
var s3 = document.querySelector('.s3')
var s4 = document.querySelector('.s4')
var s5 = document.querySelector('.s5')
var highScores = []
const selctions = [
    {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
    },
    {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
    },
    {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
    },
    {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
    },
    {
        0: "A",
        1: "B",
        2: "C",
        3: "D"
    }
]
const qText = [
    "question one", "question two", "question three", "question four", "qustion five"
]

var choices = []
var questionNum = 0;
var timer = 100;
var timerCountDown;
var answerbtn = document.querySelector(".answer-btn");

startbtn.addEventListener("click", function() {
    // show the first set of questions
    populateAnswers();
    startbtn.remove();
    timerCountDown = setInterval(function() {
        timer--;
        timerText.textContent = timer
        console.log(timer)
    }, 1000)
})

var questionText = function(){
    null;
}
answerbtn.addEventListener("click", function(event) {
    populateAnswers(event);
})
var populateAnswers = function(event) {
    answerbtn.textContent = "";
    solutions();
    if (event) {
        choices.push(event.target.textContent)
        console.log(event.target)
        answerCheck.textContent = ''
        switch (questionNum) {
            case 1:
                if (event.target.textContent === 'C') {
                    console.log("Yes")
                    correctAnswer();
                }
                else {
                    console.log('No')
                    wrongAnswer();
                }
                break;
            case 2:
                if (event.target.textContent === 'B') {
                    console.log("Yes")
                    correctAnswer();
                }
                else {
                    console.log('No')
                    wrongAnswer();
                }
                break;
            case 3:
                if (event.target.textContent === 'D') {
                    console.log("Yes")
                    correctAnswer();
                }
                else {
                    console.log('No')
                    wrongAnswer();
                }
                break;
            case 4:
                if (event.target.textContent === 'C') {
                    console.log("Yes")
                    correctAnswer();
                }
                else {
                    console.log('No')
                    wrongAnswer();
                }
                break;
            case 5:
                if (event.target.textContent === 'D') {
                    console.log("Yes")
                    correctAnswer();
                }
                else {
                    console.log('No')
                    wrongAnswer();
                }
                break;
        }
    }
    
    if (choices.length === 5) {
        showAnswers();
    }
    else {
        for (let i = 0; i < Object.keys(selctions[0]).length; i++) {
            //create html elements to hold the data
            var answertext = document.createElement("button");
            answertext.textContent = selctions[questionNum][i];
            answerbtn.append(answertext)
        }
    }
    questionNum++;
}
var highScoreSubmit = function player(name, score) {
    this.name = name;
    this.score = score;
    console.log(name, score)
    var player = [name, score]
    if( score > highScores[1]) {
        console.log('yes')
        localStorage.setItem('player', JSON.stringify(player))
    }
    else {
        console.log('no')
    }
    
}
var showAnswers = function() {

    clearInterval(timerCountDown)
    answerCheck.textContent = ''
    introText.append('Your score is: ' + timer)
    var submitText = document.createElement('input')
    var submitbtn = document.createElement('button')
    submitText.placeholder = 'Please enter name'
    submitbtn.textContent = 'Submit'
    answerCheck.appendChild(submitText)
    answerCheck.append(submitbtn)
    submitbtn.addEventListener('click', function() {
        console.log('click')
        highScoreSubmit(submitText.value, timer);
        highScoreList();
        
    })
}
var wrongAnswer = function() {
    timer = timer - 10;
    answerCheck.textContent = "Wrong Answer"
}
var correctAnswer = function() {

    answerCheck.textContent = "Correct Answer"
}
var highScoreList = function() {
    // intro.textContent = ''
    intro.textContent = "High Score: " + highScores[0] + ': ' + highScores[1]
    answerCheck.textContent = ''
    var retryBtn = document.createElement('button')
    retryBtn.textContent = "Retry"
    answerCheck.append(retryBtn)
}
var solutions = function() {
    solutionReset();
    switch(questionNum) {
        case 0:
            introText.textContent = "Commonly used data types DO NOT include: "
            s1.textContent = 'strings'
            s2.textContent = 'booleans'
            s3.textContent = "alerts"
            s4.textContent = "numbers"
            break;
        case 1:
            introText.textContent = "The condition in an if / else statment is enclosed with ______"
            s1.textContent = 'quotes'
            s2.textContent = 'curly brackets'
            s3.textContent = 'parenthesis'
            s4.textContent = 'square brackets'
            break;
        case 2:
            introText.textContent = "A very useful tool used during development and debuggin for printing content to the bebugger is:"
            s1.textContent = 'JavaScript'
            s2.textContent = "terminal/bash"
            s3.textContent = 'for loops'
            s4.textContent = 'console.log'
            break;
        case 3:
            introText.textContent = "String values must be enclosed within ____ when being assigned to variables."
            s1.textContent = 'commas'
            s2.textContent = 'curly brackets'
            s3.textContent = 'quotes'
            s4.textContent = 'parenthesis'
            break;
        case 4:
            introText.textContent = 'Arrays in JavaScript can be used to store _____.'
            s1.textContent = 'numbers ans strings'
            s2.textContent = 'other arrays'
            s3.textContent = 'booleans'
            s4.textContent = 'all of the above'
    }
}
var solutionReset = function() {
    introText.textContent = ''
    s1.textContent = ''
    s2.textContent = ''
    s3.textContent = ''
    s4.textContent = ''
}
var loadScores = function() {
    var scores = JSON.parse(localStorage.getItem('player'))
    highScores = scores
    console.log(highScores[1])
}
loadScores();