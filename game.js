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
    text: "You've been looked in a house and need to the three keys to get out",
    options: [
      {
        text: "The red room",
        nextText: 0,
      },
      {
        text: "The blue room",
        nextText: 0,
      },
      {
        text: "The gray room",
        setState: { blueKey: true },
        nextText: 2,
      },
      {
        text: "The Green room",
        nextText: 0,
      },
    ],
  },
  {
    id: 2,
    text: "You walk into a room with a piano, a bookshelf and a desk",
    options: [
      {
        text: "Check piano",
        nextText: 18,
      },
      {
        text: "Check bookshelf",
        nextText: 3,
      },
      {
        text: "Check desk",
        nextText: 19,
      },
    ],
  },
  {
    id: 3,
    text: "You found a lockpicking kit!",
    options: [
      {
        text: "Go back",
        nextText: 4,
      },
      {
        text: "Check piano",
        nextText: 0,
      },
      {
        text: "Check the desk",
        nextText: 0,
      },
    ],
  },
  {
    id: 4,
    text: "Wonder what door i should open with this lockpick",
    options: [
      {
        text: "The red room",
        nextText: 5,
      },
      {
        text: "The blue room",
        nextText: 9,
      },
      {
        text: "The green room",
        nextText: 16,
      },
    ],
  },
  {
    id: 5,
    text: "Look, red door wow!",
    options: [
      {
        text: "Go back",
        nextText: 4,
      },
      {
        text: "Use lockpick",
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    text: "Look there on the floor, a green key!",
    options: [
      {
        text: "Go back",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "Hmmm i wonder where this leads",
    options: [
      {
        text: "Blue room",
        nextText: 17,
      },
      {
        text: "Green room",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    text: "You have opend the green door and escaped!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 9,
    text: "Look blue door wow",
    options: [
      {
        text: "Go back",
        nextText: 4,
      },
      {
        text: "Use lockpick",
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    text: "Look on the floor! A red key!",
    options: [
      {
        text: "Go back",
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    text: "Hmmmm i wonder what door this goes to",
    options: [
      {
        text: "Red room",
        nextText: 12,
      },
      {
        text: "Green room",
        nextText: 15,
      },
    ],
  },
  {
    id: 12,
    text: "Look at that, i green key! ",
    options: [
      {
        text: "Go back",
        nextText: 13,
      },
    ],
  },
  {
    id: 13,
    text: "This gotta go to the green door, right? ",
    options: [
      {
        text: "Green door",
        nextText: 14,
      },
    ],
  },
  {
    id: 14,
    text: "Wooooow you made it out! ",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 15,
    text: "This door is locked, i think i need the green key",
    options: [
      {
        text: "Go back",
        nextText: 11,
      },
    ],
  },
  {
    id: 16,
    text: "WOOOOOWWWWW YOU MADE IT OUT!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 17,
    text: "This door is locked, you need the blue key",
    options: [
      {
        text: "Go back",
        nextText: 7,
      },
    ],
  },
  {
    id: 18,
    text: "To bad i can't play, it looks like a nice piano",
    options: [
      {
        text: "Go back",
        nextText: 3,
      },
    ],
  },
  {
    id: 19,
    text: "Wow, a blue key in one of the drawers!",
    options: [
      {
        text: "Go back",
        nextText: 20,
      },
    ],
  },
  {
    id: 20,
    text: "Wonder where this key leads",
    options: [
      {
        text: "Go back",
        nextText: 21,
      },
      {
        text: "Check piano",
        nextText: 30,
      },
      {
        text: "Check bookshelf",
        nextText: 31,
      },
    ],
  },
  {
    id: 21,
    text: "This must go to the blue door",
    options: [
      {
        text: "Red door",
        nextText: 27,
      },
      {
        text: "Blue door",
        nextText: 22,
      },
      {
        text: "Green door",
        nextText: 28,
      },
    ],
  },
  {
    id: 22,
    text: "There on the floor, a red key! ",
    options: [
      {
        text: "Go back",
        nextText: 23,
      },
    ],
  },
  {
    id: 23,
    text: "Now, lets see where this takes me",
    options: [
      {
        text: "Red door",
        nextText: 24,
      },
      {
        text: "Green door",
        nextText: 29,
      },
    ],
  },
  {
    id: 24,
    text: "This is easy, a green key!",
    options: [
      {
        text: "Go back",
        nextText: 25,
      },
    ],
  },
  {
    id: 25,
    text: "Im soon out!",
    options: [
      {
        text: "Green door",
        nextText: 26,
      },
    ],
  },
  {
    id: 26,
    text: "Yes, i made it!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 27,
    text: "Seems this door is looked and i need a red key",
    options: [
      {
        text: "Go back",
        nextText: 21,
      },
    ],
  },
  {
    id: 28,
    text: "Seems this door is looked and i need a green key",
    options: [
      {
        text: "Go back",
        nextText: 21,
      },
    ],
  },
  {
    id: 29,
    text: "I have a red key and this door need a green",
    options: [
      {
        text: "Go back",
        nextText: 23,
      },
    ],
  },
  {
    id: 30,
    text: "To bad i can't play, it looks like a nice piano",
    options: [
      {
        text: "Go back",
        nextText: 20,
      },
    ],
  },
  {
    id: 31,
    text: "Wow a lookpick kit, this will come in handy!",
    options: [
      {
        text: "Go back",
        nextText: 32,
      },
    ],
  },
  {
    id: 32,
    text: "So a blue key, and a lockpick, what can i do with this?",
    options: [
      {
        text: "Red door",
        nextText: 33,
      },
      {
        text: "Blue door",
        nextText: 31,
      },
      {
        text: "Green door",
        nextText: 31,
      },
    ],
  },
  {
    id: 33,
    text: "The blue key dosen't fit but i could use the lookpick",
    options: [
      {
        text: "Use lookpick",
        nextText: 34,
      },
      {
        text: "Go back",
        nextText: 32,
      },
    ],
  },
  {
    id: 34,
    text: "It worked! And there, a green key!",
    options: [
      {
        text: "Go back",
        nextText: 35,
      },
    ],
  },
  {
    id: 35,
    text: "So... do i use the blue or green key?",
    options: [
      {
        text: "Blue door",
        nextText: 0,
      },
      {
        text: "Green door",
        nextText: 36,
      },
    ],
  },
  {
    id: 36,
    text: "Oh wow, the smell of freedome, i made it out!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
];
startQuest();
