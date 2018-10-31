import * as React from 'react';
import { css } from 'emotion';

interface Icon {
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
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
      src, left, top, width, height,
      onClickHandler = () => {},
    }) => {

      return (<div className={css`
          position: absolute;
          width: ${width}vw;
          height: ${height}vw;
          margin-left: ${left}vw;
          margin-top: ${top}vw;
        `}
          onMouseEnter={(e) => e.preventDefault()}
        >
        <svg width="100%" height="100%"
          onClick={onClickHandler}
          className={css`
            transition: all 0.5s;
            &:hover {
              transform: scale(1.2);
              filter: drop-shadow(3px 3px 4px black);
              cursor: pointer;
              transition: all 0.5s;
            }
          `}
          >
          <image width="100%" height="100%" href={src} />
        </svg>
      </div>);
    });
  }

  render() {
    const {backgroundSrc, heightVW} = this.props;
    return (
      <div className={css`
        position: relative;
        background: url(${backgroundSrc}) no-repeat;
        background-size: 100%;
        width: 100%;
        height: ${heightVW}vw;
      `}>
        {this.drawIcons()}
      </div>
    );
  }
}
