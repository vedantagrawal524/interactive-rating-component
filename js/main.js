const rateButtons = document.querySelectorAll(".rate-button");
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const submitButton = document.querySelector(".submit");
const ratedValue = document.querySelector(".rate-value");

let rateValue = 0;

rateButtons.forEach(button => {
     button.addEventListener('click', () => {
          rateButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          rateValue = parseFloat(button.value);
     });
});

function switchSections() {
     rating.classList.toggle("hide");
     thanks.classList.toggle("hide");
}

submitButton.addEventListener("click", () => {
     if (rateValue === 0) {
          rateButtons.forEach(btn => btn.classList.add('error'));
          setTimeout(() => {
               rateButtons.forEach(btn => btn.classList.remove('error'));
          }, 1000);
          return;
     }
     ratedValue.textContent = rateValue;
     switchSections();
});