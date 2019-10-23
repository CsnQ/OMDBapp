
class Card {
    html: string;

    constructor(film) {
        this.html = `
        <div class="col-md-4 col-lg-3 m-2 ${film.Year} film-card rounded-0 border-0">
            <div class="card h-100 rounded-0 border-0" style="width: 16rem;">
                <img src=${film.Poster} class="card-img-top rounded-0 border-0" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${film.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${film.Year}</h6>
                </div>
            </div>
        </div>`
    }
}

export const buildCard = (data) => {
    const section = document.getElementsByClassName('movie-container')[0];
    //clear the page of current results
    section.innerHTML = "";
    data.Search.forEach(film => {
        let card = new Card(film);
        section.innerHTML += card.html;
    })
}

export const buildFilter = (distinctListOfYears) => {
    console.log(distinctListOfYears);
    const filter = document.getElementsByClassName('year-filter')[0];
    filter.innerHTML = "";
    distinctListOfYears.forEach(year => {
        let yearOption = `<a class="dropdown-item ${year} year-option" href="#">${year}</a>`
        filter.innerHTML+= yearOption;
    })
}
