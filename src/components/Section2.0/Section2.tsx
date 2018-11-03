import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ExpandableCard from '../ExpandableCard/ExpandableCard.tsx'

interface CardProps {
    /* Props of card component */
}

interface SectionProps {
    title: string,
    cardData: CardProps[], //for now, not exactly sure how we are pulling data
}

export default class SectionList extends React.Component<CardProps,SectionProps> {
  constructor(props) {
    super(props);
    this.state = {
        cards:[1,2,3,4,5]
    };
  }
    render() {
      console.log("ENTERED SECTION LIST");
        return (
            <div>
                { this.state.cards ? (
                    <div>
                        <Grid container spacing={24} style={{padding: 16}}>
                            { this.state.cards.map((currentCard,index) => (
                                <Grid item md={4} key={index}>
                                    <ExpandableCard
                                      title="title testing"
                                      authors={["ryang"]}
                                      tags={["testing", "another test"]}
                                      photo="https://dailybruin.com/images/2018/10/\web.sp_.mwp_.nbk_.ADX_-640x461.jpg"
                                      description="this is a description
                                      fdasdkfjadskfjkasdfjkasdjfksdajfkjdsakfjakdsjfkadjsfkasdjfk
                                      dfkjasdkfjadslkfjadkljfkladsjfkl"
                                      height={200}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : "No cards found" }
            </div>
        )
    }
}
