const answer = document.querySelector("#answer");
const cta = document.querySelector("#cta");

const affirmations = [
  "YES",
  "Still yes",
  "Confirmed",
  "Absolutely",
  "Unchanged",
  "Again yes",
  "Indeed yes",
  "Same result",
  "Definitively",
  "Every time",
];

let affirmationIndex = 0;

const reaffirm = () => {
  answer.hidden = false;
  answer.classList.remove("is-hidden");
  answer.textContent = affirmations[affirmationIndex];
  answer.classList.remove("is-refreshing");
  cta.textContent = "Reveal Again";
  affirmationIndex = (affirmationIndex + 1) % affirmations.length;

  requestAnimationFrame(() => {
    answer.classList.add("is-refreshing");
  });
};

cta.addEventListener("click", reaffirm);
