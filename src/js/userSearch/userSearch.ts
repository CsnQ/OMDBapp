import {buildCard, buildFilter} from '../renderHTML/render-html'

export const searchForFilm = (userSearchData = 'blade')=> {

    const url = `https://www.omdbapi.com/?s=${userSearchData}&apikey=831d3029`
    

    fetch(url)
    //fetches the data 
    .then((response)=> response.json())
    //now you have the data 
    .then((data) => {
        
        buildListOfYears(data.Search);
        return buildCard(data);  
    })
    .catch((error) => {
        throw new Error(error);
    });
}

export const buildListOfYears = (movieList) => {
    const listOfYears = movieList.map(film => film.Year);
    listOfYears.sort();
    let distinctListOfYears = [...new Set(listOfYears)]
    buildFilter(distinctListOfYears);
    return distinctListOfYears;
}

