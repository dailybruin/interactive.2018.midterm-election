import * as React from 'react'
import styled, {css} from 'react-emotion'
import Headroom from 'react-headroom'
import HeaderImg from '../assets/header.png';

const RedButton = styled('button')`
  background-color: #CF5F5F;
  color: white;
  border: none;
  width: 270px;
  align-self: flex-end;
  margin-right: 50px;
`
const LandingText = styled('p')`
  max-width: 600px;
  margin: 0px;
  margin-right: 50px;
`
const TitleBackground = styled('div')`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 240px;
  z-index: 10;
  @media (max-width: 1100px) {
    min-height: 250px;
    height: 30vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const NavBarContent = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  height: 140px;
  justify-content: center;
  @media (max-width: 1100px) {
    align-items: center;
    margin-top: 5px;
}
`

class NavBar extends React.Component<{},{}> {

  render() {
    return(
      <Headroom style={{zIndex: 2}}>
        <TitleBackground>
          <NavBarContent>
            <img style={{height: "100%", margin: 0}} src={HeaderImg}/>
          </NavBarContent>
          <NavBarContent className={css`@media (max-width: 800px) {display: none;}`}>
            <LandingText>
              THE DAILY BRUIN’S 2018 MIDTERM ELECTION GUIDE: Click on the illustration below to see read about local, state, and national races or view our list of endorsements.
            </LandingText>
            <RedButton>DAILY BRUIN ENDORSEMENTS</RedButton>
          </NavBarContent>
        </TitleBackground>
      </Headroom>
    )
  }
}

export default NavBar
