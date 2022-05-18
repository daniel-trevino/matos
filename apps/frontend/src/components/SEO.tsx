import Head from 'next/head'
import { FC } from 'react'

type Meta = { name: string; content: string } | { property: string; content: string }

type Props = {
  description?: string
  meta?: Meta[]
  keywords?: string[]
  title?: string
  image?: string
}

const defaultDescription =
  'Matos is the creators club where crypto natives, digital intuitives and future innovators go to hang out. Come build with us.'
const defaultTitle = 'Matos Club'

const SEO: FC<Props> = ({ description, meta = [], keywords = [], title, image }) => {
  const metaTitle = `${title || defaultTitle}`
  const metaDescription = description || defaultDescription

  const metaImage = 'https://matos.club/meta-image.png'

  const metaContent = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      property: 'og:title',
      content: metaTitle,
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:image',
      content: metaImage,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'image',
      content: metaImage,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:image',
      content: metaImage,
    },

    {
      name: 'twitter:title',
      content: metaTitle,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },

    ...meta,
  ]

  if (keywords.length > 0) {
    metaContent.push({
      name: 'keywords',
      content: keywords.join(', '),
    })
  }

  return (
    <Head>
      <title key="title">{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="icon" href="/favicon.png" />
      {metaContent.map((m) => (
        <meta {...m} key={'name' in m ? m.name : m.property} />
      ))}

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <meta charSet="utf-8" />
    </Head>
  )
}

export default SEO
