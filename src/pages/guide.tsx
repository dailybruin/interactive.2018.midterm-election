import * as React from 'react'
import styled, {css} from 'react-emotion'
import { graphql } from 'gatsby'
import { Head } from '@dailybruin/lux'
import NavBar from '../components/NavBar'
import { Link } from 'gatsby';
import Section2 from '../components/Section2';

const BlueButton = styled('button')`
  background-color: #1C568C;
  color: white;
  border: none;
  width: 270px;
  margin: 20px auto;
`

const BlueLabelText = styled('h1')`
  max-width: 600px;
  text-align: center;
  margin: 20px auto;
  font-weight: 900;
  letter-spacing: -1px;
  color: #1C568C;
  text-align: right;
`

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

const GuidePage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <NavBar
      useBlueButtonHeader={true}
      buttonLinkSrc={''}
      blueButtonText={'PROPOSITIONS'}
      blueLabelText={'DAILY BRUIN ELECTION GUIDE'}
      />
    <div className={css`@media (min-width: 800px) { display: none; }`}>
      <div>
        <Link to={''} className={css`display: flex;`}>
          <BlueButton>PROPOSITIONS</BlueButton>
        </Link>
      </div>
      <BlueLabelText className={css`text-align: center;`}>
        DAILY BRUIN ELECTION GUIDE
      </BlueLabelText>  
    </div>
    <BlueLabelText className={css`text-align: center;`}>
        PROPOSITIONS
    </BlueLabelText> 
    <Section2 cards={{...data.allKerckhoffArticle.edges}} section={"prop"} />
    <BlueLabelText className={css`text-align: center;`}>
        ARTICLES
    </BlueLabelText> 
    <Section2 cards={{...data.allKerckhoffArticle.edges}} section={"article"} />
  </>
)

export default GuidePage;