var questions = document.querySelector("#questions")
var startbtn = document.querySelector("#start-btn")
var introText = document.querySelector("#intro")
var timerText = document.querySelector("#timer")
const selctions = [
    {
        0: "answer 1",
        1: "answer 2",
        2: "answer 3",
        3: "answer 4"
    },
    {
        0: "answer 5",
        1: "answer 6",
        2: "answer 7",
        3: "answer 8"
    },
    {
        0: "answer 9",
        1: "answer 10",
        2: "answer 11",
        3: "answer 12"
    },
    {
        0: "answer 13",
        1: "answer 14",
        2: "answer 15",
        3: "answer 16"
    },
    {
        0: "answer 17",
        1: "answer 18",
        2: "answer 19",
        3: "answer 20"
    }
]

var choices = []
var questionNum = 0;
var timer = 100;
var timerCountDown;
var answerbtn = document.querySelector(".answer-btn");
// startbtn.addEventListener("click", begin);
startbtn.addEventListener("click", function() {
    // show the first set of questions
    populateAnswers();
    timerCountDown = setInterval(function() {
        timer--;
        timerText.textContent = timer
        console.log(timer)
    }, 1000)
})


answerbtn.addEventListener("click", function(event) {
    populateAnswers(event);
    // choices.push(event.target.textContent)
    // console.log(choices)
})
var populateAnswers = function(event) {
    answerbtn.textContent = "";
    if (event) {
        choices.push(event.target.textContent)
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


        // get html on page
    }
    questionNum++;
    // if (questionNum > choices.length) {
    //     showAnswers();
    //     console.log(choices)
    //}
}
var showAnswers = function() {

    clearInterval(timerCountDown)
    for (let i = 0; i < choices.length; i++) {
        var choicesData = document.createElement("h3");
        choicesData.textContent = choices[i];
        
        answerbtn.append(choicesData)
    }
}