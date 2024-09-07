const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Define your own questions
let questions = [
  {
    question: "What is guaranteed under the Right to Freedom of Religion",
    choice1: "The right to practice any religion freely",
    choice2: "The right ti convert others to one's religion",
    choice3: "The right to be Exempt from all religious practice",
    choice4: "none",
    answer: 1, 
  },
  {
    question: "The Tenth schedule to the constitution is:",
    choice1: "Provisions regarding validation of certain Acts and Regulations",
    choice2: "Provisions regarding disqualification on ground of detection",
    choice3: "Provisions regarding the Administration.",
    choice4: "none",
    answer: 2,
  },
  {
    question: "The orignal Constitution of India was handwritten by",
    choice1: "Rafi Ahmed Kidwai",
    choice2: "Kailash Nath Katji",
    choice3: "Prem Behari Narain Raizada",
    choice4: "Kanaiyalal Menekal Munshi",
    answer: 3, 
  },
  // Add more questions here...
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length; // Adjust MAX_QUESTIONS to the number of custom questions

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question: ${questionCounter} / ${MAX_QUESTIONS}`;

  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
