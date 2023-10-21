/** @format */

import { Stack } from "expo-router"
import React from "react"
import MoviesListProvider from "../hooks/moviesList"
import { GluestackUIProvider } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

export default function Layout (): JSX.Element {
  return (
        <ProvidersWrapper>
            <Stack>

            </Stack>
        </ProvidersWrapper>
  )
}

const ProvidersWrapper = ({ children }: { children: JSX.Element }): JSX.Element => <GluestackUIProvider config={config}><MoviesListProvider>{children}</MoviesListProvider></GluestackUIProvider>
