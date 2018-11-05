import * as React from 'react'
import styled, {css} from 'react-emotion'
import Headroom from 'react-headroom'
import HeaderImg from '../assets/header.png';
import { Link, navigate } from 'gatsby';

const RedButton = styled('button')`
  background-color: #CF5F5F;
  color: white;
  border: none;
  width: 350px;
  align-self: flex-end;
  margin-right: 50px;
  cursor: pointer;
`
const BlueButton = styled('button')`
  background-color: #1C568C;
  color: white;
  border: none;
  width: 170px;
  align-self: flex-end;
  margin-right: 50px;
  cursor: pointer;
`
const LandingText = styled('p')`
  max-width: 600px;
  margin: 0px;
  margin-right: 50px;
`
const BlueLabelText = styled('h1')`
  max-width: 600px;
  margin-top: 20px;
  font-weight: 900;
  font-size: 40px;
  letter-spacing: -1px;
  color: #1C568C;
  margin-right: 50px;
  text-align: right;
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

interface INavBarProps {
  useBlueButtonHeader?: boolean;
  buttonLinkSrc?: string;
  blueButtonText?: string;
  blueLabelText?: string;
}

class NavBar extends React.Component<INavBarProps,{}> {

  render() {
    const useBlueButtonHeader = !!this.props.useBlueButtonHeader;

    return(
      <Headroom style={{zIndex: 2}}>
        <TitleBackground>
          <NavBarContent>
            <img style={{height: "100%", margin: 0, cursor: "pointer"}} src={HeaderImg} alt={"midterm election 2018"} onClick={() => navigate("/")}/>
          </NavBarContent>
          {useBlueButtonHeader ? 
            <NavBarContent className={css`@media (max-width: 800px) { display: none; }`}>
              <Link to={this.props.buttonLinkSrc || '/endorsement'} className={css`
                align-self: flex-end;
              `}>
                <BlueButton>RETURN TO GUIDE</BlueButton>
              </Link>
              <BlueLabelText>
                {this.props.blueLabelText || 'DUMMY TEXT'}
              </BlueLabelText>
            </NavBarContent>
            :
            <NavBarContent className={css`@media (max-width: 800px) { display: none; }`}>
              <LandingText>
                THE DAILY BRUIN’S 2018 MIDTERM ELECTION GUIDE: Click on the illustration below to read our coverage of the local, state, and national races or view our list of endorsements.
              </LandingText>
              <Link to={this.props.buttonLinkSrc || '/endorsement'}>
                <RedButton>ENDORSEMENTS: TELL ME HOW TO VOTE</RedButton>
              </Link>
            </NavBarContent>
          }
        </TitleBackground>
      </Headroom>
    )
  }
}

export default NavBar
