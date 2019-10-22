import { helloWorld,buildList} from './renderHTML/render-html';

helloWorld();

const url = "http://www.omdbapi.com/?s=paris&apikey=831d3029"

fetch(url)
//fetches the data 
.then((response)=> response.json())
//now you have the data 
.then((data) => {
    console.log(data)
    return buildList(data);
   

  
})
.catch((error) => {
    throw new Error(error);
});

