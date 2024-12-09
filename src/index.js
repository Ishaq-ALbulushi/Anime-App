import generateAnime from "./generateAnime";
import "./styles/main.scss";
import anime from "./assets/anime.webp";

// Set the anime image when the page loads
const animes = document.getElementById("animes");
animes.src = anime;

// Get the button and add an event listener
const jokeBtn = document.getElementById('load-anime-btn');
jokeBtn.addEventListener('click', fetchAnimeData); // When clicked, fetch anime data

// Fetch data from Jikan API
async function fetchAnimeData() {
  try {
    const response = await fetch('https://api.jikan.moe/v4/anime'); // Real anime API
    const data = await response.json();

    // Call a function to display the data
    displayAnimeData(data.data); // Access the 'data' field from the API response
  } catch (error) {
    console.error('Error fetching anime data:', error);
  }
}

// Function to display data in HTML
function displayAnimeData(animeList) {
  const animeListElement = document.getElementById('anime-list');
  
  // Clear previous data, if any
  animeListElement.innerHTML = '';

  // Loop through each anime and create an `li` element
  animeList.forEach(anime => {
    const listItem = document.createElement('li');
    listItem.textContent = anime.title; // Display the title of the anime
    animeListElement.appendChild(listItem);
  });
}

// Load some default anime data when the page loads
generateAnime(); // If generateAnime is fetching or generating something specific
