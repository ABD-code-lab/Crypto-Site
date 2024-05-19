const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slide");

let currentIndex = 0;
const totalSlides = slideImages.length;

document.querySelector(".prev").addEventListener("click", showPrevSlide);
document.querySelector(".next").addEventListener("click", showNextSlide);

function showPrevSlide() {
  currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
  updateSlidePosition();
}

function showNextSlide() {
  currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
  updateSlidePosition();
}

function updateSlidePosition() {
  slides.style.transform = "translateX(" + -currentIndex * 100 + "%)";
}

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const currentlyActive = question.classList.contains("active");

    // Close all answers
    document.querySelectorAll(".faq-answer").forEach((answer) => {
      answer.style.maxHeight = null;
    });

    // Remove active class from all questions
    faqQuestions.forEach((question) => {
      question.classList.remove("active");
    });

    // If the clicked question is not currently active, open it
    if (!currentlyActive) {
      question.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
