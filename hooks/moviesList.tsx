import React, { useMemo, useState } from "react"
import Movies from "../clases/movies"
import { type PagintaionTypes } from "../clases/types.t"
import { ACCESS_TOKEN } from "./utils"

interface MoviesListType {
  moviesList?: PagintaionTypes
  setMoviesList?: React.Dispatch<React.SetStateAction<PagintaionTypes | undefined>>
  setToken?: React.Dispatch<React.SetStateAction<string>>
  getNowPlayinList?: Promise<PagintaionTypes>
  isLoading?: boolean
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>
}

export const MoviesListContext = React.createContext<MoviesListType>({
  isLoading: false
})

const MoviesListProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }): JSX.Element => {
  const [moviesList, setMoviesList] = useState<PagintaionTypes>()
  const [isLoading, setLoading] = useState<boolean>(false)
  const [token, setToken] = useState<string>(ACCESS_TOKEN)

  const getNowPlayinList = useMemo(async (): Promise<PagintaionTypes> => {
    setLoading(true)
    const moviesList = new Movies(token)
    const movies = await moviesList.NowPlaying()
    setMoviesList(movies)
    setLoading(false)
    return movies
  }, [token])

  const values: MoviesListType = {
    moviesList: moviesList as PagintaionTypes,
    setMoviesList,
    setToken,
    getNowPlayinList,
    isLoading,
    setLoading
  }

  return <MoviesListContext.Provider value={values}>{children}</MoviesListContext.Provider>
}
export default MoviesListProvider
