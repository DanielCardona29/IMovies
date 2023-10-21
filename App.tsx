import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ParametriceProviders } from './hooks/text_realm'
import { Link } from 'expo-router'

const App: React.FC = (): JSX.Element => {
  return (
    <Providers>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App
