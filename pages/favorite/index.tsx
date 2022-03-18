import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import { Empty } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoriteHome = () => {
  const router = useRouter()
  const [listFavorites, setListFavorites] = useState<number[]>([])
  useEffect(() => {
    const { favorites } = localFavorites.existInFavorite(0)
    setListFavorites(favorites)
  }, [])

  const handlerClickRoutePokemon = (id: number) => {
    router.push(`/pokemon/${id}`)
  }
  return (
    <Layout title="Pokemon Favoritos">
      {listFavorites.length === 0 && <Empty />}
      <Grid.Container gap={2} direction='row' justify="flex-start">
        {
          listFavorites.map((id) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card hoverable clickable css={{ p: 10 }} onClick={() => handlerClickRoutePokemon(id)} >
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={'100%'}
                  height={140}
                />
              </Card>
            </Grid>
          ))
        }
      </Grid.Container>
    </Layout >
  )
}

export default FavoriteHome;
