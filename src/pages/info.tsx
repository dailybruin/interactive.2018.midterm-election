import * as React from 'react'
import Menu from '../components/Menu';
import { css } from 'react-emotion'

const infoStyle = css({
    display: 'flex',
    justifyContent: "space-around",
    flexDirection: "column",
    marginLeft: 100,
    marginRight: 100,
})

const headerStyle = css({
    display: 'flex',
    justifyContent: "space-between",
})

class InfoPage extends React.Component {
    render() {
        return (
            <div className={infoStyle}>
                    <Menu></Menu>
            </div>
        )
    }
}

export default InfoPage