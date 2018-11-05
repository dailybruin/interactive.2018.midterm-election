import * as React from 'react'
import { css } from 'react-emotion'
import AnimateHeight from 'react-animate-height'
//import { RotateCcw } from 'react-feather';
import { Byline } from '@dailybruin/lux'
import { toSentence } from '@dailybruin/lux'
import EndorseCircle from '../EndorseCircle/EndorseCircle.tsx'
import TestLongCat from './longcat.jpg';
interface ExpandableCardProps {
  title: string,
  authors: string[],
  tags: string[],
  photo: any,
  description: string,
  height: number,
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
        height: 200px;
        display: flex;
        flex-direction: column;
        background-color: #FAFAFA;


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
            vertical-align: middle;
        `}>WORK WORK WORK </h1>
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
          <div className={css`
            background-image: url(${this.props.photo});
            background-size: cover;
            margin: 0px;
            height: 100px;
            width: 100px;
          `}/>
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
