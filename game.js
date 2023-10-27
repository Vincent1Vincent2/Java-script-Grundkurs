const questText = document.getElementById("questText");
const optionsButtonsContainer = document.getElementById("optionsButtons");

let state = {};

function startQuest() {
  state = {};
  showQuestText(1);
}

function showQuestText(textIndex) {
  const optionText = optionTexts.find(
    (optionText) => optionText.id === textIndex
  );
  questText.innerText = optionText.text;
}

function selectOption(option) {}

const optionTexts = [
  {
    id: 1,
    text: "You've been looked in a house and need to find the blue and red key to get out",
    options: [
      {
        text: "Go left",
        setState: { left: false },
        nextText: 2,
      },
      {
        text: "Go right",
        setState: { right: false },
        nextText: 2,
      },
      {
        text: "Go up",
        setState: { up: true },
        nextText: 3,
      },
      {
        text: "Go back",
        setState: { back: false },
        nextText: 2,
      },
    ],
  },
];

startQuest();
