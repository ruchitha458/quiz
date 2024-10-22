const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who is the CEO of Tesla?",
        a: "Jeff Bezos",
        b: "Elon Musk",
        c: "Bill Gates",
        d: "Tony Stark",
        correct: "b"
    },
    {
        question: "What is the most used programming language in 2024?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C#",
        correct: "a"
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1993",
        correct: "b"
    },
    {
        question: "Which company developed the iPhone?",
        a: "Microsoft",
        b: "Google",
        c: "Apple",
        d: "Samsung",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "High-Level Text Machine Language",
        c: "Hyper Tool Markup Language",
        d: "Hyperlinks Text Mark Language",
        correct: "a"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "William Shakespeare",
        b: "Charles Dickens",
        c: "Leo Tolstoy",
        d: "Mark Twain",
        correct: "a"
    },
    {
        question: "What is the largest mammal?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Giraffe",
        d: "Shark",
        correct: "b"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Oxygen",
        b: "Gold",
        c: "Silver",
        d: "Helium",
        correct: "a"
    },
    {
        question: "What is the square root of 64?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        a: "China",
        b: "Japan",
        c: "Thailand",
        d: "India",
        correct: "b"
    }
];

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const answersEls = document.querySelectorAll(".answer");

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer;
    answersEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            document.getElementById("quiz").innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});

loadQuiz();
