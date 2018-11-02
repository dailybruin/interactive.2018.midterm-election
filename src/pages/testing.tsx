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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ullamcorper tortor erat, sit amet convallis ipsum laoreet eu. In quis tristique dolor, nec molestie dui. Nam vulputate, augue a congue tincidunt, turpis orci tempus lectus, sit amet rhoncus elit elit quis dui. Sed vestibulum convallis nunc. Cras ut ligula enim. Nulla quis faucibus ligula. Aenean tristique, turpis vulputate mattis bibendum, purus risus auctor neque, quis rutrum lectus ante at lacus. Fusce bibendum erat sit amet facilisis condimentum. Vestibulum venenatis, nunc ut tempus sodales, nibh nunc interdum arcu, id tempor nulla purus vitae libero. Duis ornare dui vel molestie semper.

            Duis porta orci sem, in molestie sapien commodo in. Curabitur in malesuada magna. Phasellus elementum nunc neque, ornare lobortis est viverra nec. Sed ex arcu, pellentesque ut vehicula eget, placerat eget orci. Etiam eu orci tincidunt, porta turpis vitae, varius arcu. Aenean viverra massa sed odio porta, in rutrum tellus scelerisque. Curabitur consequat diam nibh, ac tristique enim vehicula at. Nulla at varius metus. Quisque a odio porttitor, maximus dui malesuada, consectetur arcu. Donec finibus elit lectus, vel varius libero ornare eu. In volutpat ultricies massa, in venenatis tortor consequat at. Nam justo orci, aliquet iaculis metus eu, vestibulum commodo metus. Nullam condimentum dapibus cursus. Quisque ac leo elementum, auctor purus a, sodales urna. Suspendisse arcu diam, feugiat non mauris nec, consequat gravida purus.
            
            Donec elementum orci ac volutpat consectetur. Sed venenatis, elit ut rhoncus porttitor, quam nisi congue elit, sit amet dapibus tortor sem nec dolor. Curabitur ut posuere est. Praesent eget tempor erat, eget pulvinar purus. In et mauris nisi. Cras posuere nibh eget condimentum cursus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis sit amet lorem erat. Integer dignissim tellus nec metus blandit finibus. Vestibulum interdum auctor quam nec placerat. Maecenas dignissim."
            height={200}
          />
        )
      }
    )}
    
  </>
)

export default TestingPage
