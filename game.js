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
        nextText: 64,
      },
      {
        text: "The blue room",
        nextText: 65,
      },
      {
        text: "The gray room",
        setState: { blueKey: true },
        nextText: 2,
      },
      {
        text: "The Green room",
        nextText: 66,
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
        nextText: 60,
      },
      {
        text: "Check the desk",
        nextText: 61,
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
        nextText: 2,
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
        nextText: 39,
      },
      {
        text: "Green door",
        nextText: 58,
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
        nextText: 37,
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
  {
    id: 37,
    text: "Oh look a red key but i dont need it.",
    options: [
      {
        text: "Go back",
        nextText: 38,
      },
    ],
  },
  {
    id: 38,
    text: "Now there is just one door left",
    options: [
      {
        text: "Green door",
        nextText: 36,
      },
    ],
  },
  {
    id: 39,
    text: "I should really use the key here",
    options: [
      {
        text: "Use lockpick",
        nextText: 40,
      },
      {
        text: "Use blue key",
        nextText: 45,
      },
      {
        text: "Go back",
        nextText: 32,
      },
    ],
  },
  {
    id: 40,
    text: "Ok... at leats the door is open and i found a red key!",
    options: [
      {
        text: "Go back",
        nextText: 41,
      },
    ],
  },
  {
    id: 41,
    text: "Only two doors left, i got a blue and red key now",
    options: [
      {
        text: "Red door",
        nextText: 42,
      },
      {
        text: "Green door",
        nextText: 57,
      },
    ],
  },
  {
    id: 42,
    text: "Wow look at that, the key fits, and on the floor. A green key!",
    options: [
      {
        text: "Go back",
        nextText: 43,
      },
    ],
  },
  {
    id: 43,
    text: "I should be close to getting out now",
    options: [
      {
        text: "Green door",
        nextText: 44,
      },
    ],
  },
  {
    id: 44,
    text: "I made it!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 45,
    text: "Nice! There's a red key there!",
    options: [
      {
        text: "Go back",
        nextText: 46,
      },
    ],
  },
  {
    id: 46,
    text: "Still got that lockpick but also a new red key.. wonder witch to use",
    options: [
      {
        text: "Red door",
        nextText: 47,
      },
      {
        text: "Green door",
        nextText: 52,
      },
    ],
  },
  {
    id: 47,
    text: "Hmmm key or lockpick? ",
    options: [
      {
        text: "Use red key",
        nextText: 48,
      },
      {
        text: "Use lockpick",
        nextText: 54,
      },
    ],
  },
  {
    id: 48,
    text: "Key it is and look a green key!",
    options: [
      {
        text: "Go back",
        nextText: 49,
      },
    ],
  },
  {
    id: 49,
    text: "Now just one door left!",
    options: [
      {
        text: "Green door",
        nextText: 50,
      },
    ],
  },
  {
    id: 50,
    text: "What should i use now?",
    options: [
      {
        text: "Use green key",
        nextText: 51,
      },
      {
        text: "Use lockpick",
        nextText: 51,
      },
    ],
  },
  {
    id: 51,
    text: "That took some time but finally, im out!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 52,
    text: "The red key don't fit but i could use a the lookpick",
    options: [
      {
        text: "Use lookpick",
        nextText: 53,
      },
      {
        text: "Go back",
        nextText: 46,
      },
    ],
  },
  {
    id: 53,
    text: "Wow i made it out!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 54,
    text: "Got it open! And theres a green key! ",
    options: [
      {
        text: "Go back",
        nextText: 55,
      },
    ],
  },
  {
    id: 55,
    text: "Now i just got the green door left!",
    options: [
      {
        text: "Green door",
        nextText: 56,
      },
    ],
  },
  {
    id: 56,
    text: "And just like that i made it",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 57,
    text: "I'ts locked and i don't have the green key yet...",
    options: [
      {
        text: "Go back",
        nextText: 41,
      },
    ],
  },
  {
    id: 58,
    text: "The green door, i could use my lockpick here",
    options: [
      {
        text: "Use lockpick",
        nextText: 59,
      },
      {
        text: "Go back",
        nextText: 32,
      },
    ],
  },
  {
    id: 59,
    text: "Sweet i made it out!",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 60,
    text: "Thats a really nice piano, my dad always played when i was younger",
    options: [
      {
        text: "Go back",
        nextText: 61,
      },
    ],
  },
  {
    id: 61,
    text: "This is an old oak desk, look in the drawer a blue key!",
    options: [
      {
        text: "Go back",
        nextText: 62,
      },
    ],
  },
  {
    id: 62,
    text: "This is an old oak desk, look in the drawer a blue key!",
    options: [
      {
        text: "Go back",
        nextText: 63,
      },
    ],
  },
  {
    id: 63,
    text: "I got both the lockpick and a blue key, where to go now?",
    options: [
      {
        text: "Red door",
        nextText: 33,
      },
      {
        text: "Blue door",
        nextText: 39,
      },
      {
        text: "Green door",
        nextText: 58,
      },
    ],
  },
  {
    id: 64,
    text: "This door is locked, i need the red key to go here",
    options: [
      {
        text: "Go back",
        nextText: 1,
      },
    ],
  },
  {
    id: 65,
    text: "The door is locked :( i need the blue key",
    options: [
      {
        text: "Go back",
        nextText: 1,
      },
    ],
  },
  {
    id: 66,
    text: "It seems to be a locked door, i think i need the green key to get in",
    options: [
      {
        text: "Go back",
        nextText: 1,
      },
    ],
  },
];
startQuest();
