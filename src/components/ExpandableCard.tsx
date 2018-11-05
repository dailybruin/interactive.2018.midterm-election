import * as React from 'react'
import { css } from 'react-emotion'
import AnimateHeight from 'react-animate-height'
//import { RotateCcw } from 'react-feather';
import { Byline } from '@dailybruin/lux'
import { toSentence } from '@dailybruin/lux'
import EndorseCircle from './EndorseCircle'
import S1Outline from '../assets/s1.png'
import styled from "react-emotion"

const buttonStyle = css({
  marginTop: 35,
  widty: 96,
  backgroundColor: '#1C568C',
  border: "blue",
  borderRadius: 3,
  color: "#FFF",
  '&:hover' : {
    boxShadow: '2px 2px 5px 0px rgba(0,0,0,0.75)',
    transform: "translateY(-1px)",
    cursor: "pointer"
  }
})

interface ExpandableCardProps {
  title: string,
  authors: string[],
  tags: string[],
  photo: any,
  description: string,
  link: string,
 }

interface ExpandableCardState {
  open: boolean
}

class ExpandableCard extends React.Component<ExpandableCardProps, ExpandableCardState> {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
    };
}
  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return(
      <>
      <div className={css`
        width: 300px;
        display: flex;
        flex-direction: column;
        background-color: #FAFAFA;
        float: left;
      `}>
        <div className={ css`
          display: flex;
          background-color: #96B3CE;
          color: white;
          align-items: center;
          position:relative
        `}>
          <h1 className={ css`
            margin: 10px;
            padding-right: 60px;
        `}> {this.props.title} </h1>
        <div style={{zIndex: 1, marginTop: 20, right: -50, float: "right", position: "absolute"}}>
          <EndorseCircle
              cardType={"article"}
              sizePx={150}
              imgSizePx={120}
              imgSrc={S1Outline}>
          </EndorseCircle>
        </div>
        </div>
        <div className={css`
          display: flex;
          padding: 10px;
        `}>
          <div className={css`
            display: flex;
            flex-direction: column;
            align-items: left;
            justify-content: space-between;
            width: 100%;
          `}>
            <div>
              <h4 className={css`
              margin: 5px;
            `}>By {toSentence(this.props.authors.map(author => author.toUpperCase()))}</h4>
              <h4 className={css`
              margin: 5px;
              color: #96B3CE;
            `}>{this.props.tags.join(", ")}</h4>
            </div>
          </div>
        </div>
        <AnimateHeight
          duration={ 500 }
          height={ this.state.open ? 'auto' : 0}
        >
        </AnimateHeight>
        <button className={buttonStyle}><a href={this.props.link}>Read More</a></button>
      </div>
</>
    )
  }
}

export default ExpandableCard
