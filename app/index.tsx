import React from "react"
import { StyleSheet, View } from "react-native"
import { Center, Spinner, Text } from "@gluestack-ui/themed"
import { MoviesListContext } from "../hooks/moviesList"

const Login: React.FC = (): JSX.Element => {
  const { isLoading } = React.useContext(MoviesListContext)

  return (
    <View style={styles.container}>
      <Center h={200} w={300}>
        <Text>Welcome!</Text>
        <Spinner size={"large"} />
        <Text>Loading {isLoading ?? '[Movies..]'}</Text>
      </Center>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  }
})

export default Login
