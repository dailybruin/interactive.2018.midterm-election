import * as React from 'react'
import styled, {css} from 'react-emotion'
import { graphql } from 'gatsby'
import { Head } from '@dailybruin/lux'
import NavBar from '../components/NavBar'
import { Link } from 'gatsby';
import EndorseCircle from '../components/EndorseCircle';

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
          readerTitle
          category
          title
          headline
          author
          endorsed
          content {
            type
            value
          }
          image
        }
      }
    }
  }
`

const EndorsementPage = ({ data }) => {
  const nodes = data.allKerckhoffArticle.edges.map(n => n.node);
  const createNodeGroups = (category) => {
    return [category, nodes.filter(n => {
      return n.category === category
    })];
  };

  const nodeGroups = ['STATE PUBLIC OFFICES', 'NATIONAL PUBLIC OFFICES', 'STATE PROPOSITIONS', 'LOCAL MEASURES'].map(cat => createNodeGroups(cat));

  return (
    <>
      <Head {...data.site.siteMetadata} />
      <NavBar
        useBlueButtonHeader={true}
        buttonLinkSrc={'/'}
        blueButtonText={'RETURN TO GUIDE'}
        blueLabelText={'EDITORIAL BOARD ENDORSEMENTS'}
        />
      <div className={css`
        @media (min-width: 800px) { display: none; }
      `}>
        <div>
          <Link to={'/'} className={css`display: flex;`}>
            <BlueButton>RETURN TO GUIDE</BlueButton>
          </Link>
        </div>
        <BlueLabelText className={css`text-align: center;`}>
          EDITORIAL BOARD ENDORSEMENTS
        </BlueLabelText>  
      </div>
      <div>
        {nodeGroups.map((group, i) => (
          <div key={i}>
            <h3 className={css`margin-left: 2rem;`}>{group[0]}</h3>
            <div
              className={css`
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
              `}>
              {group[1].map((node, i) => {
                const imgSrc = node.image;
                const endorsed = String(node.endorsed).toLowerCase() === 'yes';
                console.log(endorsed)
                const headline = node.headline;
                return (
                  <div 
                    className={css`
                      margin: 1rem 1rem;
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                    `}
                    key={i}
                    >
                    <EndorseCircle
                      cardType={endorsed ? 'approve' : 'reject'}
                      sizePx={200}
                      imgSizePx={150}
                      imgSrc={imgSrc}
                      title={headline}
                      />
                    <div className={css`
                        margin: 1rem 0;
                        text-align: center;
                        font-size: 1.5rem;
                      `}>
                      {node.readerTitle}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default EndorsementPage;
