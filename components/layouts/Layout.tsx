import Head from "next/head"
import { FC } from "react"

import { NavBar } from "../ui";

interface Props {
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Edwin Melara" />
        <meta name="description" content="Informacion sobre los pokemons" />
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>
      <NavBar />
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
