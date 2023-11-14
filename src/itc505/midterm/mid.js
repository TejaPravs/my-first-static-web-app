const gameStages = {
    start: {
        text: "You find yourself at a crossroads. Do you want to go left or right?",
        choices: ["Go Left", "Go Right"],
        consequence: { "Go Left": "darkCave", "Go Right": "enchantedForest" },
        image: "crossroads.jpg",
    },
    darkCave: {
        text: "You entered a dark cave. It's too dark to see anything. What do you do?",
        choices: ["Light a torch", "Feel your way through", "Go back"],
        consequence: {
            "Light a torch": "treasureRoom",
            "Feel your way through": "fallIntoPit",
            "Go back": "start"
        },
        image: "dark_cave.jpg",
    },
    enchantedForest: {
        text: "You entered an enchanted forest. You hear strange whispers. What do you do?",
        choices: ["Follow the whispers", "Stay on the path", "Leave the forest"],
        consequence: {
            "Follow the whispers": "unicornClearing",
            "Stay on the path": "goblinAmbush",
            "Leave the forest": "start"
        },
        image: "enchanted_forest.jpg",
    },
    treasureRoom: {
        text: "You find a treasure room! You are rich beyond your wildest dreams!",
        choices: ["Retire", "Explore more"],
        consequence: {
            "Retire": "retirementEnding",
            "Explore more": "start"
        },
        image: "treasure_room.jpg",
    },
    fallIntoPit: {
        text: "You feel your way through but fall into a pit. It's the end of your adventure.",
        choices: ["Start Over"],
        consequence: { "Start Over": "start" },
        image: "pit_fall.jpg",
    },
    unicornClearing: {
        text: "You reach a beautiful unicorn clearing. The unicorn offer you a magical ride.",
        choices: ["Accept the ride", "Decline and leave the forest"],
        consequence: {
            "Accept the ride": "unicornEnding",
            "Decline and leave the forest": "start"
        },
        image: "unicorn_clearing.jpg",
    },
    goblinAmbush: {
        text: "Goblins ambush you on the path. They demand all your possessions.",
        choices: ["Fight the goblins", "Surrender and give them your possessions"],
        consequence: {
            "Fight the goblins": "fightGoblinsEnding",
            "Surrender and give them your possessions": "goblinEnding"
        },
        image: "goblin_ambush.jpg",
    },
    retirementEnding: {
        text: "Congratulations! You retire and live a peaceful life with your newfound wealth.",
        choices: ["Play Again"],
        consequence: { "Play Again": "start" },
        image: "retirement.jpg",
    },
    unicornEnding: {
        text: "You embark on a magical adventure with the unicorns. The end.",
        choices: ["Play Again"],
        consequence: { "Play Again": "start" },
        image: "unicorn_ending.jpg",
    },
    fightGoblinsEnding: {
        text: "You defeat the goblins and continue your journey as a hero.",
        choices: ["Play Again"],
        consequence: { "Play Again": "start" },
        image: "fight_goblins.jpg",
    },
    goblinEnding: {
        text: "The goblins take everything and leave you stranded in the forest.",
        choices: ["Play Again"],
        consequence: { "Play Again": "start" },
        image: "goblin_ending.jpg",
    },
};

// Initial game state
let currentStage = "start";

// Function to start/restart the game
function startGame() {
    currentStage = "start";
    updatePage();
}

// Function to update the page
function updatePage() {
    const stage = gameStages[currentStage];
    document.getElementById("story").innerText = stage.text;

    // Create buttons for choices
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = "";
    stage.choices.forEach((choice) => {
        const choiceButton = document.createElement("button");
        choiceButton.innerText = choice;
        choiceButton.addEventListener("click", () => makeChoice(choice));
        choicesContainer.appendChild(choiceButton);
    });

    // Update image
    document.getElementById("story-image").src = stage.image;
}

// Function to make a choice
function makeChoice(choice) {
    const stage = gameStages[currentStage];

    // Update current stage based on choice consequence
    currentStage = stage.consequence[choice];

    // Check for game over
    if (currentStage === undefined) {
        endGame();
    } else {
        updatePage();
    }
}

// Function to end the game
function endGame() {
    // Display relevant image for game over
    document.getElementById("story-image").src = "game_over.jpg";
}

// Initial setup
startGame();
