import * as React from 'react'
import styled from 'react-emotion'
import Headroom from 'react-headroom'

const TitleBackground = styled('div')`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  height: 240px;
  @media (max-width: 500px) {
    height: 45vw;
  }
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
  @media (max-width: 500px) {
    margin-left: 5vw;
    width: 20vw;
    height: 27vw;
  }
`
const NavBarContent = styled('div')`
display: flex;
flex-direction: column;
margin-left: 10px;
height: 140px;
justify-content: center;
@media (max-width: 500px) {
  height: 27vw;
}
`
const YearText = styled('p')`
  margin: 0;
  font-style: normal;
  font-weight: 900;
  line-height: 50px;
  font-size: 60px;
  color: #FFFFFF;
  @media (max-width: 500px) {
    font-size: 12vw;
    line-height: 12vw;
  }
`

const Title = styled('p')`
  margin: 0;
  font-style: bold;
  font-weight: 900;
  line-height: 50px;
  font-size: 60px;
  @media (max-width: 500px) {
    font-size: 12vw;
    line-height: 12vw;
  }
`

class NavBar extends React.Component<{},{}> {

  render() {
    return(
      <Headroom>
        <TitleBackground>
          <>
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
          </>
          <NavBarContent>

          </NavBarContent>
        </TitleBackground>
      </Headroom>
    )
  }
}

export default NavBar