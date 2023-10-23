/** @format */

import React, { useContext } from "react"
import { FlatList } from "react-native"
import Cards from "../components/cards/cards"
import { Box } from "@gluestack-ui/themed"
import { MoviesListContext } from "../hooks/moviesList"

interface MoviesProps {
  title: string
  year: number
  director: string
}

const Movies: React.FC<MoviesProps> = ({ title, year, director }) => {
  const { moviesList } = useContext(MoviesListContext)

  return (
        <Box py="$10">
            <FlatList
                data={moviesList?.results}
                renderItem={({ item }) => <Cards item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </Box>
  )
}

export default React.memo(Movies)
