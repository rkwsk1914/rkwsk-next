import * as React from 'react'

import Head from 'next/head'

type Props = {
  title: string
  description: string
};

export const MyHead: React.FC<Props> = (
  {
    title,
    description
  }
): JSX.Element => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
    </Head>
  )
}
