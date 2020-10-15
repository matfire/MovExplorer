import React from "react"
import { useState } from "react"

const MovieContext = React.createContext({
    movies: [],
    setMovies: (list) => {}
})


const MovieProvider = ({children}) => {
    const [m, setMov] = useState([])

    const updateMovs = (movs) => {
        setMov(movs)
    }

    return (
        <MovieContext.Provider value={{movies:m, setMovies:updateMovs}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieProvider
export {MovieContext}