import NextLink from "next/link";
import { Spacer, Text, Image, Link } from '@nextui-org/react'

import { Navbar } from './styles'

export const NavBar = () => {
  return (
    <Navbar>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        width={70}
        height={70}
        alt='icons image pokemon'
      />
      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
        </Link>
      </NextLink>
      <Spacer css={{ flex: 1 }} />
      <NextLink href={'/favorite'}>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </Navbar>
  )
}
