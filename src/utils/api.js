const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('2005b3a7fc676c3bd69383469a281eff')

const searchMovie = async(query, limit=1) => {
    const res = await moviedb.searchMovie({query, })
    if (res.results.length > 0) {
        return limit === 1 ? res.results[0] : res.results.slice(0, limit)
    }
    return undefined
}

const getMovieDetails = async(id, append="videos,images,credits") => {
    const res = await moviedb.movieInfo({id, append_to_response:append})
    if (res.id ) {
        return res
    }
    return undefined
}

const getPosterImage = (path, size="original") => {
    return `https://image.tmdb.org/t/p/${size}/${path}`
}
export {searchMovie, getPosterImage, getMovieDetails}