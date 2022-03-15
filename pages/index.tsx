import { ReactElement } from "react"
import { Layout } from "../components/layouts"
import { NavBar } from "../components/ui"

export default function HomePage({ }) {
  return (
    <>
      <NavBar />
    </>
  )
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
