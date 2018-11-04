import * as React from 'react';
import { css } from 'emotion';

interface IEndorseCircleProps {
  isApprove: boolean;
  sizePx: number;
  imgSizePx: number;
  imgSrc: string;
  title: string;
}

const approveColors = ['#84B9A6', '#78AD9A'];
const rejectColors = ['#D17B7B', '#C66D6D'];

const EndorseCircle: React.SFC<IEndorseCircleProps> = ({isApprove, sizePx, imgSizePx, imgSrc, title}) => {
  const colors = isApprove ? approveColors : rejectColors;
  const sizePxStr = `${sizePx}px`;
  const halfSizePxStr = `${sizePx / 2}px`;
  const imgSizePxStr = `${imgSizePx}px`;
  const halfDiffPxStr = `${Math.max(0, (sizePx - imgSizePx) / 2)}px`;

  return (
    <div className={css`
      display: flex;
      flex-direction: column;
      align-items: center;
      width: ${sizePxStr};
    `}>
      <div className={css`
        width: ${sizePxStr};
        height: ${sizePxStr};
        margin-bottom: 15px;
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
      <h3 className={css`
        margin: 0;
        font-style: normal;
        font-weight: bold;
        line-height: normal;
        font-size: 20px;
        text-align: center;
        letter-spacing: 0.0357143em;
      `}>{title}</h3>
    </div>
  );
}

export default EndorseCircle;