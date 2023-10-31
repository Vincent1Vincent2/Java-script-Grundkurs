const questText = document.getElementById("questText");
const optionsButtonsContainer = document.getElementById("optionsButtons");
const inventoryContainer = document.getElementById("inventoryItems");
const blueKey = document.getElementById("blueKey");
const redKey = document.getElementById("redKey");
const greenKey = document.getElementById("greenKey");
const lockPick = document.getElementById("lockPick");
const noteSheet = document.getElementById("noteSheet");

blueKey.style.display = "none";
redKey.style.display = "none";
greenKey.style.display = "none";
lockPick.style.display = "none";
noteSheet.style.display = "none";

let state = {
  blueKey: false,
  redKey: false,
  greenKey: false,
  lockPick: false,
  noteSheet: false,
};

function startQuest() {
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
    {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("gameBtn");
      button.addEventListener("click", () => selectOption(option));
      optionsButtonsContainer.appendChild(button);
    }
  });
}

const inventoryItemIDs = [
  "blueKey",
  "redKey",
  "greenKey",
  "lockPick",
  "noteSheet",
];

function selectOption(option) {
  const nextQuestTextId = option.nextText;

  showQuestText(nextQuestTextId);

  if (option.text === "Play piano") {
    const pianoSound = document.getElementById("pianoSound");
    if (pianoSound) {
      pianoSound.play();
    }
  }
  if (option.text === "Go back") {
    const pianoSound = document.getElementById("pianoSound");
    if (pianoSound) {
      pianoSound.pause();
    }
  }
  if (option.setState) {
    option.setState.forEach((item) => {
      for (const key in item) {
        state[key] = item[key];
      }
    });

    inventoryItemIDs.forEach((itemID) => {
      const inventoryItem = document.getElementById(itemID);
      if (inventoryItem) {
        inventoryItem.style.display = state[itemID] ? "block" : "none";
      }
    });
  }
}

const optionTexts = [
  {
    id: 1,
    text: "You've been looked in a house and need to the three keys to get out",
    options: [
      {
        text: "The red door",
        nextText: 64,
      },
      {
        text: "The blue door",
        nextText: 65,
      },
      {
        text: "The gray door",
        nextText: 2,
      },
      {
        text: "The green door",
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
        setState: [{ lockPick: true }],
      },
      {
        text: "Check desk",
        nextText: 19,
        setState: [{ blueKey: true }],
      },
      {
        text: "Go back",
        nextText: 1,
      },
    ],
  },
  {
    id: 3,
    text: "You found a lockpicking kit!",
    options: [
      {
        text: "Check piano",
        nextText: 60,
      },
      {
        text: "Check the desk",
        nextText: 61,
        setState: [{ blueKey: true }],
      },
      {
        text: "Go back",
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Wonder what door i should open with this lockpick",
    options: [
      {
        text: "The red door",
        nextText: 5,
      },
      {
        text: "The blue door",
        nextText: 9,
      },
      {
        text: "The gray door",
        nextText: 67,
      },
      {
        text: "The green door",
        nextText: 16,
      },
    ],
  },
  {
    id: 5,
    text: "Look, red door wow!",
    options: [
      {
        text: "Use lockpick",
        nextText: 6,
        setState: [
          { lockPick: false },
          { greenKey: true },
          { noteSheet: true },
        ],
      },
      {
        text: "Go back",
        nextText: 4,
      },
    ],
  },
  {
    id: 6,
    text: "Look there on the floor, a green key! And whats that? A note sheet",
    options: [
      {
        text: "Go back",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: "Hmmm i wonder where this leads and what i could use the note sheet for?",
    options: [
      {
        text: "Blue door",
        nextText: 17,
      },
      {
        text: "Gray door",
        nextText: 71,
      },
      {
        text: "Green door",
        nextText: 8,
        setState: [{ greenKey: false }],
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
        text: "Use lockpick",
        nextText: 10,
        setState: [{ lockPick: false }, { redKey: true }],
      },
      {
        text: "Go back",
        nextText: 4,
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
        text: "Red door",
        nextText: 12,
        setState: [{ redKey: false }, { greenKey: true }, { noteSheet: true }],
      },
      {
        text: "Gray door",
        nextText: 103,
      },
      {
        text: "Green door",
        nextText: 15,
      },
    ],
  },
  {
    id: 12,
    text: "Look at that, a green key and a note sheet.",
    options: [
      {
        text: "Go back",
        nextText: 13,
      },
    ],
  },
  {
    id: 13,
    text: "This gotta go to the green door, right?",
    options: [
      {
        text: "Gray door",
        nextText: 105,
      },
      {
        text: "Green door",
        nextText: 14,
        setState: [{ greenKey: false }],
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
        setState: [{ noteSheet: false }],
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
    text: "I could use the lockpick here",
    options: [
      {
        text: "Use lockpick",
        nextText: 16.1,
        setState: [{ lockPick: false }],
      },
      {
        text: "Go back",
        nextText: 4,
      },
    ],
  },
  {
    id: 16.1,
    text: "WOOOOOWWWWW YOU MADE IT OUT!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ lockPick: false }],
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
    text: "Too bad i can't play, it looks like a nice piano",
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
        text: "Check piano",
        nextText: 30,
      },
      {
        text: "Check bookshelf",
        nextText: 31,
        setState: [{ lockPick: true }],
      },
      {
        text: "Go back",
        nextText: 21,
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
        setState: [{ blueKey: false }, { redKey: true }],
      },
      {
        text: "Gray door",
        nextText: 20,
      },
      {
        text: "Green door",
        nextText: 28,
      },
    ],
  },
  {
    id: 22,
    text: "There on the floor, a red key!",
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
        setState: [{ redKey: false }, { greenKey: true }, { noteSheet: true }],
      },
      {
        text: "Gray door",
        nextText: 109,
      },
      {
        text: "Green door",
        nextText: 29,
      },
    ],
  },
  {
    id: 24,
    text: "This is easy, there's a green key and a note sheet!",
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
        text: "Gray door",
        nextText: 120,
      },
      {
        text: "Green door",
        nextText: 26,
        setState: [{ greenKey: false }],
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
        setState: [{ noteSheet: false }],
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
        setState: [
          { lockPick: false },
          { greenKey: true },
          { noteSheet: true },
        ],
      },
      {
        text: "Go back",
        nextText: 32,
      },
    ],
  },
  {
    id: 34,
    text: "It worked! And there, a green key and note sheet",
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
        setState: [{ blueKey: false }, { redKey: true }],
      },
      {
        text: "Gray door",
        nextText: 135,
      },
      {
        text: "Green door",
        nextText: 36,
        setState: [{ greenKey: false }],
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
        setState: [{ blueKey: false }, { redKey: false }, { noteSheet: false }],
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
    text: "Now there is just one door left", //red, green, note (lockpick used)
    options: [
      {
        text: "Gray door",
        nextText: 143,
      },
      {
        text: "Green door",
        nextText: 36,
        setState: [{ greenKey: false }],
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
        setState: [{ lockPick: false }, { redKey: true }],
      },
      {
        text: "Use blue key",
        nextText: 45,
        setState: [{ blueKey: false }, { redKey: true }],
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
    text: "Three doors left, i got a blue and red key now", //red, blue (lockpick used) no note
    options: [
      {
        text: "Red door",
        nextText: 42,
        setState: [{ redKey: false }, { greenKey: true }, { noteSheet: true }],
      },
      {
        text: "Gray door",
        nextText: 148,
      },
      {
        text: "Green door",
        nextText: 57,
      },
    ],
  },
  {
    id: 42,
    text: "Wow look at that, the key fits, and on the floor. A green key a note sheet",
    options: [
      {
        text: "Go back",
        nextText: 43,
      },
    ],
  },
  {
    id: 43,
    text: "I should be close to getting out now", //blue green note (lockpick, red used)
    options: [
      { text: "Gray door", nextText: 150 },
      {
        text: "Green door",
        nextText: 44,
        setState: [{ greenKey: false }],
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
        setState: [{ blueKey: false }, { noteSheet: false }],
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
    text: "So a lockpick and a red key.. wonder witch to use",
    options: [
      {
        text: "Red door",
        nextText: 47,
      },
      {
        text: "Gray door",
        nextText: 112,
      },
      {
        text: "Green door",
        nextText: 52,
      },
    ],
  },
  {
    id: 47,
    text: "Hmmm key or lockpick? ", //red, lockpick (blue used, no note)
    options: [
      {
        text: "Use red key",
        nextText: 48,
        setState: [{ redKey: false }, { greenKey: true }, { noteSheet: true }],
      },
      {
        text: "Use lockpick",
        nextText: 54,
        setState: [
          { lockPick: false },
          { greenKey: true },
          { noteSheet: true },
        ],
      },
    ],
  },
  {
    id: 48,
    text: "Look a green key and a note sheet!",
    options: [
      {
        text: "Go back",
        nextText: 49,
      },
    ],
  },
  {
    id: 49,
    text: "Now i got a lockpick, green key and a note sheet.. wow.", //lockpick, green, note (red key, used)
    options: [
      {
        text: "Gray door",
        nextText: 114,
      },
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
        setState: [{ greenKey: false }],
      },
      {
        text: "Use lockpick",
        nextText: 155,
        setState: [{ lockPick: false }],
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
        setState: [{ noteSheet: false }, { lockPick: false }],
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
        setState: [{ lockPick: false }],
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
        setState: [{ redKey: false }],
      },
    ],
  },
  {
    id: 54,
    text: "Got it open! And theres a green key plus a note sheet", // green, red, notesheet (lockpick used, blue used)
    options: [
      {
        text: "Go back",
        nextText: 55,
      },
    ],
  },
  {
    id: 55,
    text: "Now i just got the green door left!", // green, red, notesheet (lockpick used, blue used)
    options: [
      {
        text: "Gray door",
        nextText: 143,
      },
      {
        text: "Green door",
        nextText: 56,
        setState: [{ greenKey: false }],
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
        setState: [{ redKey: false }, { noteSheet: false }],
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
        setState: [{ lockPick: false }],
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
        setState: [{ blueKey: false }],
      },
    ],
  },
  {
    id: 60,
    text: "Thats a really nice piano, my dad always played when i was younger",
    options: [
      {
        text: "Go back",
        nextText: 3,
      },
    ],
  },
  {
    id: 61,
    text: "It's an old oak desk and look in the drawer a blue key!",
    options: [
      {
        text: "Go back",
        nextText: 63,
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
        text: "Gray door",
        nextText: 69,
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
  {
    id: 67,
    text: "I wonder what else's in here",
    options: [
      {
        text: "Check piano",
        nextText: 68,
      },
      {
        text: "Check the desk",
        nextText: 61,
        setState: [{ blueKey: true }],
      },
      {
        text: "Go back",
        nextText: 4,
      },
    ],
  },
  {
    id: 68,
    text: "I wish i could play this",
    options: [
      {
        text: "Go back",
        nextText: 67,
      },
    ],
  },
  {
    id: 69,
    text: "Just the piano left...",
    options: [
      {
        text: "Check piano",
        nextText: 70,
      },
    ],
  },
  {
    id: 70,
    text: "Still can't play :(",
    options: [
      {
        text: "Go back",
        nextText: 63,
      },
    ],
  },
  {
    id: 71,
    text: "I wonder what more this room holds",
    options: [
      {
        text: "Check piano",
        nextText: 72,
      },
      {
        text: "Check the desk",
        nextText: 74,
        setState: [{ blueKey: true }],
      },
      {
        text: "Go back",
        nextText: 75,
      },
    ],
  },
  {
    id: 72,
    text: "Lets see if i can follow the note sheet i found",
    options: [
      {
        text: "Play piano",
        nextText: 73,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 71,
      },
    ],
  },
  {
    id: 73,
    text: "Now playing: ",
    options: [
      {
        text: "Go back",
        nextText: 71,
      },
    ],
  },
  {
    id: 74,
    text: "Oh wow, a blue key, this will come in handy!",
    options: [
      {
        text: "Go back",
        nextText: 85,
      },
    ],
  },
  {
    id: 75,
    text: "Now let's see what to do!",
    options: [
      {
        text: "Blue door",
        nextText: 76,
      },
      {
        text: "Gray door",
        nextText: 77,
      },
      {
        text: "Green door",
        nextText: 102,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 76,
    text: "This door is locked... i need the blue key",
    options: [
      {
        text: "Go back",
        nextText: 75,
      },
    ],
  },
  {
    id: 77,
    text: "I wonder if i can use this piano sheet",
    options: [
      {
        text: "Check piano",
        nextText: 78,
      },
      {
        text: "Check desk",
        nextText: 80,
        setState: [{ blueKey: true }],
      },
      {
        text: "Go back",
        nextText: 75,
      },
    ],
  },
  {
    id: 78,
    text: "Let's see if i can follow this sheet",
    options: [
      {
        text: "Play piano",
        nextText: 79,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 77,
      },
    ],
  },
  {
    id: 79,
    text: "Now playing:",
    options: [
      {
        text: "Go back",
        nextText: 77,
      },
    ],
  },
  {
    id: 80,
    text: "Wow no way, a blue key in the drawer",
    options: [
      {
        text: "Go back",
        nextText: 81,
      },
    ],
  },
  {
    id: 81,
    text: "I got both a blue and a green key now. What to pick?", //blue, green (note, lockpick used )
    options: [
      {
        text: "Blue door",
        nextText: 82,
        setState: [{ blueKey: false }, { redKey: true }],
      },
      {
        text: "Green door",
        nextText: 101,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 82,
    text: "There's a red key, but i've already been there...",
    options: [
      {
        text: "Go back",
        nextText: 83,
      },
    ],
  },
  {
    id: 83,
    text: "Just the last door now!",
    options: [
      {
        text: "Green door",
        nextText: 84,
      },
    ],
  },
  {
    id: 84,
    text: "I made it out! WOWOWOWOO",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 85,
    text: "I got so much stuff now, what to use first",
    options: [
      {
        text: "Blue door",
        nextText: 86,
        setState: [{ blueKey: false }, { redKey: true }],
      },
      {
        text: "Gray door",
        nextText: 92,
      },
      {
        text: "Green door",
        nextText: 100,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 86,
    text: "Look, a red key o the floor, but i've already been there",
    options: [
      {
        text: "Go back",
        nextText: 87,
      },
    ],
  },
  {
    id: 87,
    text: "I have to be close to getting out now",
    options: [
      {
        text: "Gray room",
        nextText: 88,
      },
      {
        text: "Green room",
        nextText: 91,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 88,
    text: "I wonder if i could use the note sheet? ",
    options: [
      {
        text: "Check piano",
        nextText: 89,
      },
      {
        text: "Go back",
        nextText: 87,
      },
    ],
  },
  {
    id: 89,
    text: "Let's see if i can follow this",
    options: [
      {
        text: "Play piano",
        nextText: 90,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 88,
      },
    ],
  },
  {
    id: 90,
    text: "Now playing",
    options: [
      {
        text: "Go back",
        nextText: 90.1,
      },
    ],
  },
  {
    id: 90.1,
    text: "Guess theres one way out! ",
    options: [
      {
        text: "Green door",
        nextText: 91,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 91,
    text: "I made it out, feels good man",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ redKey: false }, { noteSheet: false }],
      },
    ],
  },
  {
    id: 92,
    text: "I wonder if i can do anything with this note sheet",
    options: [
      {
        text: "Check piano",
        nextText: 93,
      },
      {
        text: "Go back",
        nextText: 85,
      },
    ],
  },
  {
    id: 93,
    text: "Let's see if i can follow the note sheet",
    options: [
      {
        text: "Play piano",
        nextText: 94,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 92,
      },
    ],
  },
  {
    id: 94,
    text: "Now playing: ",
    options: [
      {
        text: "Go back",
        nextText: 95,
      },
    ],
  },
  {
    id: 95,
    text: "Let's see, a blue key and a green one",
    options: [
      {
        text: "Blue door",
        nextText: 96,
        setState: [{ blueKey: false }, { redKey: true }],
      },
      {
        text: "Green door",
        nextText: 99,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 96,
    text: "Look a red key, too bad i've alredy been there",
    options: [
      {
        text: "Go back",
        nextText: 97,
      },
    ],
  },
  {
    id: 97,
    text: "Just one more door, i can smell the freedome",
    options: [
      {
        text: "Green door",
        nextText: 98,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 98,
    text: "I made it!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ redKeyKey: false }],
      },
    ],
  },
  {
    id: 99,
    text: "Yes i made it!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ blueKey: false }],
      },
    ],
  },
  {
    id: 100,
    text: "Finally, im out!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ blueKey: false }, { noteSheet: false }],
      },
    ],
  },
  {
    id: 101,
    text: "Yes the smell of freedome",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ blueKey: false }, { noteSheet: false }],
      },
    ],
  },
  {
    id: 102,
    text: "Yes the smell of freedome",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ noteSheet: false }],
      },
    ],
  },
  {
    id: 103,
    text: "Only the piano left",
    options: [
      {
        text: "Check piano",
        nextText: 104,
      },
    ],
  },
  {
    id: 104,
    text: "Wish i could play this",
    options: [
      {
        text: "Go back",
        nextText: 11,
      },
    ],
  },
  {
    id: 105,
    text: "Go the note sheet, now let's check out the piano",
    options: [
      {
        text: "Check piano",
        nextText: 106,
      },
      {
        text: "Go back",
        nextText: 13,
      },
    ],
  },
  {
    id: 106,
    text: "Go the note sheet, now let's check out the piano",
    options: [
      {
        text: "Play piano",
        nextText: 107,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 13,
      },
    ],
  },
  {
    id: 107,
    text: "Now playing: ",
    options: [
      {
        text: "Go back",
        nextText: 108,
      },
    ],
  },
  {
    id: 107,
    text: "Only one door left",
    options: [
      {
        text: "Green door",
        nextText: 108,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 108,
    text: "I made it out",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 109,
    text: "red key no sheet, no blue",
    options: [
      {
        text: "Check piano",
        nextText: 110,
      },
      {
        text: "Check bookshelf",
        nextText: 111,
        setState: [{ lockPick: true }],
      },
      {
        text: "Go back",
        nextText: 23,
      },
    ],
  },
  {
    id: 110,
    text: "This is a nice piano what a shame i can't play",
    options: [
      {
        text: "Go back",
        nextText: 109,
      },
    ],
  },
  {
    id: 111,
    text: "Oh look a lockpick, this will come in handy",
    options: [
      {
        text: "Go back",
        nextText: 46,
      },
    ],
  },
  {
    id: 112,
    text: "Just the piano left here",
    options: [
      {
        text: "Check piano",
        nextText: 113,
      },
    ],
  },
  {
    id: 113,
    text: "Still wish i could play this",
    options: [
      {
        text: "Go back",
        nextText: 46,
      },
    ],
  },
  {
    id: 114,
    text: "I should check the piano now",
    options: [
      {
        text: "Check piano",
        nextText: 115,
      },
    ],
  },
  {
    id: 115,
    text: "Let's see if i can follow the note sheet",
    options: [
      {
        text: "Play piano",
        nextText: 116,
        setState: [{ noteSheet: false }],
      },
    ],
  },
  {
    id: 116,
    text: "Now playing:",
    options: [
      {
        text: "Go back",
        nextText: 117,
      },
    ],
  },
  {
    id: 117,
    text: "Both the key and the lockpick.",
    options: [
      {
        text: "Green door",
        nextText: 118,
      },
    ],
  },
  {
    id: 118,
    text: "Witch to use...", //green, lockpick (note, blue used)
    options: [
      {
        text: "Use lockpick",
        nextText: 119,
        setState: [{ lockPick: false }],
      },
      {
        text: "Use key",
        nextText: 19.1,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 119,
    text: "I made it! Finally",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 119.1,
    text: "I made it! Finally",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ lockPick: false }],
      },
    ],
  },
  {
    id: 120,
    text: "I wonder what this room still holds",
    options: [
      {
        text: "Check piano",
        nextText: 121,
      },
      {
        text: "Check bookshelf",
        nextText: 126,
        setState: [{ lockPick: true }],
      },
      {
        text: "Go back",
        nextText: 25,
      },
    ],
  },
  {
    id: 121,
    text: "I wonder if i can follow this note sheet",
    options: [
      {
        text: "Play piano",
        nextText: 122,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 25,
      },
    ],
  },
  {
    id: 122,
    text: "Now playing",
    options: [
      {
        text: "Go back",
        nextText: 123,
      },
    ],
  },
  {
    id: 123,
    text: "Only the bookshelf left", //green (note sheet, red, blue used) no lockpick
    options: [
      {
        text: "Check bookshelf",
        nextText: 124,
        setState: [{ lockPick: true }],
      },
      {
        text: "Go back",
        nextText: 132,
      },
    ],
  },
  {
    id: 124,
    text: "Oh wow look, a lockpick",
    options: [
      {
        text: "Go back",
        nextText: 125,
      },
    ],
  },
  {
    id: 125,
    text: "Just one door left", //green, lockpick (note sheet, red, blue used)
    options: [
      {
        text: "Green door",
        nextText: 50,
      },
    ],
  },
  {
    id: 126,
    text: "Oh look a lockpick!",
    options: [
      {
        text: "Go back",
        nextText: 127,
      },
    ],
  },
  {
    id: 127,
    text: "Only the piano left here now",
    options: [
      {
        text: "Check piano",
        nextText: 128,
      },
      {
        text: "Go back",
        nextText: 130,
      },
    ],
  },
  {
    id: 128,
    text: "I could probebly follow the note sheet",
    options: [
      {
        text: "Play piano",
        nextText: 129,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 130,
      },
    ],
  },
  {
    id: 129,
    text: "Now playing:",
    options: [
      {
        text: "Go back",
        nextText: 131,
      },
    ],
  },
  {
    id: 130,
    text: "Almost out now", //green, notesheet (lockpick, blue used)
    options: [
      {
        text: "Gray door",
        nextText: 127,
      },
      {
        text: "Green door",
        nextText: 156,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 131,
    text: "Almost out now", //green (lockpick, blue, notesheet used)
    options: [
      {
        text: "Green door",
        nextText: 157,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 132,
    text: "Now let's see where this green key goes", //green (note sheet, red, blue used) no lockpick
    options: [
      {
        text: "Gray door",
        nextText: 133,
      },
      {
        text: "Green door",
        nextText: 132.1,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 132.1,
    text: "Woo i made it!", //(note sheet, red, blue, green  used) no lockpick
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 133,
    text: "Just the bookshelf left now", //green (note sheet, red, blue used) no lockpick
    options: [
      {
        text: "Check bookshelf",
        nextText: 134,
        setState: [{ lockPick: true }],
      },
      {
        text: "Go back",
        nextText: 132,
      },
    ],
  },
  {
    id: 134,
    text: "Look at that a lockpick, wish i found that erlier", //green lockpick (note sheet, red, blue used)
    options: [
      {
        text: "Go back",
        nextText: 134.1,
      },
    ],
  },
  {
    id: 134.1,
    text: "Only the green door left now", //green lockpick (note sheet, red, blue used)
    options: [
      {
        text: "Green door",
        nextText: 50,
      },
    ],
  },
  {
    id: 135,
    text: "Just the piano here now.",
    options: [
      {
        text: "Check piano",
        nextText: 136,
      },
      {
        text: "Go back",
        nextText: 35,
      },
    ],
  },
  {
    id: 136,
    text: "I could probebly follow the note sheet",
    options: [
      {
        text: "Play piano",
        nextText: 137,
        setState: [{ noteSheet: false }],
      },
      {
        text: "Go back",
        nextText: 35,
      },
    ],
  },
  {
    id: 137,
    text: "Now playing:",
    options: [
      {
        text: "Go back",
        nextText: 138,
      },
    ],
  },
  {
    id: 138,
    text: "Just the keys left now",
    options: [
      {
        text: "Blue door",
        nextText: 139,
        setState: [{ blueKey: false }, { redKey: true }],
      },
      {
        text: "Green door",
        nextText: 142,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 139,
    text: "Oh, a red key. Too bad i've already been there.",
    options: [
      {
        text: "Go back",
        nextText: 140,
      },
    ],
  },
  {
    id: 140,
    text: "Only one way out now.",
    options: [
      {
        text: "Green door",
        nextText: 141,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 141,
    text: "Yes i made it!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ redKey: false }],
      },
    ],
  },
  {
    id: 142,
    text: "Yes i made it!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ blueKey: false }],
      },
    ],
  },
  {
    id: 143,
    text: "Only the piano left now", // red, green, note (lockpick used)
    options: [
      {
        text: "Check piano",
        nextText: 144,
      },
    ],
  },
  {
    id: 144,
    text: "I should be able to follow the note sheet",
    options: [
      {
        text: "Play piano",
        nextText: 145,
        setState: [{ noteSheet: false }],
      },
    ],
  },
  {
    id: 145,
    text: "Now playing:",
    options: [
      {
        text: "Go back",
        nextText: 146,
      },
    ],
  },
  {
    id: 145,
    text: "Now playing:",
    options: [
      {
        text: "Go back", // red and green
        nextText: 146,
      },
    ],
  },
  {
    id: 146,
    text: "Only one way out now",
    options: [
      {
        text: "Green door", // red and green
        nextText: 147,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 147,
    text: "Look at that, free at last!",
    options: [
      {
        text: "Restart", // red and green
        nextText: 1,
        setState: [{ redKey: false }],
      },
    ],
  },
  {
    id: 148,
    text: "Only the piano left", //red, blue (lockpick used) no note
    options: [
      {
        text: "Check piano",
        nextText: 149,
      },
    ],
  },
  {
    id: 149,
    text: " Too bad i can't play it", //red, blue (lockpick used) no note
    options: [
      {
        text: "Go back",
        nextText: 41,
      },
    ],
  },
  {
    id: 150,
    text: "Only the piano left but i do have a note sheet now", //blue green note (lockpick, red used)
    options: [
      {
        text: "Check piano",
        nextText: 151,
      },
    ],
  },
  {
    id: 151,
    text: "Lets see what i can play", //blue green note (lockpick, red used)
    options: [
      {
        text: "Play piano",
        nextText: 152,
        setState: [{ noteSheet: false }],
      },
    ],
  },
  {
    id: 152,
    text: "Now playing:", //blue green (lockpick, red, note used)
    options: [
      {
        text: "Go back",
        nextText: 153,
      },
    ],
  },
  {
    id: 153,
    text: "Only one door now", //blue green (lockpick, red, note used)
    options: [
      {
        text: "Green door",
        nextText: 154,
        setState: [{ greenKey: false }],
      },
    ],
  },
  {
    id: 154,
    text: "Yes i made it!", //blue (lockpick, red, note used, green )
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ blueKey: false }],
      },
    ],
  },
  {
    id: 155,
    text: "Yes i made it!",
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ greenKey: false }, { noteSheet: false }],
      },
    ],
  },
  {
    id: 156,
    text: "Yes i made it!", //notesheet (lockpick, blue, green used)
    options: [
      {
        text: "Restart",
        nextText: 1,
        setState: [{ noteSheet: false }],
      },
    ],
  },
  {
    id: 157,
    text: "Yes i made it!", //(lockpick, blue, notesheet used, green)
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
];

startQuest(); // Start the game
