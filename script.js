const answer = document.querySelector("#answer");
const answerNote = document.querySelector("#answer-note");
const answerGroup = document.querySelector("#answer-group");
const cta = document.querySelector("#cta");
const themeToggle = document.querySelector("#theme-toggle");

const THEME_KEY = "whenagi-theme";

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

const answerNotes = [
  "According to the token sellers.",
  "As one CEO said.",
  "Per market consensus.",
  "According to the roadmaps.",
  "As the dashboards imply.",
  "Per the latest hot take.",
  "According to trusted vibes.",
  "As one founder put it.",
  "Per highly serious threads.",
  "According to informed posting.",
];

let previousAffirmationIndex = -1;
let previousNoteIndex = -1;

const setTheme = (theme) => {
  document.body.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
};

const storedTheme = localStorage.getItem(THEME_KEY);
const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

setTheme(storedTheme || (preferredDark ? "dark" : "light"));

const pickNextIndex = (items, previousIndex) => {
  if (items.length === 1) {
    return 0;
  }

  let nextIndex = Math.floor(Math.random() * items.length);

  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * items.length);
  }

  return nextIndex;
};

const reaffirm = () => {
  const affirmationIndex = pickNextIndex(affirmations, previousAffirmationIndex);
  const noteIndex = pickNextIndex(answerNotes, previousNoteIndex);

  answerGroup.hidden = false;
  answerGroup.classList.remove("is-hidden");
  answer.textContent = affirmations[affirmationIndex];
  answerNote.textContent = answerNotes[noteIndex];
  answerGroup.classList.remove("is-refreshing");
  cta.textContent = "Reveal Again";
  previousAffirmationIndex = affirmationIndex;
  previousNoteIndex = noteIndex;

  requestAnimationFrame(() => {
    answerGroup.classList.add("is-refreshing");
  });
};

cta.addEventListener("click", reaffirm);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});
