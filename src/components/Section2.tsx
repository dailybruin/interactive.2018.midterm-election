import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ExpandableCard from './ExpandableCard'
import styled, {css} from 'react-emotion'
import { graphql } from 'gatsby'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    kerckhoffArticle (filter: {title: {regex: "/./"}}) {
      headline
      author
      image
      section
      endorsed
      link
      content {
        type
        value
      }
    }
  }
`

interface CardProps {
    /* Props of card component */
}

interface SectionProps {
    title?: string,
    cardData?: CardProps[], //for now, not exactly sure how we are pulling data
}

interface SectionState {
    cards: number[]
}

const gridStyle = css({
    display: 'flex',
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "auto"
})

export default class SectionList extends React.Component<SectionProps, SectionState> {
  constructor(props) {
    super(props);
    this.state = {
        cards: [1, 2, 3]
    };
  }
    render() {
      console.log("ENTERED SECTION LIST");
        return ({ data }) => (
            <div>
                {console.log(data)}
                { this.state.cards ? (
                    <div>
                        <div className={gridStyle}>
                            { this.state.cards.map((currentCard,index) => (
                                <div style={{margin : 30}}key={index}>
                                    <ExpandableCard
                                      title="title testing"
                                      authors={["ryang"]}
                                      tags={["testing", "another test"]}
                                      photo="https://dailybruin.com/images/2018/10/\web.sp_.mwp_.nbk_.ADX_-640x461.jpg"
                                      description="this is a description
                                      fdasdkfjadskfjkasdfjkasdjfksdajfkjdsakfjakdsjfkadjsfkasdjfk
                                      dfkjasdkfjadslkfjadkljfkladsjfkl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : "No cards found" }
            </div>
        )
    }
}
