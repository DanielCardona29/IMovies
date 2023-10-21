import React from 'react'
import { View, Text } from 'react-native'

interface MoviesProps {
  title: string
  year: number
  director: string
}

const Movies: React.FC<MoviesProps> = ({ title, year, director }) => {
  return (
        <View>
            <Text>Title: {title}</Text>
            <Text>Year: {year}</Text>
            <Text>Director: {director}</Text>
        </View>
  )
}

export default Movies
