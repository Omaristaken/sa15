const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Leo Tolstoy"],
    correctAnswer: "William Shakespeare"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Brain"],
    correctAnswer: "Mitochondria"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

let currentQuestionIndex = 0;


function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(li);
  });
}


function checkAnswer(selectedAnswer) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedAnswer === currentQuestion.correctAnswer) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = "Incorrect. Try again!";
    feedbackElement.style.color = "red";
  }
}


function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    feedbackElement.textContent = "";
  } else {
    questionElement.textContent = "Quiz completed!";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.disabled = true;
  }
}


loadQuestion();


nextButton.addEventListener("click", nextQuestion);
