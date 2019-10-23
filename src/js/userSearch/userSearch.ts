import {buildCard} from '../renderHTML/render-html'

export const searchForFilm = (userSearchData = 'blade')=> {

    const url = `http://www.omdbapi.com/?s=${userSearchData}&apikey=831d3029`
    console.log (userSearchData);

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
}