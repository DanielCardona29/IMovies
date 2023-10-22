/** @format */

import { Tabs } from "expo-router"

import React from "react"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Icon } from "../components/icons/icons"

import MoviesDeatilsProvider from "../hooks/movieDetail"
import MoviesListProvider from "../hooks/moviesList"

export default function Layout (): JSX.Element {
  return (
        <ProvidersWrapper>
            <MyTabs />
        </ProvidersWrapper>
  )
}

const MyTabs = (): React.JSX.Element => {
  return (
        <Tabs>
            <Tabs.Screen
                redirect={true}
                name="index"
                options={{
                  href: null
                }}
            />

            <Tabs.Screen
                name="movies"
                options={{
                  title: "Home",
                  tabBarIcon: () => <Icon icon="home"></Icon>
                }}
            />
            <Tabs.Screen
                name="movie/[id]"
                options={{
                  href: null
                }}
            />
        </Tabs>
  )
}

// const MyDrawer = (): React.JSX.Element => {
//   return (

//   )
// }

const ProvidersWrapper = ({ children }: { children: JSX.Element }): JSX.Element => (
    <GluestackUIProvider config={config}>
        <MoviesListProvider>
            <MoviesDeatilsProvider>{children}</MoviesDeatilsProvider>
        </MoviesListProvider>
    </GluestackUIProvider>
)
