import { Container, Text, Image } from '@nextui-org/react'
import React from 'react'

export const Empty = () => {
  return (
    <Container
      direction='column'
      display='flex'
      alignItems='center'
      justify='center'
      css={{
        height: 'calc(100vh - 100px)'
      }}
    >
      <Text h1>No hay favoritos</Text>
      <Image
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'}
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
        alt='Pokemon de carga'
      />
    </Container>
  )
}
