import * as React from 'react'

import Head from 'next/head'

type Props = {
  title: string
  description: string
};

export const FunctionComponent: React.FC<Props> = (
  {
    title,
    description
  }
): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
