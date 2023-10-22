import React, { useState } from "react"

import MoviesList from "../clases/movies"
import { type MovieType } from "../clases/types.t"
import { ACCESS_TOKEN } from "./utils"

interface MovieDetailsType {
  movie?: MovieType
  setMovie?: React.Dispatch<React.SetStateAction<MovieType | undefined>>
  getMoviebyId: (id: string) => Promise<MovieType>
}

const getMoviebyId = async (id: string): Promise<MovieType> => {
  const movie = new MoviesList(ACCESS_TOKEN)
  // Consult mobie by id
  const consult = await movie.getMovie(id)
  return consult
}

export const MovieDetailsContext = React.createContext<MovieDetailsType>({
  getMoviebyId
})

const MoviesDeatilsProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }): JSX.Element => {
  const [movie, setMovie] = useState<MovieType>()

  const values: MovieDetailsType = {
    movie: movie as MovieType,
    setMovie,
    getMoviebyId
  }

  return (
        <MovieDetailsContext.Provider value={values}>
            {children}
        </MovieDetailsContext.Provider>
  )
}

export default MoviesDeatilsProvider
