import { helloWorld,buildList, buildCard} from './renderHTML/render-html';

const searchTerm = "lord"
const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=831d3029`

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

