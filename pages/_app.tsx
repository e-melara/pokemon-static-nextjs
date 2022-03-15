import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import { NextUIProvider } from '@nextui-org/react'
import { ReactElement, ReactNode } from 'react'

import { darkTheme } from '../themes'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <NextUIProvider theme={darkTheme} >
      {getLayout(<Component {...pageProps} />)}
    </ NextUIProvider>
  )
}
