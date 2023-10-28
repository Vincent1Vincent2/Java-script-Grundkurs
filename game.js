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
  return option.requierdState == null || option.requierdState(state);
}

function selectOption(option) {
  const nextQuestTextId = option.nextText;
  state = Object.assign(state, option.setState);
  showQuestText(nextQuestTextId);
}

const optionTexts = [
  {
    id: 1,
    text: "You've been looked in a house and need to find the blue, red and green key to get out",
    options: [
      {
        text: "Go left",
        nextText: 2,
      },
      {
        text: "Go right",
        nextText: 3,
      },
      {
        text: "Go up",
        setState: { blueKey: true },
        nextText: 4,
      },
      {
        text: "Go back",
      },
    ],
  },
  {
    id: 2,
    text: "You need the red key to open this door",
    options: [
      {
        text: "Go back",
        nextText: 1,
      },
    ],
  },
  {
    id: 3,
    text: "You need the blue key to open this door",
    options: [
      {
        text: "Go back",
        nextText: 1,
      },
    ],
  },
  {
    id: 4,
    text: "You enter a small room with a piano, bookshelf and desk",
    options: [
      {
        text: "Check bookshelf",
        nextText: 5,
      },
      {
        text: "Play the piano",
        nextText: 6,
      },
      {
        text: "Check the desk",
        nextText: 7,
      },
    ],
  },
  {
    id: 5,
    text: "It's a wooden bookshelf with a lot of books. And there seems to be a lockpicking kit",
    options: [
      {
        text: "Take the lockpicking kit",
        nextText: 6,
      },
      {
        text: "Play the piano",
        nextText: 6,
      },
      {
        text: "Check the desk",
        nextText: 7,
      },
      {
        text: "Go back",
        nextText: 8,
      },
    ],
  },
];

startQuest();
