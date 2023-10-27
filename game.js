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
  while (optionsButtonsContainer.firstChild) {
    optionsButtonsContainer.removeChild(optionsButtonsContainer.firstChild);
  }
  optionText.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("gameBtn");
      button.addEventListener("click", () => selectOption(option));
      optionsButtonsContainer.appendChild(button);
    }
  });
}

function showOption(option) {
  return true;
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
        nextText: 3,
      },
      {
        text: "Go up",
        setState: { up: true },
        nextText: 4,
      },
      {
        text: "Go back",
        setState: { back: false },
        nextText: 5,
      },
    ],
  },
  {
    id: 2,
    text: "You cant go here yet you need the red key",
    options: [
      {
        text: "Go back",
        setState: { back: true },
        nextText: 1,
      },
    ],
  },
  {
    id: 3,
    text: "You can't go here yet, you need the blue key",
    options: [
      {
        text: "Go back",
        setState: { back: true },
        nextText: 1,
      },
    ],
  },
  {
    id: 4,
    text: "You've enterd a small room with a piano and a desk, you open a drawer and find a blue key",
    options: [
      {
        text: "Take blue key",
        setState: { blueKey: true },
        nextText: 6,
      },
      {
        text: "Leave the blue key",
        setState: { blueKey: false },
        nextText: 1,
      },
    ],
  },
  {
    id: 5,
    text: "This door leads out but you need a green key to open it",
    options: [
      {
        text: "Go back",
        setState: { back: true },
        nextText: 1,
      },
    ],
  },
];

startQuest();
