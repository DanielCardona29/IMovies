/** @format */

import { Tabs } from "expo-router"

import React, { useContext } from "react"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Icon } from "../components/icons/icons"

import MoviesDeatilsProvider from "../hooks/movieDetail"
import MoviesListProvider from "../hooks/moviesList"
import { RealmProvider } from "@realm/react"

import { ParametriceText } from "../hooks/models"
import LocalesProvider, { localesContext } from "../hooks/locales"

export default function Layout (): JSX.Element {
  return (
    <ProvidersWrapper>
      <MyTabs />
    </ProvidersWrapper>
  )
}

const MyTabs = (): React.JSX.Element => {
  const { t } = useContext(localesContext)
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
          title: t("home"),
          tabBarIcon: () => <Icon icon="home"></Icon>
        }}
      />
      <Tabs.Screen
        name="movie/[id]"
        options={{
          title: t("details"),
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
    <RealmProvider schema={[ParametriceText]} deleteRealmIfMigrationNeeded={true}>
      <LocalesProvider>
        <MoviesListProvider>
          <MoviesDeatilsProvider>{children}</MoviesDeatilsProvider>
        </MoviesListProvider>
      </LocalesProvider>
    </RealmProvider>
  </GluestackUIProvider>
)
