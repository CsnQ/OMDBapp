
export const helloWorld = () => {
    console.log("hello world 2")
}

export const buildList = (data) => {
    const ul = document.getElementsByTagName('ul')[0];
    //creates a HTML element in the javascript to put in the DOM later
    data.Search.forEach(film => {
        let li = document.createElement("li");
        li.innerHTML = `${film.Title}`;
        ul.append(li);
    });
}

export const buildCard = (data) => {
    const section = document.getElementsByClassName('movie-container')[0];
    data.Search.forEach(film => {
        section.innerHTML += `
            <div class="col-md-2 col-lg-3 m-2">
                <div class="card h-100" style="width: 18rem;">
                    <img src=${film.Poster} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${film.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${film.Year}</h6>
                    </div>
                </div>
            </div>`
    })
}