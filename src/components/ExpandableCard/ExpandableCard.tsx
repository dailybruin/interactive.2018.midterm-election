import * as React from 'react'
import { css } from 'react-emotion'
import AnimateHeight from 'react-animate-height'
import { RotateCcw } from 'react-feather';

interface ExpandableCardProps {
  title: string,
  photo: any,
  endorse: boolean,
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
      <div className={css`
        width: 100%;
        display: flex;
        flex-direction: column;
        border: 1px black solid;
      `}>
        <div className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}>
          <img src={this.props.photo} height={this.props.height} className={css`
            margin: 0px;
          `}/>
          <div className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
          `}>
            <h1>{this.props.title}</h1>
            <p>We think this is ...</p>
            {this.props.endorse && <h2>Good</h2>}
            {!this.props.endorse && <h2>Bad</h2>}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Arrow-down.svg"
              height={20}
              onClick={this.toggle}
              className={css`
                transform: rotate(${this.state.open ? 180:0}deg);
                transition: transform 0.2s linear;
                transform-style: preserve-3D;
                margin: 0px;
              `}
            />
          </div>
        </div>
        <AnimateHeight
            duration={ 500 }
            height={ this.state.open? 'auto' : 0}
          >
            <p>{this.props.description}</p>
          </AnimateHeight>
      </div>
    )
  }
}

export default ExpandableCard