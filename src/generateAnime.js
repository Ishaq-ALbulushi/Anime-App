import axios from "axios";

// Array of anime names
const animeNames = [
    "Naruto",
    "Attack on Titan",
    "One Piece",
    "My Hero Academia",
    "Fullmetal Alchemist",
    "Demon Slayer",
    "Death Note",
    "Sword Art Online",
    "Dragon Ball Z",
    "Hunter x Hunter",
    "Bleach",
    "Tokyo Ghoul",
    "Fairy Tail",
    "Black Clover",
    "Jujutsu Kaisen",
    "One Punch Man",
    "Neon Genesis Evangelion",
    "Haikyuu!!",
    "Mob Psycho 100",
    "Steins;Gate",
    "Your Lie in April",
    "Re:Zero − Starting Life in Another World",
    "No Game No Life",
    "Blue Exorcist",
    "Seven Deadly Sins",
    "Sword of the Stranger",
    "Fate/Stay Night",
    "Clannad",
    "Violet Evergarden",
    "Kaguya-sama: Love Is War",
    "Hellsing",
    "Cowboy Bebop",
    "Samurai Champloo",
    "Gintama",
    "The Promised Neverland",
    "Dr. Stone",
    "Akame ga Kill!",
    "Erased",
    "Parasyte",
    "A Silent Voice",
    "Made in Abyss",
    "K-On!",
    "Yu Yu Hakusho",
    "Trigun",
    "Toradora!",
    "Berserk",
    "Mushoku Tensei: Jobless Reincarnation",
    "Chainsaw Man",
    "Code Geass",
    "Fire Force"
  ];
  

function generateAnime() {
  // Get a random anime name from the array
  const randomIndex = Math.floor(Math.random() * animeNames.length);
  const randomAnime = animeNames[randomIndex];

  // Find the HTML element where the anime name will be displayed
  const animeNameElement = document.getElementById('animeName');
  if (animeNameElement) {
    // Set the innerHTML to the randomly selected anime name
    animeNameElement.innerHTML = randomAnime;
  } else {
    console.error("Anime name element not found");
  }
}

export default generateAnime;
