import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokemonApi } from "../../api";

import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";

interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title="Algun pokemon">
      <div>
        <span>{pokemon.name}</span> - <strong>{pokemon.species.name}</strong>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = (_) => {
  const pokemons = Array.from({ length: 151 }, (_, i) => i + 1)

  return {
    paths: pokemons.map(function(index) {
      return { params: { id: index.toString() } }
    }), fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string }
  const pokemon = await pokemonApi.get<Pokemon>('/pokemon/' + id)

  return {
    props: {
      pokemon
    }
  }
}

export default PokemonPage
