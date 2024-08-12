const quizzes = {
    "General Knowledge": [
        { question: "What is the capital of France?", options: ["Paris", "London", "Rome", "Berlin"], answer: "Paris" },
        { question: "Who wrote 'Hamlet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"], answer: "William Shakespeare" },
        { question: "What is the largest planet in our solar system?", options: ["Mars", "Jupiter", "Saturn", "Earth"], answer: "Jupiter" }
    ],
    "Science": [
        { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: "H2O" },
        { question: "What planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
        { question: "How many bones are in the human body?", options: ["206", "205", "210", "201"], answer: "206" }
    ],
    "Mathematics": [
        { question: "What is 5 + 7?", options: ["10", "11", "12", "13"], answer: "12" },
        { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: "8" },
        { question: "What is 9 x 9?", options: ["72", "81", "90", "99"], answer: "81" }
    ],
    "History": [
        { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
        { question: "In what year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: "1945" },
        { question: "What was the ancient capital of Egypt?", options: ["Cairo", "Alexandria", "Thebes", "Memphis"], answer: "Thebes" }
    ],
    "Literature": [
        { question: "Who wrote 'Pride and Prejudice'?", options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Mary Shelley"], answer: "Jane Austen" },
        { question: "Which novel begins with the line 'Call me Ishmael'?", options: ["Moby-Dick", "War and Peace", "Great Expectations", "The Odyssey"], answer: "Moby-Dick" },
        { question: "Who is the author of '1984'?", options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.R.R. Tolkien"], answer: "George Orwell" }
    ]
};

let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function showQuizSelection() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('quiz-selection').classList.remove('hidden');

    const quizList = document.getElementById('quiz-list');
    quizList.innerHTML = '';

    for (let quiz in quizzes) {
        const li = document.createElement('li');
        li.innerHTML = `<button onclick="startQuiz('${quiz}')">${quiz}</button>`;
        quizList.appendChild(li);
    }
}

function startQuiz(quizName) {
    currentQuiz = quizzes[quizName];
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById('quiz-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-title').textContent = quizName;

    showQuestion();
}

function showQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <ul>
            ${question.options.map(option => `<li><input type="radio" name="answer" value="${option}"> ${option}</li>`).join('')}
        </ul>
    `;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        // Check if the selected answer is correct
        if (selectedOption.value === currentQuiz[currentQuestionIndex].answer) {
            score++;
        }

        // Move to the next question
        currentQuestionIndex++;

        // If there are more questions, show the next one
        if (currentQuestionIndex < currentQuiz.length) {
            showQuestion();
        } else {
            // No more questions, show the result
            showResult();
        }
    } else {
        alert('Please select an answer.');
    }
}

function showResult() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').textContent = `You scored ${score} out of ${currentQuiz.length}`;

    const correctAnswersList = document.getElementById('correct-answers');
    correctAnswersList.innerHTML = '';

    currentQuiz.forEach(question => {
        const li = document.createElement('li');
        li.textContent = `${question.question} - Correct answer: ${question.answer}`;
        correctAnswersList.appendChild(li);
    });
}

function restartQuiz() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}
