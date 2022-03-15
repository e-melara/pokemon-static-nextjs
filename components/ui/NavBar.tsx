import { Spacer, Text, Image } from '@nextui-org/react'
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
      <Text color='white' h2>P</Text>
      <Text color='white' h3>okemon</Text>
      <Spacer css={{ flex: 1 }} />
      <Text color='white'>Favoritos</Text>
    </Navbar>
  )
}
