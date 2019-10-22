import { helloWorld,buildList, buildCard} from './renderHTML/render-html';

const searchTerm = "lord"
const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=831d3029`

const movieSearch = document.getElementById("search-bar");

movieSearch.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
    event.preventDefault();
     let userSearchField = document.getElementById("search-bar") as HTMLInputElement; 
     let userSearchValue = userSearchField.value; 
       console.log ("nice button pressing")
       console.log(userSearchValue);
    }
});

fetch(url)
//fetches the data 
.then((response)=> response.json())
//now you have the data 
.then((data) => {
    console.log(data)
    return buildCard(data);
   

  
})
.catch((error) => {
    throw new Error(error);
});

