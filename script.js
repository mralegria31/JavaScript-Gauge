var quizObject = [];
let timeLeft = 10;
let userScore = 0;
var hightScores = [];

var questionTextEl = document.querySelector("#question-text");
var questionChoicesEl = document.querySelector("#question-choices");
var questionAnswersEl = document.querySelector("#prev-question-answer");
var highScores = document.querySelector("#showscores");
var displayStartPage = document.querySelector("#start-screen");
var quizTimer = document.getElementById("timer");
var endQuizpage = document.getElementById("finalScore")
var hide = document.getElementById("endQuiz")


function initData() {
    //show only start page
    resetQuestionElements();

    quizObject = [];
    score = 0;

    quizObject.push({
        "id": 0,
        "question": "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds ?",
        "point": 10,
        "choices": [{
            "text": "setInterval(myTimer, 3)",
            "is_correct": false
        },
        {
            "text": "setInterval(myTimer, 30)",
            "is_correct": false
        },
        {
            "text": "setInterval(myTimer, 300)",
            "is_correct": false
        },
        {
            "text": "setInterval(myTimer, 3000)",
            "is_correct": true
        },

        ],

        "answer": "",
    },
        {
            "id": 1,
            "question": "What value would we add to setInterval() if we want a function called, myTimer() to run every 3 seconds",
            "point": 10,
            "choices": [{
                "text": "event.preventDefault()",
                "is_correct": false
            },
            {
                "text": "event.addEventListener()",
                "is_correct": false
            },
            {
                "text": "event.target",
                "is_correct": false
            },
            {
                "text": "event.stopPropagation()",
                "is_correct": true
            }],

            "answer": "",
        },
        {
            "id": 2,
            "question": "What operator is used to assign a value to a declared variable?",
            "point": 10,
            "choices": [{
                "text": "Equal sign (=)",
                "is_correct": true
            },
            {
                "text": "Colon (:)",
                "is_correct": false
            },
            {
                "text": "Double-equal (==)",
                "is_correct": false
            },
            {
                "text": "Question mark (?)",
                "is_correct": false
            }],

            "answer": "",
        },
        {
            "id": 3,
            "question": "You just finished the feature that you've been working on a successfully merged your branch, feature-52. How would you delete branch, feature-52?",
            "point": 10,
            "choices": [{
                "text": "git branch -d feature-52",
                "is_correct": true
            },
            {
                "text": "git checkout feature-52",
                "is_correct": false
            },
            {
                "text": "git merge feature-52",
                "is_correct": false
            },
            {
                "text": "git branch feature-52",
                "is_correct": false
            }],

            "answer": "",
        },
        {
            "id": 4,
            "question": "How do we declare a conditional statement in JavaScript?",
            "point": 10,
            "choices": [{
                "text": "   if...else",
                "is_correct": true
            },
            {
                "text": "for loop",
                "is_correct": false
            },
            {
                "text": "while loop",
                "is_correct": false
            },
            {
                "text": "difference...between",
                "is_correct": false
            }],

            "answer": "",
        }

    );

    console.log("questiions are ready. Quiz reset !");
}

function startQuiz() {
    initData();

    //close start page here with display none
    document.getElementById("start-screen").onclick = function () {
        document.getElementById("start-screen").style.display = "none";
    }

    setQuestion(0);
    //Timer

    timerInterval = setInterval(function () {
        timeLeft--;
        quizTimer.textContent = "Time Left : " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }

    }, 1000);

}

function setQuestion(question_id) {
    resetQuestionElements();

    for (i = 0; i < (quizObject).length; i++) {
        if (quizObject[i].id == question_id) {
            questionTextEl.append(quizObject[i].question);
            questionTextEl.setAttribute('data-question-id', quizObject[i].id);

            for (j = 0; j < (quizObject[i].choices).length; j++) {

                var list = document.createElement("button");
                var textnode = document.createTextNode(quizObject[i].choices[j].text);
                list.setAttribute('data-choice-id', j);
                list.setAttribute('onclick', "getAnswer(" + quizObject[i].id + "," + j + ")");
                list.appendChild(textnode);
                questionChoicesEl.appendChild(list);

            }

        }

    }


}

function resetQuestionElements() {
    questionChoicesEl.innerHTML = "";
    questionTextEl.innerHTML = "";

}

function getAnswer(question_id, choice_id) {

    questionAnswersEl.innerHTML = "";
    questionAnswersEl.style.borderTop = "solid #3cdcf5";

    var next_question_id = question_id + 1;

    if (quizObject[question_id].choices[choice_id].is_correct == true) {
        quizObject[question_id].answer = "Correct!";
        userScore += quizObject[question_id].point;

    } else {
        quizObject[question_id].answer = "Wrong!";
    }

    if (next_question_id < quizObject.length) {

        setQuestion(next_question_id);
    } else {
        resetQuestionElements();
        endQuiz();
    }

    questionAnswersEl.append(quizObject[question_id].answer);
}


function endQuiz() {


}
