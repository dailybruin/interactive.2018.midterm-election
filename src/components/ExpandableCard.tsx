import * as React from 'react'
import { css } from 'react-emotion'
import AnimateHeight from 'react-animate-height'
//import { RotateCcw } from 'react-feather';
import { Byline } from '@dailybruin/lux'
import { toSentence } from '@dailybruin/lux'
import EndorseCircle from './EndorseCircle/EndorseCircle'
import TestLongCat from './longcat.jpg';
import S1Outline from '../assets/s1.png'

interface ExpandableCardProps {
  title: string,
  authors: string[],
  tags: string[],
  photo: any,
  description: string,
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
    console.log(this.props)
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
        `}>WORK WORK W </h1>
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
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
                height={20}
                onClick={this.toggle}
                className={css`
                  transform: rotate(${this.state.open ? 180:0}deg);
                  transition: transform 0.2s linear;
                  transform-style: preserve-3D;
                  margin: 0;
                `}
              />
            </div>
          </div>
        </div>
        <AnimateHeight
          duration={ 500 }
          height={ this.state.open ? 'auto' : 0}
        >
          <p className={css`
          margin: 10px;
          `}>{this.props.description}</p>
        </AnimateHeight>
      </div>
</>
    )
  }
}

export default ExpandableCard
