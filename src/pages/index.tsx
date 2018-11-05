import * as React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import { Head } from '@dailybruin/lux'
import IconTable from '../components/IconTable'
import NavBar from '../components/NavBar'
import styled, {css} from 'react-emotion'

// Temps, replace with kerckhoff
import DesktopBackground from '../assets/desktop/desktop\ home\ background.png';
import MobileBackground from '../assets/mobile/mobile\ background\ with\ circles.png';

import ICapitol from '../assets/icons/california\ capitol.png';
import ICalifornia from '../assets/icons/california.png';
import IBank from '../assets/icons/measure\ b.png';
import IVoteBox from '../assets/icons/measure\ e.png';
import IWaterRecycle from '../assets/icons/measure\ w.png';
import IRibbon from '../assets/icons/prop\ 1.png';
import IBlueHouse from '../assets/icons/prop\ 2.png';
import IWaterDollar from '../assets/icons/prop\ 3.png';
import IBed from '../assets/icons/prop\ 4.png';
import IHouseTransfer from '../assets/icons/prop\ 5.png';
import ICar from '../assets/icons/prop\ 6.png';
import IClock from '../assets/icons/prop\ 7.png';
import IArm from '../assets/icons/prop\ 8.png';
import IRentSign from '../assets/icons/prop\ 10.png';
import IAmbulance from '../assets/icons/prop\ 11.png';
import IAnimals from '../assets/icons/prop\ 12.png';
import IRoyce from '../assets/icons/royce.png';
import IVotePin from '../assets/icons/vote\ pin.png';

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    allKerckhoffArticle(filter: {title: {regex: "/./"}}) {
      edges {
        node {
          title
          headline
          author
          content {
            type
            value
          }
        }
      }
    }
  }
`

interface IFilledIconTableState {
  screenWidth: number;
}

const windowExists = () => typeof window !== 'undefined';

class FilledIconTable extends React.Component<{}, IFilledIconTableState> {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: windowExists() ? window.innerWidth : 1000,
    };
  }

  // Currently, this is hard coded.
  // Remove this and replace with actual paths
  iconPaths = {
    capitol: ICapitol,
    california: ICalifornia,
    bank: IBank,
    voteBox: IVoteBox,
    waterRecycle: IWaterRecycle,
    ribbon: IRibbon,
    blueHouse: IBlueHouse,
    waterDollar: IWaterDollar,
    bed: IBed,
    houseTransfer: IHouseTransfer,
    car: ICar,
    clock: IClock,
    arm: IArm,
    rentSign: IRentSign,
    ambulance: IAmbulance,
    animals: IAnimals,
    royce: IRoyce,
    votePin: IVotePin,
  };

  resizeListener = () => {
    this.setState({
      screenWidth: window.innerWidth,
    });
  }

  componentDidMount() {
    if (windowExists()) {
      window.addEventListener('resize', this.resizeListener);
    }
  }
  
  componentWillUnmount() {
    if (windowExists()) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  render() {
    const {iconPaths: i} = this;

    const navigateOnClick = (path) => () => navigate(path);

    if (this.state.screenWidth < 800) {
      const icons = [{
        src: i.royce,
        left: 38,
        top: 57,
        width: 28,
        shouldMagnifyOnHover: false,
      }, {
        src: i.capitol,
        left: 35,
        top: -5,
        width: 36.5,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#officialgovernor.aml'),
      }, {
        src: i.california,
        left: 10,
        top: 103,
        width: 30,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#officialwwsenator.aml'),
      }, {
        src: i.bank,
        left: 59.3,
        top: 70,
        width: 13.1,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#measureb.aml'),
      }, {
        src: i.voteBox,
        left: 29,
        top: 71.5,
        width: 13,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#measuree.aml'),
      }, {
        src: i.waterRecycle,
        left: 44.5,
        top: 42.5,
        width: 14,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#measurew.aml'),
      }, {
        src: i.ribbon,
        left: 38,
        top: 26,
        width: 12,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop1.aml'),
      }, {
        src: i.blueHouse,
        left: 57.7,
        top: 28,
        width: 12.8,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop2.aml'),
      }, {
        src: i.waterDollar,
        left: 69,
        top: 41.5,
        width: 15,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop3.aml'),
      }, {
        src: i.bed,
        left: 75,
        top: 55.1,
        width: 14,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop4.aml'),
      }, {
        src: i.houseTransfer,
        left: 74,
        top: 74,
        width: 14,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop5.aml'),
      }, {
        src: i.car,
        left: 60,
        top: 90,
        width: 15,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop6.aml'),
      }, {
        src: i.clock,
        left: 45.3,
        top: 96,
        width: 13,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop7.aml'),
      }, {
        src: i.arm,
        left: 27,
        top: 91,
        width: 13,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop8.aml'),
      }, {
        src: i.rentSign,
        left: 14.2,
        top: 77.5,
        width: 13,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop10.aml'),
      }, {
        src: i.ambulance,
        left: 14,
        top: 60,
        width: 15,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop11.aml'),
      }, {
        src: i.animals,
        left: 20,
        top: 40.5,
        width: 15,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop12.aml'),
      }, {
        src: i.votePin,
        left: 11,
        top: 20,
        width: 12,
        shouldMagnifyOnHover: false,
      }, {
        src: i.votePin,
        left: 73,
        top: 110,
        width: 12,
        shouldMagnifyOnHover: false,
      }];

      return (
        <IconTable
          heightVW={153}
          backgroundSrc={MobileBackground}
          icons={icons}
          />
      );
    } else {
      const icons = [{
        src: i.capitol,
        left: 9,
        top: 9,
        width: 20,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#officialgovernor.aml'),
      }, {
        src: i.california,
        left: 76,
        top: 10,
        width: 10.5,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#officialwwsenator.aml'),
      }, {
        src: i.bank,
        left: 58,
        top: 19.7,
        width: 6,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#measureb.aml'),
      }, {
        src: i.voteBox,
        left: 39.5,
        top: 21.2,
        width: 6.5,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#measuree.aml'),
      }, {
        src: i.waterRecycle,
        left: 48.1,
        top: 11.4,
        width: 6.5,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#measurew.aml'),
      }, {
        src: i.ribbon,
        left: 43,
        top: 3,
        width: 5.5,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop1.aml'),
      }, {
        src: i.blueHouse,
        left: 52.55,
        top: 3.4,
        width: 5.5,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop2.aml'),
      }, {
        src: i.waterDollar,
        left: 60.5,
        top: 7.4,
        width: 7,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop3.aml'),
      }, {
        src: i.bed,
        left: 66.5,
        top: 14,
        width: 7,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop4.aml'),
      }, {
        src: i.houseTransfer,
        left: 66,
        top: 24,
        width: 7,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop5.aml'),
      }, {
        src: i.car,
        left: 56.6,
        top: 29.5,
        width: 7.3,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop6.aml'),
      }, {
        src: i.clock,
        left: 49,
        top: 32,
        width: 6,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop7.aml'),
      }, {
        src: i.arm,
        left: 40,
        top: 28.5,
        width: 6,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop8.aml'),
      }, {
        src: i.rentSign,
        left: 31.8,
        top: 26,
        width: 6,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop10.aml'),
      }, {
        src: i.ambulance,
        left: 29.4,
        top: 18.5,
        width: 7,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop11.aml'),
      }, {
        src: i.animals,
        left: 33,
        top: 9.6,
        width: 7.2,
        shouldMagnifyOnHover: true,
        onClickHandler: navigateOnClick('/guide#prop12.aml'),
      }, {
        src: i.royce,
        left: 46.5,
        top: 18.5,
        width: 11,
        shouldMagnifyOnHover: false,
      }, {
        src: i.votePin,
        left: 23.6,
        top: 5,
        width: 6,
        shouldMagnifyOnHover: false,
      }, {
        src: i.votePin,
        left: 22.5,
        top: 32,
        width: 6,
        shouldMagnifyOnHover: false,
      }, {
        src: i.votePin,
        left: 62,
        top: 36,
        width: 6,
        shouldMagnifyOnHover: false,
      },];

      return (
        <IconTable
          heightVW={47}
          backgroundSrc={DesktopBackground}
          icons={icons}
        />
      );
    }
  }
}

const LandingText = styled('p')`
  max-width: 600px;
  margin: 0px;
`

const RedButton = styled('button')`
  background-color: #CF5F5F;
  color: white;
  border: none;
  width: 270px;
  align-self: flex-end;
  cursor: pointer;
`

const IndexPage = ({ data }) => (
  <>
    <Head
      {...data.site.siteMetadata}
      image={require('../assets/desktop/desktop\ home\ template.png')}
    />
    <NavBar/>
    <div className={css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;
      margin-bottom: 50px;
      text-align: center;
      @media (min-width: 800px) { display: none; }
    `}>
      <LandingText>
        THE DAILY BRUIN’S 2018 MIDTERM ELECTION GUIDE: Click on the illustration below to read our coverage of the local, state, and national races or view our list of endorsements.
      </LandingText>
      <Link className={css`
        margin-top: 5px;
      `} to={'/endorsement'}>
        <RedButton>DAILY BRUIN ENDORSEMENTS</RedButton>
      </Link>
      </div>
    <FilledIconTable />
  </>
)
export default IndexPage
