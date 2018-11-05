import * as React from 'react'
import { graphql } from 'gatsby'
import { Head } from '@dailybruin/lux'
import IconTable from '../components/IconTable'
import NavBar from '../components/NavBar'
import EndorseCircle from '../components/EndorseCircle'
import Section2 from "../components/Section2"
import BackgroundImage from '../assets/background-full.jpg'
import S1Outline from '../assets/s1.png'
import S1Fill from '../assets/s1-fill.png'
import {css} from 'emotion'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    allKerckhoffArticle(filter: {title: {regex: "/./"}}) {
      edges {
        node {
          title
          headline
          author
          content {
            type
            value
          }
        }
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <NavBar/>
    <Section2 cards={{...data.allKerckhoffArticle.edges}}></Section2>/>
    <IconTable
      heightVW={200}
      backgroundSrc={BackgroundImage}
      icons={[{
        src: S1Fill,
        left: 16.7,
        top: 110.1,
        width: 25.4,
        shouldMagnifyOnHover: false,
      }, {
        src: S1Outline,
        left: 16.7,
        top: 110.1,
        width: 25.4,
        shouldMagnifyOnHover: true,
      }]}
      />
    <div className={css`margin: 100px;`}>
    </div>
  </>
)

export default IndexPage
