import { getMovieDetails, searchMovie } from './api'
import { getMovie, insertMovie } from './db'

const readMoviesonDisk = async(folderHandle) => {
    const films = []
    const entries = await folderHandle.values()
    for await (const entry of entries) {
        if (entry.kind === "file") {
            const path = await folderHandle.resolve(entry)
            const handle = await folderHandle.getFileHandle(path)
            const movie = await getMovie(entry.name)
            if (movie) {
                films.push({...movie.data, file:handle, name:entry.name})
            } else {
                const movieData = await searchMovie(entry.name)
                if (movieData) {
                    const actualData = await getMovieDetails(movieData.id)
                    if (actualData !== undefined) {
                        await insertMovie(entry.name, actualData, handle)
                    } else {
                        await insertMovie(entry.name, actualData, handle)
                    }
                    films.push({...actualData, file: handle, name:entry.name}) 
                } else {
                    films.push({name: entry.name, file:handle})
                }
            }
        }
    }

    return films
}

export {readMoviesonDisk}