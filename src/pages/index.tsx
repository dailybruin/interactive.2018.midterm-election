import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, Byline, Footer, Head } from '@dailybruin/lux'
import IconTable from '../components/IconTable';
import TestBackground from '../assets/longcat.jpg';
import TestSVGIcon from '../assets/firefox.svg';
import ExpandableCard from '../components/ExpandableCard/ExpandableCard'

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
    <h1>Hi people</h1>
    <IconTable
      heightVW={200}
      backgroundSrc={TestBackground}
      icons={[{
        src: TestSVGIcon,
        left: 10,
        top: 10,
        width: 20,
        height: 20,
      }, {
        src: TestSVGIcon,
        left: 20,
        top: 20,
        width: 20,
        height: 20,
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
    
  </>
)

export default IndexPage
