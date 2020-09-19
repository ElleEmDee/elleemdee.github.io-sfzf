setWords()

function setWords() {
  const being = [
    "an elephant",
    "a rat",
    "a dinosaur",
    "a ghost",
    "a donut",
    "a skunk",
    "an octopus",
    "a cactus",
    "a squirrel",
    "a penguin",
    "a unicorn",
    "a pizza",
    "a snail",
    "an alien",
    "a merperson",
    "a vampire",
    "a cat",
    "a dog",
    "a sloth",
    "a kaiju",
    "a werewolf",
    "a raccoon",
    "a bat",
    "a panda",
    "a tiger",
    "a skeleton",
    "a giraffe",
    "a camel",
    "a flamingo",
    "a jellyfish",
    "a lobster",
    "a spider",
    "a balloon",
    "a moose",
    "a snake",
    "a cow",
    "a peacock",
    "a broccoli",
    "an invisible",
    "a shark",
    "a robot",
    "a mushroom",
  ];
  const occupation = [
    "monarch",
    "knight",
    "pirate",
    "YouTube star",
    "spy",
    "scientist",
    "rock star",
    "psychic",
    "wizard",
    "actor",
    "cartoonist",
    "gardener",
    "dog walker",
    "racecar driver",
    "teacher",
    "astronaut",
    "fairy",
    "supervillain",
    "figure skater",
    "chef",
    "traveling salesperson",
    "thief",
    "cowhand",
    "businessperson",
    "dancer",
    "martial artist",
    "detective",
    "writer",
    "magical girl",
    "superhero",
    "hairstylist",
    "fashion designer",
    "librarian",
    "student",
    "photographer",
    "football player",
    "clown",
    "witch",
    "doctor",
    "dentist",
  ];

   const situation = [
     "explores a dungeon",
     "finds treasure",
     "goes on a date",
     "runs from a monster",
"has an alien pet",
     "competes in a talent show",
     "sees a ghost",
 "runs for president",
     "buys a gift",
     "does a science experiment",
     "wears a cursed hat",
     "drives a spaceship",
     "just got superpowers",
     "spies on someone",
     "at a restaurant for monsters",
     "at a museum",
     "teaches a class",
     "breaks something valuable",
     "invents a new machine",
     "visits the future",
     "visits the past",
     "sneaks past a guard",
     "competes in the Olympics",
     "on an alien safari",
     "falls in love at first sight",
     "meets the world's worst magician",
     "meets an incredibly cute monster",
     "on vacation",
     "has a terrible case of the hiccups",
     "tries to do a craft",
     "has an evil twin",
     "plays a card game",
     "goes to the doctor",
     "shows off their favorite outfit",
     "during an alien invasion",
     "cheats at a game",
     "with an amazing hairdo",
     "visits their grandparents",
     "at a school reuinion",
     "sees a fortune teller",
     "finds a mysterious map",
     "with their favorite stuffed animal",
     "at a drive-in movie theater",
     "gives someone a piggyback ride",
     "has a nightmare",
     "reveals a secret",
     "invents a new holiday",
     "at a dance-off",
     "tries to cast a spell",
     "takes over the world",
      ];

  const randomNumber1 = Math.floor(Math.random() * occupation.length);
  const randomNumber2 = Math.floor(Math.random() * being.length);
   const randomNumber3 = Math.floor(Math.random() * situation.length);

  document.getElementById("occupation").innerHTML = occupation[randomNumber1];
  document.getElementById("being").innerHTML = being[randomNumber2];
   document.getElementById("situation").innerHTML = situation[randomNumber3];

}
