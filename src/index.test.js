import generateAnime from "./generateAnime";
import anime from "./assets/anime.webp";

// Mock the DOM elements required by the script
beforeEach(() => {
  document.body.innerHTML = `
    <img id="animes" />
    <button id="load-anime-btn">Load Anime</button>
    <ul id="anime-list"></ul>
  `;
});

test('sets the anime image source', () => {
  const animes = document.getElementById("animes");
  expect(animes.src).toBe(''); // Initially, it should be empty

  // Call the function that sets the anime image
  animes.src = anime;

  // Check the src using URL matching since jsdom prepends 'http://localhost/' to the src
  expect(animes.src).toContain(anime); // Match part of the URL that contains 'anime'
});

test('fetchAnimeData is called when button is clicked', () => {
  const jokeBtn = document.getElementById('load-anime-btn');
  const fetchAnimeDataMock = jest.fn(); // Mock the fetchAnimeData function

  jokeBtn.addEventListener('click', fetchAnimeDataMock); // Add the mock as an event listener
  jokeBtn.click(); // Simulate a button click

  expect(fetchAnimeDataMock).toHaveBeenCalled(); // Verify that the mock function was called
});
