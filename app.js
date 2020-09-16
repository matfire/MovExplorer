import { searchFilms, getPoster } from "./api.js"
import db from "./dexie.js"
import "./movieCard.js"

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
}

const grid = document.getElementById("movieGrid")
const resultDiv = document.getElementById("searchResult")
const selectedFilename = document.getElementById("nameFile")
const selectedId = document.getElementById("tmdbId")
document.getElementById("chooseFileButton").onclick = async () => {
    const opts = { type: "open-directory" }
    const fileHandle = await window.chooseFileSystemEntries(opts)
    const entries = await fileHandle.getEntries()
    for await (const entry of entries) {
        if (entry.isFile) {
            // console.log("this is a file")
            const dbData = await db.movies.get(entry.name)
            if (dbData) {
                // alert("found in db")
                grid.appendChild(createCard(dbData.data, entry.name))

            } 
            // else {
            //     const data = await searchFilm(entry.name)
            //     if (data) {
            //         await db.movies.put({fileName: entry.name, data, tmId: data.id})
            //         grid.appendChild(createCard(data, entry.name))
            //     }
            // }
        }
    }
}

document.getElementById("searchQuery").onkeypress = async(e) => {


    const query = e.target.value
    if (query.length % 3 === 0 && query.length !== 0) {
        const data = await searchFilms(query)
        console.log(data)
        resultDiv.innerHTML = ""
        data.forEach((film) => {
            const col = document.createElement("div")
            col.classList.add("col-sm", "mb-2", "mt-3", "ml-2")
            const img = document.createElement("img")
            img.src = getPoster("w500", film.poster_path)
            img.alt = film.title
            img.id = film.id
            img.onclick = async() => {
                const oldData = await db.movies.get(selectedFilename.innerText)
                await db.movies.put({fileName:selectedFilename.innerText, data: film, tmId: film.id})
                const selectedCard = $(`#${oldData.data.id}`)
                selectedCard.movie = film
                selectedCard.id = film.id
                $("#searchModal").modal("hide")

            }
            col.appendChild(img)
            resultDiv.appendChild(col)
        })
    }
}

const createCard = (movie, fileName) => {
    const el = document.createElement("movie-card")
    el.id = movie.id
    el.movie = movie
    el.fileName = fileName
    return el
}