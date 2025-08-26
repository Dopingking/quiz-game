const quizData = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars"
  },
  {
    question: "Who is the founder of Microsoft?",
    options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Mark Zuckerberg"],
    correct: "Bill Gates"
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: "<a>"
  },
  {
    question: "What year did Nigeria gain independence?",
    options: ["1960", "1970", "1957", "1963"],
    correct: "1960"
  },
  {
    question: "Which language is primarily used for styling web pages?",
    options: ["HTML", "CSS", "Python", "JavaScript"],
    correct: "CSS"
  },
  {
    question: "What is the output of: console.log(typeof []) ?",
    options: ["array", "object", "list", "undefined"],
    correct: "object"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Jane Austen"],
    correct: "William Shakespeare"
  },
  {
    question: "Which gas do humans exhale during respiration?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: "Carbon Dioxide"
  },
  {
    question: "Which one is NOT a JavaScript framework?",
    options: ["React", "Angular", "Vue", "Django"],
    correct: "Django"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correct: "Pacific Ocean"
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    correct: "Cascading Style Sheets"
  },
  {
    question: "Which African country is known as the 'Giant of Africa'?",
    options: ["Kenya", "Nigeria", "South Africa", "Ghana"],
    correct: "Nigeria"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const retryBtn = document.getElementById("retry-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";
  q.options.forEach(option => {
    const div = document.createElement("div");
    div.textContent = option;
    div.classList.add("option");
    div.addEventListener("click", () => checkAnswer(div, q.correct));
    optionsEl.appendChild(div);
  });
  nextBtn.classList.add("hidden");
  retryBtn.classList.add("hidden");
  scoreEl.textContent = "";
}

function checkAnswer(selected, correct) {
  const options = document.querySelectorAll(".option");
  options.forEach(opt => {
    opt.style.pointerEvents = "none"; // lock answers
    if (opt.textContent === correct) {
      opt.classList.add("correct");
    } else if (opt === selected) {
      opt.classList.add("wrong");
    }
  });
  if (selected.textContent === correct) {
    score++;
  }
  nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

retryBtn.addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
});

function showResults() {
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = "";
  nextBtn.classList.add("hidden");
  retryBtn.classList.remove("hidden");
  scoreEl.textContent = `Your score: ${score} / ${quizData.length}`;
}

// start game
loadQuestion();
