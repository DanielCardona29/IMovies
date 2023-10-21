import React, { useState } from "react"
import MoviesList from "../clases/movies"
import { type PagintaionTypes } from "../clases/types.t"
import { ACCESS_TOKEN } from "./utils"

interface MoviesListType {
  moviesList: PagintaionTypes
  setMoviesList: React.Dispatch<React.SetStateAction<PagintaionTypes | undefined>>
  setToken: React.Dispatch<React.SetStateAction<string>>
  getNowPlayinList: () => Promise<PagintaionTypes>
}

export const MoviesListContext = React.createContext<MoviesListType | null>(null)

const MoviesListProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }): JSX.Element => {
  const [moviesList, setMoviesList] = useState<PagintaionTypes>()
  const [token, setToken] = useState<string>(ACCESS_TOKEN)

  const getNowPlayinList = async (): Promise<PagintaionTypes> => {
    const moviesList = new MoviesList(token)
    const movies = await moviesList.NowPlaying()
    setMoviesList(movies)
    return movies
  }

  const values: MoviesListType = {
    moviesList: moviesList as PagintaionTypes,
    setMoviesList,
    setToken,
    getNowPlayinList
  }

  return <MoviesListContext.Provider value={values}>{children}</MoviesListContext.Provider>
}
export default MoviesListProvider
