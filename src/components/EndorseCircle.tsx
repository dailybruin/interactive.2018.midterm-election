import * as React from 'react';
import { css } from 'emotion';

interface IEndorseCircleProps {
  cardType: string;
  sizePx: number;
  imgSizePx: number;
  imgSrc: string;
  title?: string;
}

const approveColors = ['#84B9A6', '#78AD9A'];
const rejectColors = ['#D17B7B', '#C66D6D'];
const articleColors = ['#E6E6E6', '#DEDEDE'];

const EndorseCircle: React.SFC<IEndorseCircleProps> = ({cardType, sizePx, imgSizePx,imgSrc}) => {
  let colors;
  if(cardType == "approve"){
    colors = approveColors;

  }
  if(cardType == "article"){
    colors = articleColors;

  }
  if(cardType == "reject"){
    colors = rejectColors;

  }
  const sizePxStr = `${sizePx}px`;
  const halfSizePxStr = `${sizePx / 2}px`;
  const imgSizePxStr = `${imgSizePx}px`;
  const halfDiffPxStr = `${Math.max(0, (sizePx - imgSizePx) / 2)}px`;


  return (
    <div className={css`
      width: ${sizePxStr};
      height: ${sizePxStr};
    `}>

      <img src={imgSrc}
        className={css`
          position: absolute;
          width: ${imgSizePxStr};
          height: ${imgSizePxStr};
          margin-top: ${halfDiffPxStr};
          margin-left: ${halfDiffPxStr};
          border-radius: 50%;
          z-index: 1;
          background-color: white;
        `}
        alt="" />


      <div className={css`
          position: absolute;
          background-color: ${colors[0]};
          width: ${sizePxStr};
          height: ${sizePxStr};
          padding-right: ${halfSizePxStr};
          border-radius: 50%;
        `}/>
      <div className={css`
          position: absolute;
          margin-left: ${halfSizePxStr};
          background-color: ${colors[1]};
          width: ${halfSizePxStr};
          height: ${sizePxStr};
          border-bottom-right-radius: ${sizePxStr};
          border-top-right-radius: ${sizePxStr};
        `}/>
      </div>

  );
}

export default EndorseCircle;
