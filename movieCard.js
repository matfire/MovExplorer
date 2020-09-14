class MovieCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"})
        const linkElem = document.createElement("link")
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');
        this.shadowRoot.appendChild(linkElem)
        
    }

    connectedCallback() {
        // console.log("connected")
    }
    set fileName(name) {
        const correctButton = this.shadowRoot.querySelector("button.search-button")
        correctButton.addEventListener("click", (e) => {
            $("#searchResult").text("")
            $("#searchQuery").text("")
            $("#nameFile").text(name)
            $("#searchModal").modal()
        })
    }

    set movie(movie) {
        const col = document.createElement("div")
        col.classList.add("col-sm", "mt-3", "mb-2")
        const card = document.createElement("div")
        card.classList.add("card")
        const cardImg = document.createElement("img")
        cardImg.classList.add("img-fluid")
        cardImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
        cardImg.alt = movie.title
        const cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        const movieTitle = document.createElement("h5")
        movieTitle.classList.add("card-title")
        movieTitle.innerText = movie.title
        const correctButton = document.createElement("button")
        correctButton.classList.add("search-button")
        // correctButton.setAttribute("data-toggle", "modal")
        // correctButton.setAttribute("data-target", "#searchModal")
        correctButton.innerText = "Wrong result?"

        cardBody.appendChild(movieTitle)
        cardBody.appendChild(correctButton)
        card.appendChild(cardImg)
        card.appendChild(cardBody)
        col.appendChild(card)
        this.shadowRoot.appendChild(col)

        // add event listeners


        // this.shadowRoot.innerHTML = `
        // <div class="col-sm mt-3 mb-2">
        //     <div class="card">
        //         <img class="img-fluid" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" />
        //         <div class="card-body">
        //             <h5 class="card-title">${movie.title}</h5>
        //         </div>
        //     </div>
        // </div>
        // `
    }

    
}

window.customElements.define("movie-card", MovieCard)

export default MovieCard