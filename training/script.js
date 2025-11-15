const video = document.getElementById("lessonVideo");
const startQuizBtn = document.getElementById("startQuizBtn");
const quizBox = document.getElementById("quizBox");
const result = document.getElementById("result");

// Show quiz button when video ends
video.onended = () => {
  startQuizBtn.classList.remove("hidden");
};

// Show quiz when button is clicked
startQuizBtn.onclick = () => {
  quizBox.classList.remove("hidden");
  startQuizBtn.classList.add("hidden");
};

// Check answer
document.querySelectorAll(".option").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.dataset.answer;

    if (answer === "blue") {
      result.textContent = "✅ Correct!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Incorrect. Try again!";
      result.style.color = "red";
    }
  });
});
