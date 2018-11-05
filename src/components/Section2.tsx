import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ExpandableCard from './ExpandableCard'
import styled, {css} from 'react-emotion'
import { graphql } from 'gatsby'

/*
export const query = graphql`
  query {
    allKerckhoffArticle(filter: {title: {regex: "/./"}}) {
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
*/
interface CardProps {
    /* Props of card component */
}

interface SectionProps {
    title?: string,
    cardData?: CardProps[], //for now, not exactly sure how we are pulling data
    cards?: any[]
}

interface SectionState {
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
}
    
    render() {
        return (
            <div>
                { this.props.cards ? (
                    <div>
                        <div className={gridStyle}>
                            { Object.keys(this.props.cards).map(key => {
                                let content = "";
                                this.props.cards[key].node.content.map(text => {
                                    content += text.value
                                })
                                return(<div style={{margin : 30}} key={key}>
                                    <ExpandableCard
                                      title={this.props.cards[key].node.title}
                                      authors={[this.props.cards[key].node.author]}
                                      tags={[this.props.cards[key].node.section]}
                                      photo="https://dailybruin.com/images/2018/10/\web.sp_.mwp_.nbk_.ADX_-640x461.jpg"
                                      description={content}
                                    />
                                </div>);
                            })}
                        </div>
                    </div>
                ) : "No cards found" }
            </div>
        )
    }
}
