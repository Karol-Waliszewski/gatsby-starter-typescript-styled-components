import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { ImageDataLike } from 'gatsby-plugin-image'

import Layout from '../components/layout/layout'
import Seo from '../components/layout/seo'
import LazyImage from '../components/lazyImage'

type DataProps = {
  site: {
    buildTime: string
  }
  astronaut: ImageDataLike
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <LazyImage
        src={data.astronaut}
        alt="A Gatsby astronaut"
        objectFit="contain"
        width={500}
      />
      <p>
        You're currently on the page "{path}" which was built on{' '}
        {data?.site.buildTime}.
      </p>
      <p>
        <Link to="/page-2/">Go to page 2</Link>
      </p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a")
    }
    astronaut: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1000)
      }
    }
  }
`
