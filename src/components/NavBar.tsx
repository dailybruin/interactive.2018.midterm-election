import * as React from 'react'
import styled, {css} from 'react-emotion'
import Headroom from 'react-headroom'
import Menu from './Menu'

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
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  min-height: 240px;
`

const YearBox = styled('div')`
  width: 100px;
  height: 140px;
  background: #1C568C;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`

const NavBarContent = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-bottom: auto;
  height: 140px;
  justify-content: center;
  @media (max-width: 1100px) {
    height: 27vw;
    align-items: center;
  }
`
const YearText = styled('p')`
  margin: 0;
  font-style: normal;
  font-weight: 900;
  line-height: 50px;
  font-size: 60px;
  color: #FFFFFF;
`

const Title = styled('p')`
  margin: 0;
  font-style: bold;
  font-weight: 900;
  line-height: 50px;
  font-size: 60px;
`

const Subtitle = styled('p')`
  font-family: Roboto;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: 40px;
  text-align: right;
  color: #1C568C;
  margin-bottom: 0;
`

const rightChild = css({
  alignSelf: "flex-end",
  display : "flex",
  alignItems: "flex-end",
  justifyContent : "flex-end",
  flexDirection : "column",
  height: "100%"})

interface NavbarProps {
  page: string,
}

class NavBar extends React.Component<NavbarProps,{}> {
  render() {
    return(
      <Headroom style={{
        boxShadow: '1px 1px 1px rgba(0,0,0,0.125)',
      }}>
        <TitleBackground>
          <div className={css`
            display: flex;
            width: 100%;
            align-items: center;
            justify-content: space-between;
            @media (max-width: 1100px) {
              flex-direction: column;
              justify-content: center;
              margin-top: 50px;
            }
          `}>
          <div className={css`
            display: flex;
            width: 440px;
            height: 140px;
            @media (max-width: 1100px) {
              width: 300px;
              height: 100px;
            }
          `}>
            <NavBarContent>
              <YearBox>
                <YearText>20</YearText>
                <YearText>18</YearText>
              </YearBox>
            </NavBarContent>
            <NavBarContent>
              <Title>MIDTERM</Title>
              <Title>ELECTIONS</Title>
            </NavBarContent>
          </div>
          {
            (this.props.page == 'landing') &&
          <NavBarContent>
            <LandingText>
              THE DAILY BRUIN’S 2018 MIDTERM ELECTION GUIDE: Click on the illustration below to see read about local, state, and national races or view our list of endorsements.
            </LandingText>
            <RedButton>DAILY BRUIN ENDORSEMENTS</RedButton>
          </NavBarContent>
          }
          {(this.props.page == 'info') &&
          <div className={rightChild}>
          <Menu></Menu>
          <Subtitle>DAILY BRUIN ELECTION GUIDE</Subtitle>
          </div>
          }
          {(this.props.page == 'endorsements') &&
          <div className={rightChild}>
          <button>Return to Guide Placeholder</button>
          <Subtitle>DAILY BRUIN ELECTION GUIDE</Subtitle>
          </div>
          }
          </div>
        </TitleBackground>
      </Headroom>
    )
  }
}

export default NavBar