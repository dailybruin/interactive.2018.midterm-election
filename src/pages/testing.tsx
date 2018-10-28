import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, Byline, Footer, Head } from '@dailybruin/lux'
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
const TestingPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      (i) => {
        console.log(i);
        return(
          <ExpandableCard
            key={i}
            title={`prop ${i}: testing`}
            photo="https://dailybruin.com/images/2018/10/\web.sp_.mwp_.nbk_.ADX_-640x461.jpg"
            endorse= {i % 2 ? false : true}
            description="This is a test description to see if this works or not. This is a test description to see if this works or not, This is a test description to see if this works or notThis is a test description to see if this works or notThis is a test description to see if this works or notThis is a test description to see if this works or notThis is a test description to see if this works or not"
            height={200}
          />
        )
      }
    )}
    
  </>
)

export default TestingPage
