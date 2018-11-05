import * as React from 'react'
import { css } from 'react-emotion'
import AnimateHeight from 'react-animate-height'
import { toSentence } from '@dailybruin/lux'
import EndorseCircle from './EndorseCircle'
import styled from "react-emotion"

const buttonStyle = css({
  margin: 10,
  width: 175,
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
const StyledLink = styled('a')`
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

interface ExpandableCardProps {
  title: string,
  authors: string[],
  tags: string[],
  photo: any,
  description: string,
  link: string,
  endorsed: string,
  passedId: string,
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
      <div id={this.props.passedId} className={css`
        width: 400px;
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
        <div className={ css`
            margin: 10px;
            padding-right: 100px;
        `}>
        <h1> {this.props.title} </h1>
        </div>
        <div style={{zIndex: 1, marginTop: 20, right: -40, float: "right", position: "absolute"}}>
          <EndorseCircle
              cardType={this.props.endorsed == "yes" ? "approve" : (this.props.endorsed == "no"  ? "reject": "article") }
              sizePx={150}
              imgSizePx={120}
              imgSrc={this.props.photo}>
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
        <a style={{color: "inherit", textDecoration: "inherit"}} href={this.props.link}><button className={buttonStyle}>Read More</button></a>
      </div>
</>
    )
  }
}

export default ExpandableCard
