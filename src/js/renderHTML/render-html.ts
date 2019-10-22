
export const helloWorld = () =>{
    console.log ("hello world 2")
}

export const buildList = (data) => {
    const ul = document.getElementsByTagName('ul')[0];
    //creates a HTML element in the javascript to put in the DOM later
    data.Search.forEach(film => {
        let li = document.createElement("li");
        li.innerHTML = `${film.Title }`;
        ul.append(li);
    });
}