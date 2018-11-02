import * as React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'react-emotion'

const buttonStyle = css({
    widty: 96,
    backgroundColor: '#1C568C',
    border: 'none',
    borderRadius: 2,
})

const menuStyle = css({
    fontFamily: 'Roboto',
    display: 'flex',
    justifyContent: "space-between",
    width: 200
   })

const StyledLink = styled(Link)`
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

interface MenuState {
    selected: string
}

class Menu extends React.Component {
    render() {
        return (
       <div className={menuStyle}>
           <button className={buttonStyle}>
               <StyledLink to="/endorsements">Endorsements</StyledLink>
            </button>
           <button className={buttonStyle}>
               <StyledLink to="/articles">Articles</StyledLink>
            </button>
       </div>
        )
    }
}

export default Menu