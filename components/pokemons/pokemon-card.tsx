import { FC } from "react"
import { Grid, Row, Text, Card } from "@nextui-org/react";
import { SmallPokemon } from "../../interfaces"
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { image, name, id } = pokemon
  const router = useRouter()

  const clickable = () => {
    router.push('/pokemon/' + id)
  }

  return (
    <Grid xs={3} sm={6} md={2} xl={1} key={id}>
      <Card hoverable clickable onClick={clickable}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={image}
            width='100%'
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid >
  )
}
