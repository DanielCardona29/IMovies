/** @format */

import React, { useContext, useMemo, useState } from "react"
import { Box, Center, Divider, HStack, Heading, Image, ScrollView, Spinner, Text, VStack } from "@gluestack-ui/themed"
import { FlatList } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { MovieDetailsContext } from "../../hooks/movieDetail"
import { type MovieType } from "../../clases/types.t"
import { IMAGE_HOST } from "../../hooks/utils"

const Movie = (): JSX.Element => {
  const [movie, setMovie] = useState<MovieType>()
  const [error, setError] = useState<errorProp>({ value: false })
  const [loading, isLoading] = useState<boolean>(false)
  const { id } = useLocalSearchParams() ?? { id: "" }

  const { getMoviebyId } = useContext(MovieDetailsContext)

  useMemo(() => {
    const fetchMovie = (): void => {
      isLoading(true)
      getMoviebyId(id as string)
        .then((res) => {
          setMovie(res)
        })
        .catch((err) => {
          setError({ value: true, error: err })
        })
        .finally(() => {
          isLoading(false)
        })
    }
    fetchMovie()
  }, [id])

  if (error.value) return <Error {...error} />
  return <>{loading ? <Loading /> : <Content movie={movie} />}</>
}

const Loading = (): JSX.Element => (
    <Box
        alignItems="center"
        justifyContent="center"
        width={"$full"}
        height={"$full"}>
        <Center
            h={200}
            w={300}>
            <Spinner size={"large"} />
        </Center>
    </Box>
)

interface errorProp {
  value: boolean
  error?: Error
}
const Error: React.FC<errorProp> = ({ error }): JSX.Element => (
    <Box
        alignItems="center"
        justifyContent="center"
        width={"$full"}
        height={"$full"}>
        <Center
            h={200}
            w={300}>
            <Text>{error?.message}</Text>
        </Center>
    </Box>
)

interface genresListProp {
  genres: Array<{
    id: number
    name: string
  }>
}

const GenresListComponent: React.FC<genresListProp> = ({ genres }): JSX.Element => (
    <Box
        width={"$full"}
        p={"$7"}>
        <Center w={"$full"}>
            <FlatList
                horizontal={true}
                data={genres}
                renderItem={({ item }) => (
                    <Text
                        fontWeight="$bold"
                        pr="$4">
                        {item.name}
                    </Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </Center>
    </Box>
)
const GenresList = React.memo(GenresListComponent)

interface company {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}
interface productionCompaniesProp {
  companies?: company[]
}

const ProductionCompaniesListComponent: React.FC<productionCompaniesProp> = ({ companies }): JSX.Element => {
  const Card = ({ item }: { item: company }): JSX.Element => (
        <Box p={"$3"}>
            <Center>
                <Image
                    size="xl"
                    role="img"
                    alt="Movie poster"
                    source={{
                      uri: IMAGE_HOST + item.logo_path
                    }}
                />
                <Text fontWeight="$bold">{item.name}</Text>
            </Center>
        </Box>
  )
  return (
        <Box
            width={"$full"}
            pt={"$10"}
            pb={"$7"}>
            <Center w={"$full"}>
                <FlatList
                    horizontal={true}
                    data={companies}
                    renderItem={({ item }) => <Card item={item} />}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Center>
        </Box>
  )
}
const ProductionCompaniesList = React.memo(ProductionCompaniesListComponent)

interface movieProp {
  movie?: MovieType
}
const GeneralInfoComponent: React.FC<movieProp> = ({ movie }): JSX.Element => (
    <Box
        width={"$full"}
        pt={"$10"}
        pb={"$7"}>
        <Center w={"$full"}>
            <VStack>
                <HStack>
                    <HStack width={"$1/2"}>
                        <Text fontWeight="$bold">Release date: </Text>
                        <Text>{movie?.release_date}</Text>
                    </HStack>
                    <HStack width={"$1/2"}>
                        <Text fontWeight="$bold">Status: </Text>
                        <Text>{movie?.status}</Text>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack width={"$1/2"}>
                        <Text fontWeight="$bold">Runtime: </Text>
                        <Text>{movie?.runtime}</Text>
                    </HStack>
                    <HStack width={"$1/2"}>
                        <Text fontWeight="$bold">Budget: </Text>
                        <Text>{movie?.budget}</Text>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack width={"$1/2"}>
                        <Text fontWeight="$bold">Revenue: </Text>
                        <Text>{movie?.revenue}</Text>
                    </HStack>
                    <HStack width={"$1/2"}>
                        <Text fontWeight="$bold">Popularity: </Text>
                        <Text>{movie?.popularity}</Text>
                    </HStack>
                </HStack>
            </VStack>
        </Center>
    </Box>
)
const GeneralInfoList = React.memo(GeneralInfoComponent)

interface contentTypes {
  movie?: MovieType
}

const Content: React.FC<contentTypes> = ({ movie }): JSX.Element => (
    <ScrollView
        h="$full"
        w="$full"
        p={"$4"}>
        <Center pb={"$1.5"}>
            <Heading size="xl">{movie?.title}</Heading>
            <Heading sub={true}>{movie?.tagline}</Heading>
        </Center>
        <Divider bgColor="$primary300" />
        <Box
            width={"$full"}
            height={"auto"}
            backgroundColor="$backgroundDark200">
            <Image
                width={"$full" as any}
                h={"$80"}
                role="img"
                alt="Movie poster"
                source={{
                  uri: IMAGE_HOST + movie?.poster_path
                }}
            />
        </Box>

        <Center>
            <GenresList genres={movie?.genres ?? []} />
        </Center>

        <Text>{movie?.overview}</Text>

        <Center>
            <ProductionCompaniesList companies={movie?.production_companies ?? []} />
        </Center>

        <Center>
            <GeneralInfoList movie={movie} />
        </Center>
    </ScrollView>
)
export default Movie
