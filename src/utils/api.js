const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb('2005b3a7fc676c3bd69383469a281eff')

const searchMovie = async(query, limit=1) => {
    const res = await moviedb.searchMovie({query, })
    if (res.results.length > 0) {
        if (limit === 1) {
            return await getMovieDetails(res.results[0].id)
        }
        return res.results.slice(0, limit)
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

/**
 * 
 * @param {String} website 
 * @param {*} url 
 */
const getVideoUrl = (website, url) => {
    switch (website.toLowerCase()) {
        case "youtube":
            return `https://youtube.com/embed/${url}`
        case "vimeo":
            return `https://player.vimeo.com/video/${url}`
        default:
            break;
    }
}
export {searchMovie, getPosterImage, getMovieDetails, getVideoUrl}