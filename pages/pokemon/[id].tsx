import { useEffect, useState } from "react";

import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import confetti from "canvas-confetti";

import { pokemonApi } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorited, setIsInFavorited] = useState(false)
  const handlerClick = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorited(!isInFavorited)
    if (!isInFavorited) {
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }
  }

  useEffect(() => {
    const { includes } = localFavorites.existInFavorite(pokemon.id)
    setIsInFavorited(includes)
  }, [pokemon.id])

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2} >
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || './no-image.png'}
                width='100%'
                height={200}
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: "space-between" }}>
              <Text transform="capitalize" h1>{pokemon.name}</Text>
              <Button color='gradient' ghost={!isInFavorited} onClick={handlerClick}>
                {isInFavorited ? 'En Favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites: </Text>
              <Container display="flex" direction="row" >
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.front_default}
                />
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.back_default}
                />
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.front_shiny}
                />
                <Image
                  width={100}
                  height={100}
                  alt={pokemon.name}
                  src={pokemon.sprites.back_shiny}
                />

              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout >
  )
}

export const getStaticPaths: GetStaticPaths = (_) => {
  const pokemons = Array.from({ length: 151 }, (_, i) => i + 1)

  return {
    paths: pokemons.map(function(index) {
      return { params: { id: index.toString() } }
    }),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemon: Pokemon = await pokemonApi.get('/pokemon/' + id)

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    }
  }

  const pokemonPerformance = {
    name: pokemon.name,
    id: pokemon.id,
    sprites: pokemon.sprites
  }

  return {
    props: {
      pokemon: pokemonPerformance
    }
  }
}

export default PokemonPage
