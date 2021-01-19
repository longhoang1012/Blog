const quizData = [
    {
        question: "What is the most user programming language in 2019?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "Javascript",
        correct: "a",
    },
    {
        question: "What is not a programming language?",
        a: "ReactJs",
        b: "Css",
        c: "PHP",
        d: "HTML",
        correct: "d",
    },
    {
        question: "Who is the founder of Mircosoft Corporation?",
        a: "Steven Jobs",
        b: "Bill Gate",
        c: "Jack Ma",
        d: "Nguyễn Nhật Vượng",
        correct: "b",
    },
    {
        question: "Who is President of US in 2019?",
        a: "Barack Obama",
        b: "Donald Trump",
        c: "Abraham Lincoln",
        d: "Joe Biden",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Helicopters Terminals Motoboats Lamborginis",
        b: "Application Programming Interface",
        c: "Cascading Style Sheet",
        d: "Hypertext Markup Language",
        correct: "d",
    },
    {
        question: "What year was Javascript launched?",
        a: "1996",
        b: "1992",
        c: "1994",
        d: "None of the above",
        correct: "d",
    },

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers(); 

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if  (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers () {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //check to see answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
           quiz.innerHTML = `<h2>You answer correctly at ${score} / ${quizData.length} questions.</h2>
           <button onclick="location.reload()">Reload</button>`;
        }
    
    }

} );