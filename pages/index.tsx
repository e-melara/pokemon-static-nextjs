import { GetStaticProps, NextPage } from "next"
import { Grid } from "@nextui-org/react"

import { pokemonApi } from "../api"
import { Layout } from "../components/layouts"
import { PokemonCard } from "../components/pokemons";

import { PokemonListResponse, SmallPokemon } from "../interfaces"

interface HomeProps {
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<HomeProps> = ({ pokemons }) => {
  const cards = pokemons.map(function(pokemon) {
    return <PokemonCard pokemon={pokemon} />
  })
  return (
    <Layout title="Pokeder">
      <Grid.Container gap={2} justify='flex-start'>
        {cards}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (_) => {
  const { results }: PokemonListResponse = await pokemonApi.get('/pokemon?limit=151')
  return {
    props: {
      pokemons: results.map<SmallPokemon>(function(pokemon, key) {
        const id = key + 1
        return {
          ...pokemon,
          id,
          image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + id + '.svg'
        }
      })
    }
  }
}

export default HomePage
