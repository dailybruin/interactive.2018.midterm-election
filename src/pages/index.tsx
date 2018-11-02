import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, Byline, Footer, Head } from '@dailybruin/lux'
import NavBar from '../components/NavBar/NavBar'
import IconTable from '../components/IconTable';
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
    <h1>Hi people</h1>
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
    <Byline authors={['Tanner Walters', 'Mackenzie Possee', 'Jacob Preal']} />
    <Article
      dropcap={true}
      content={[
        {
          type: 'text',
          value:
            'Lorem <a href="https://dailybruin.com">ipsum</a> dolor sit amet, consectetur adipiscing elit. Cras porttitor metus in pellentesque bibendum. Fusce rutrum sollicitudin finibus. Proin pellentesque leo enim, sed ultrices diam laoreet ut. Vivamus ut consequat nulla. Aenean sodales enim ut sapien rhoncus, in rhoncus metus mattis. Phasellus sed turpis tristique, tristique augue quis, lobortis est. Proin consectetur volutpat lacus, vitae luctus orci eleifend ac. Aliquam porttitor aliquet purus. Fusce condimentum eu sapien ut malesuada. Sed at nibh purus. Quisque et cursus nisl. Donec sed tincidunt ex.',
        },
        {
          type: 'image',
          url:
            'https://dailybruin.com/images/2018/10/\web.sp_.mwp_.nbk_.ADX_-640x461.jpg',
          caption:
            'Freshman attacker Ashworth Molthen has registered 21 goals on the season, finding the back of the net in 13 of the 16 games so far this year for UCLA men’s water polo. UCLA is one of two teams remaining in the MPSF conference that remains undefeated.',
          credit: 'Amy Dixon/Photo Editor',
        },
      ]}
    />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
    <div className={css`margin: 100px;`}>
      <EndorseCircle
        isApprove={false}
        sizePx={150}
        imgSizePx={120}
        imgSrc={TestLongCat}
        />
    </div>
  </>
)

export default IndexPage
