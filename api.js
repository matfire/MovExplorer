const API = "2005b3a7fc676c3bd69383469a281eff"
const BASE = "https://api.themoviedb.org/3"


const searchFilm = async(fileName) => {
    const res = await fetch(`${BASE}/search/movie?api_key=${API}&query=${encodeURIComponent(fileName)}`)
    const data = await res.json()

    if (data.results.length > 0) {
        return data.results[0]
    }
    return null
}

const searchFilms = async(query) => {
    const res = await fetch(`${BASE}/search/movie?api_key=${API}&query=${encodeURIComponent(query)}`)
    const data = await res.json()
    return data.results || []
}

const getPoster = (resolution, path) => `https://image.tmdb.org/t/p/${resolution}/${path}`

export {searchFilm, searchFilms, getPoster}