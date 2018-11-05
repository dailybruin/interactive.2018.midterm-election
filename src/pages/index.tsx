import * as React from 'react'
import { graphql } from 'gatsby'
import { Head } from '@dailybruin/lux'
import IconTable from '../components/IconTable'
import NavBar from '../components/NavBar'
import EndorseCircle from '../components/EndorseCircle'
import Section2 from "../components/Section2"
import S1Outline from '../assets/s1.png'
import {css} from 'emotion'

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

  componentDidMount() {
    if (windowExists()) {
      window.addEventListener('resize', () => {
        this.setState({
          screenWidth: window.innerWidth,
        })
      });
    }
  }

  render() {
    const {iconPaths: i} = this;

    if (this.state.screenWidth < 800) {
      const icons = [{
        src: i.royce,
        left: 38,
        top: 57,
        width: 28,
        shouldMagnifyOnHover: true,
      }, {
        src: i.capitol,
        left: 35,
        top: -5,
        width: 36.5,
        shouldMagnifyOnHover: true,
      }, {
        src: i.california,
        left: 10,
        top: 103,
        width: 30,
        shouldMagnifyOnHover: true,
      }, {
        src: i.bank,
        left: 59.3,
        top: 70,
        width: 13.1,
        shouldMagnifyOnHover: true,
      }, {
        src: i.voteBox,
        left: 29,
        top: 71.5,
        width: 13,
        shouldMagnifyOnHover: true,
      }, {
        src: i.waterRecycle,
        left: 44.5,
        top: 42.5,
        width: 14,
        shouldMagnifyOnHover: true,
      }, {
        src: i.ribbon,
        left: 38,
        top: 26,
        width: 12,
        shouldMagnifyOnHover: true,
      }, {
        src: i.blueHouse,
        left: 57.7,
        top: 28,
        width: 12.8,
        shouldMagnifyOnHover: true,
      }, {
        src: i.waterDollar,
        left: 69,
        top: 41.5,
        width: 15,
        shouldMagnifyOnHover: true,
      }, {
        src: i.bed,
        left: 75,
        top: 55.1,
        width: 14,
        shouldMagnifyOnHover: true,
      }, {
        src: i.houseTransfer,
        left: 74,
        top: 74,
        width: 14,
        shouldMagnifyOnHover: true,
      }, {
        src: i.car,
        left: 60,
        top: 90,
        width: 15,
        shouldMagnifyOnHover: true,
      }, {
        src: i.clock,
        left: 45.3,
        top: 96,
        width: 13,
        shouldMagnifyOnHover: true,
      }, {
        src: i.arm,
        left: 27,
        top: 91,
        width: 13,
        shouldMagnifyOnHover: true,
      }, {
        src: i.rentSign,
        left: 14.2,
        top: 77.5,
        width: 13,
        shouldMagnifyOnHover: true,
      }, {
        src: i.ambulance,
        left: 14,
        top: 60,
        width: 15,
        shouldMagnifyOnHover: true,
      }, {
        src: i.animals,
        left: 20,
        top: 40.5,
        width: 15,
        shouldMagnifyOnHover: true,
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
      }, {
        src: i.california,
        left: 76,
        top: 10,
        width: 10.5,
        shouldMagnifyOnHover: true,
      }, {
        src: i.bank,
        left: 58,
        top: 19.7,
        width: 6,
        shouldMagnifyOnHover: true,
      }, {
        src: i.voteBox,
        left: 39.5,
        top: 21.2,
        width: 6.5,
        shouldMagnifyOnHover: true,
      }, {
        src: i.waterRecycle,
        left: 48.1,
        top: 11.4,
        width: 6.5,
        shouldMagnifyOnHover: true,
      }, {
        src: i.ribbon,
        left: 43,
        top: 3,
        width: 5.5,
        shouldMagnifyOnHover: true,
      }, {
        src: i.blueHouse,
        left: 52.55,
        top: 3.4,
        width: 5.5,
        shouldMagnifyOnHover: true,
      }, {
        src: i.waterDollar,
        left: 60.5,
        top: 7.4,
        width: 7,
        shouldMagnifyOnHover: true,
      }, {
        src: i.bed,
        left: 66.5,
        top: 14,
        width: 7,
        shouldMagnifyOnHover: true,
      }, {
        src: i.houseTransfer,
        left: 66,
        top: 24,
        width: 7,
        shouldMagnifyOnHover: true,
      }, {
        src: i.car,
        left: 56.6,
        top: 29.5,
        width: 7.3,
        shouldMagnifyOnHover: true,
      }, {
        src: i.clock,
        left: 49,
        top: 32,
        width: 6,
        shouldMagnifyOnHover: true,
      }, {
        src: i.arm,
        left: 40,
        top: 28.5,
        width: 6,
        shouldMagnifyOnHover: true,
      }, {
        src: i.rentSign,
        left: 31.8,
        top: 26,
        width: 6,
        shouldMagnifyOnHover: true,
      }, {
        src: i.ambulance,
        left: 29.4,
        top: 18.5,
        width: 7,
        shouldMagnifyOnHover: true,
      }, {
        src: i.animals,
        left: 33,
        top: 9.6,
        width: 7.2,
        shouldMagnifyOnHover: true,
      }, {
        src: i.royce,
        left: 46.5,
        top: 18.5,
        width: 11,
        shouldMagnifyOnHover: true,
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

const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <NavBar/>
    <Section2 cards={{...data.allKerckhoffArticle.edges}}/>
    <FilledIconTable />
  </>
)

export default IndexPage
