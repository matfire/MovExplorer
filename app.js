import { searchFilms, getPoster } from "./api.js"
import db from "./dexie.js"
import "./movieCard.js"

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js")
}

const grid = document.getElementById("movieGrid")


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
    const resultDiv = document.getElementById("searchResult")


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
            img.onclick = () => {
                
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

// $(() => {
//     grid.appendChild(createCard(
//         {
//         "adult": false,
//         "backdrop_path": "/xl5oCFLVMo4d4Pgxvrf8Jmc2IlA.jpg",
//         "belongs_to_collection": null,
//         "budget": 200000000,
//         "genres": [
//             {
//                 "id": 18,
//                 "name": "Drama"
//             },
//             {
//                 "id": 28,
//                 "name": "Action"
//             },
//             {
//                 "id": 10752,
//                 "name": "War"
//             },
//             {
//                 "id": 14,
//                 "name": "Fantasy"
//             },
//             {
//                 "id": 12,
//                 "name": "Adventure"
//             }
//         ],
//         "homepage": "https://movies.disney.com/mulan-2020",
//         "id": 337401,
//         "imdb_id": "tt4566758",
//         "original_language": "en",
//         "original_title": "Mulan",
//         "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
//         "popularity": 2623.923,
//         "poster_path": "/aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
//         "production_companies": [
//             {
//                 "id": 2,
//                 "logo_path": "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
//                 "name": "Walt Disney Pictures",
//                 "origin_country": "US"
//             },
//             {
//                 "id": 14714,
//                 "logo_path": "/oQHaOZEnPzlJACVTisV0FICrS82.png",
//                 "name": "China Film Group Corporation",
//                 "origin_country": "CN"
//             },
//             {
//                 "id": 103698,
//                 "logo_path": "/qS01bSMe274ecTdrgyO3BBvzfKK.png",
//                 "name": "Good Fear",
//                 "origin_country": "US"
//             },
//             {
//                 "id": 89254,
//                 "logo_path": null,
//                 "name": "Jason T. Reed Productions",
//                 "origin_country": "US"
//             },
//             {
//                 "id": 139620,
//                 "logo_path": null,
//                 "name": "Bioskopin21",
//                 "origin_country": ""
//             }
//         ],
//         "production_countries": [
//             {
//                 "iso_3166_1": "CN",
//                 "name": "China"
//             },
//             {
//                 "iso_3166_1": "US",
//                 "name": "United States of America"
//             }
//         ],
//         "release_date": "2020-09-10",
//         "revenue": 5900000,
//         "runtime": 115,
//         "spoken_languages": [
//             {
//                 "iso_639_1": "ru",
//                 "name": "Pусский"
//             }
//         ],
//         "status": "Released",
//         "tagline": "",
//         "title": "Mulan",
//         "video": false,
//         "vote_average": 7.7,
//         "vote_count": 1349
//     }))
// })