import Head from "next/head"
import { FC } from "react"

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name="author" content="Edwin Melara" />
        <meta name="description" content="Informacion sobre los pokemons" />
        <meta name="keywords" content="pokemon, pokedex" />
      </Head>
      {/* Navbar */}
      <main>
        {children}
      </main>
    </>
  )
}
