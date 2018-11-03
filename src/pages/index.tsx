import * as React from 'react'
import { graphql } from 'gatsby'
import { Head } from '@dailybruin/lux'
import IconTable from '../components/IconTable/index'
import NavBar from '../components/NavBar/NavBar'
import EndorseCircle from '../components/EndorseCircle/EndorseCircle';
import BackgroundImage from '../assets/background.png';
import S1Outline from '../assets/s1.png';
import S1Fill from '../assets/s1-fill.png';
import TestLongCat from '../assets/longcat.jpg';
import {css} from 'emotion';

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <NavBar />
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
      <EndorseCircle
        isApprove={true}
        sizePx={150}
        imgSizePx={120}
        imgSrc={TestLongCat}
        title="US SENATOR REPRESENTING CALIFORNIA"
        />
    </div>
  </>
)

export default IndexPage
