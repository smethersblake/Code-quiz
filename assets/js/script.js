var questions = document.querySelector("#questions")
var startbtn = document.querySelector("#start-btn")
var introText = document.querySelector("#intro")
var timer = document.querySelector("#timer")
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
// var begin = function(){
//     introText.textContent = ""
//     console.log("click")
//     startbtn.remove();
//     // start timer function
//     timer.textContent = 5;
//     questions();
//     setInterval(function(){
//         if (timer.textContent <= 0){
//             console.log("time up")
//             clearInterval();
//         }
//             else{

//                 timer.textContent--
//             }
//     }, 1000) 
// }
// var questions = function(){
//     var questionEl = document.createElement("div");
//     for (i = 0; i < selctions.length; i++) {
//         console.log(selctions[0][i])
//         questionEl.textContent = selctions[0][i]
//     }
//     introText.appendChild(questionEl)
// }
var questionNum = 0;
var answerbtn = document.querySelector(".answer-btn");
var populateAnswers = function() {
    answerbtn.textContent = "";
    for (let i = 0; i < Object.keys(selctions[0]).length; i++) {
        //create html elements to hold the data
        var answertext = document.createElement("button");
        answertext.textContent = selctions[questionNum][i];


        // get html on page
        answerbtn.append(answertext)
    }
    questionNum++;
}
// startbtn.addEventListener("click", begin);
startbtn.addEventListener("click", function() {
    // show the first set of questions
    populateAnswers();
    })
answerbtn.addEventListener("click", function() {
    populateAnswers();
})