import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { ParametriceProviders } from './hooks/text_realm'

const App: React.FC = (): JSX.Element => {
  return (
    <Providers>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app DNAIEL CARDONA!</Text>
        <StatusBar style="auto" />
      </View>
    </Providers>
  )
}

// Providers wrappers
type ProvidersProps = React.PropsWithChildren<Record<string, unknown>>

const Providers: React.FC<ProvidersProps> = ({ children }): JSX.Element => {
  return (
    <React.Fragment>
      <ParametriceProviders>
        {children}
      </ParametriceProviders>
    </React.Fragment>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
