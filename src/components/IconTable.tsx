import * as React from 'react';
import { css } from 'emotion';

interface Icon {
  src: string;
  left: number;
  top: number;
  width: number;
  shouldMagnifyOnHover: boolean;
  onMouseEnterHandler?: (event?: React.MouseEvent) => void;
  onMouseExitHandler?: (event?: React.MouseEvent) => void;
  onClickHandler?: (event?: React.MouseEvent) => void;
}

interface IconTableProps {
  heightVW: number;
  backgroundSrc: string;
  icons: Icon[];
}

export default class IconTable extends React.Component<IconTableProps> {
  constructor(props) {
    super(props);
  }

  drawIcons() {
    const {icons} = this.props;

    return icons.map(({
      src, left, top, width,
      shouldMagnifyOnHover,
      onClickHandler = () => {},
    }, i) => {
      return (<div className={css`
          position: absolute;
          width: ${width}vw;
          margin-left: ${left}vw;
          margin-top: ${top}vw;
          ${shouldMagnifyOnHover && `
          transition: all 0.5s;
          &:hover {
            transform: rotate(-5deg) scale(1.1);
            cursor: pointer;
            transition: all 0.5s;
          }
          `}
        `}
          key={i}
          onMouseEnter={(e) => e.preventDefault()}
          onClick={onClickHandler}
        >
        <img className={css`
          margin: 0;
        `} src={src} alt={"guide button"}/>
      </div>);
    });
  }

  render() {
    const {backgroundSrc, heightVW} = this.props;
    return (
      <div className={css`
        background: url('${backgroundSrc}') no-repeat;
        background-size: 100%;
        width: 100%;
        height: ${heightVW}vw;
      `}>
        {this.drawIcons()}
      </div>
    );
  }
}
