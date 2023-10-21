import React from "react"
import { StyleSheet, View } from "react-native"
import { Center, Text } from "@gluestack-ui/themed"

const Login: React.FC = (): JSX.Element => {
  return (
        <View style={styles.container}>
          <Center>
            <Text>Welcome!</Text>
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
