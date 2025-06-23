const rateButtons = document.querySelectorAll(".rate-button");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const submitButton = document.querySelector(".submit");
const ratedValue = document.querySelector(".rate-value");

let rateValue = 0;

rateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    rateButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    rateValue = parseFloat(button.value);
  });
});

function switchSections() {
  rating.classList.toggle("hide");
  thanks.classList.toggle("hide");
}

const API_BASE_URL = "https://interactive-rating-component-b4zo.onrender.com";
submitButton.addEventListener("click", async () => {
  if (rateValue === 0) {
    rateButtons.forEach((btn) => btn.classList.add("error"));
    setTimeout(() => {
      rateButtons.forEach((btn) => btn.classList.remove("error"));
    }, 1000);
  } else {
    try {
      const response = await fetch(`${API_BASE_URL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: rateValue }),
      });

      const result = await response.json();

      if (response.ok) {
        ratedValue.textContent = rateValue;
        switchSections();
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      alert("Server error");
    }
  }
});
