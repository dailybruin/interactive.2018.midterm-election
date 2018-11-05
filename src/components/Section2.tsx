import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ExpandableCard from './ExpandableCard'
import styled, {css} from 'react-emotion'

interface CardProps {
    /* Props of card component */
}

interface SectionProps {
    title?: string,
    cardData?: CardProps[], //for now, not exactly sure how we are pulling data
    cards?: any[],
    section: string
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
                                if(this.props.cards[key].node.title.substring(0, this.props.section.length) != this.props.section){
                                    return <div></div>
                                }
                                let content = "";
                                this.props.cards[key].node.content.map(text => {
                                    content += text.value
                                })
                                return(<div style={{margin : 50}} key={key}>
                                    {console.log(this.props.cards[key].node)}
                                    <ExpandableCard
                                      title={this.props.cards[key].node.headline}
                                      authors={[this.props.cards[key].node.author]}
                                      tags={[this.props.cards[key].node.section]}
                                      photo={this.props.cards[key].node.image}
                                      description={content}
                                      link={this.props.cards[key].node.link}
                                      endorsed={this.props.cards[key].node.endorsed}
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
