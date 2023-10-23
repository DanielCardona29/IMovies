/** @format */

import { Tabs } from "expo-router"

import React from "react"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { Icon } from "../components/icons/icons"

import MoviesDeatilsProvider from "../hooks/movieDetail"
import MoviesListProvider from "../hooks/moviesList"
import { RealmProvider } from "@realm/react"
import LoaclesProvider from "../hooks/locales"

import { OpenRealmBehaviorType, OpenRealmTimeOutBehavior } from "realm"
import { ParametriceText } from "../hooks/text_realm"

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
        <RealmProvider
          schema={[ParametriceText]}
          sync={{
            flexible: true,
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
              timeOut: 1000,
              timeOutBehavior:
                // In v11 the enums are not set up correctly, so we need to use the string values
                OpenRealmTimeOutBehavior?.OpenLocalRealm ?? 'openLocalRealm'
            }
          }}>
            <LoaclesProvider>
                <MoviesListProvider>
                    <MoviesDeatilsProvider>{children}</MoviesDeatilsProvider>
                </MoviesListProvider>
            </LoaclesProvider>
        </RealmProvider>
    </GluestackUIProvider>
)
