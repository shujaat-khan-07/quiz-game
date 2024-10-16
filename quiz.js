

const quizData = [
    {
        question: "Que 1: What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: " Que 2: Which language is primarily spoken in Brazil?",
        a: "Spanish",
        b: "Portuguese",
        c: "English",
        d: "French",
        correct: "b"
    },
    {
    question: "Ques 3: What is the capital of India?",
    a: "Kolkata",
    b: "Chennai",
    c: "New Delhi",
    d: "Mumbai",
    correct: "c"
    },
    {
        question: " Ques 4: What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <ul class="options">
            <li><input type="radio" name="answer" value="a"> ${currentQuizData.a}</li>
            <li><input type="radio" name="answer" value="b"> ${currentQuizData.b}</li>
            <li><input type="radio" name="answer" value="c"> ${currentQuizData.c}</li>
            <li><input type="radio" name="answer" value="d"> ${currentQuizData.d}</li>
        </ul>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let answer;
    answers.forEach((ans) => {
        if (ans.checked) {
            answer = ans.value;
        }
    });
    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            result.innerHTML = `You scored ${score} out of ${quizData.length}`;
            quiz.style.display = 'none';
            submitButton.style.display = 'none';
        }
    }
});

loadQuiz();
