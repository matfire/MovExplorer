import Dexie from 'dexie';

const db = new Dexie("movies")

db.version(1).stores({
    movies: "fileName, data, fileHandle"
})

const insertMovie = async(fileName, data, fileHandle) => {
    try {
        await db.movies.put({fileName, data, fileHandle})
    } catch (error) {
        return false
    }
    return true
}

const getMovie = async(fileName) => {
    try {
        const data = await db.movies.get(fileName)
        return data || undefined
    } catch (error) {
        return undefined
    }
}

export {insertMovie, getMovie}