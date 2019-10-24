
import { searchForFilm } from './userSearch/userSearch';
import { showMoviesByYear } from './renderHTML/render-html';

searchForFilm();

const movieSearch = document.getElementById("search-bar");
movieSearch.addEventListener("keydown", function (event) {

  if (event.key === "Enter") {
    event.preventDefault();
    let userSearchField = document.getElementById("search-bar") as HTMLInputElement;
    let userSearchValue = userSearchField.value;
    searchForFilm(userSearchValue);
  }
});

const filterByYear = document.querySelector('.year-filter')
filterByYear.addEventListener("click", () => {
  let value = event.target as HTMLElement;
  showMoviesByYear (value.classList[1]);
})






