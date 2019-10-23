
import { searchForFilm } from './userSearch/userSearch';

searchForFilm();

const movieSearch = document.getElementById("search-bar");
movieSearch.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
    event.preventDefault();
     let userSearchField = document.getElementById("search-bar") as HTMLInputElement; 
     let userSearchValue = userSearchField.value; 
       searchForFilm(userSearchValue);
    }
});



