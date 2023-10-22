import React from "react"
import { Box, Button, Center, Heading, Image, Text, VStack } from "@gluestack-ui/themed"
import { Link } from 'expo-router'
import { type dataMovie } from "../../clases/types.t"
import { IMAGE_HOST } from "../../hooks/utils"

interface CardsProps {
  item: dataMovie
}

const Cards: React.FC<CardsProps> = ({ item }): JSX.Element => {
  return (
        <Box
        borderRadius="$lg"
        borderWidth="$1"
        my="$4"
        overflow="hidden"
        backgroundColor="$primary100"
        sx={{
          "@base": {
            mx: "$2"
          },
          "@lg": {
            my: "0"
          }
        }}
      >
        <Box>
            <Center>
          <Image
            h={150}
            alt={"Image of " + item?.title}
            role="img"
            source={{
              uri: IMAGE_HOST + item?.poster_path
            }}
          />
          </Center>
        </Box>
        <VStack px="$6" pt="$4" pb="$6">
          <Text fontSize="$sm" my="$1.5">
            {item.release_date}
          </Text>
          <Heading size="sm">
            {item.title}
          </Heading>
          <Text my="$1.5" fontSize="$xs">
            {item.overview}
          </Text>

          <Link href="index">
            <Button
              bg="$primary600"
              mt="$4"
              size="sm"
            >
              <Text fontSize="$xs" color="$primary0">Read more</Text>
            </Button>
          </Link>
        </VStack>
      </Box>)
}

export default React.memo(Cards)
