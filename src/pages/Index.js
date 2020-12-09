import React, { Component } from 'react';

import HorizontalNav2 from '../components/horizontal-navs/HorizontalNav2';
import HorizontalNavWithLogo from '../components/horizontal-navs/HorizontalNavWithLogo';
import StructuresCustom1 from '../components-custom/StructuresCustom1';
import CallToAction1 from '../components/call-to-action/CallToAction1';
import Footer3 from '../components/footers/Footer3';

import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default class Index extends Component {

  state = {
    homepage: null,
    navigation: null,
    siteSetting: null,
  };

  componentDidMount() {
    axios
      .get(SERVER_URL + "/homepage")
      .then(response => {

        console.log("get homepage response", response);
        this.setState({ homepage: response.data });
      })
      .catch(error => console.log("Error when connect to API 1", error));

    axios
      .get(SERVER_URL + "/navigation")
      .then(response => {

        console.log("get navigation response", response);
        this.setState({ navigation: response.data });
      })
      .catch(error => console.log("Error when connect to API 2", error));

    axios
      .get(SERVER_URL + "/site-setting")
      .then(response => {
        console.log("get site-setting response", response);
        this.setState({ siteSetting: response.data });
      })
      .catch(error => console.log("Error when connect to API 3", error));
  }

  render() {
    const {siteSetting} = this.state

    let navigation = this.state.navigation;
    let topNav = navigation == null ? [] : navigation.topNav;
    let mainMenu = navigation == null ? [] : navigation.mainMenu;
    let footer = navigation == null ? [] : navigation.footer;

    var homepage = this.state.homepage;
    var features = homepage == null ? [] : homepage.featureSection;
    var hero = homepage == null ? [] : homepage.heroCarousel;

    let logo = siteSetting ? (SERVER_URL + siteSetting.logo.url) : ''
    console.log('>>>>>>>>> logo: ', logo)

      return (
        <React.Fragment>
          <HorizontalNav2 content={{
            nav: topNav,
            color: '#000',
            backgroundColor: '#FFF'
            }} />
          <HorizontalNavWithLogo
            content={{
              nav: mainMenu,
              brand: {
                text: '',
                // image: '/images/BurgerKing.svg',
                image: logo,
                width: '110',
              },
              //'primary-action': 'Language',
            }}
          />

          {/*}
          <StructuresCustom1>
          </StructuresCustom1>
          */}

          <div>
            <Carousel>
              { hero.map( (item, i) => <CarouselItem key={i} item={item} /> ) }
            </Carousel>
          </div>

          {
            features.map( (item, i) => <CallToAction1 key={i} content={item} /> )
          }

          <Footer3
            content={{
              brand: {
                text: '',
                image: '',
                width: '110',
              },
              copy:
                'TM &amp; \u00a9 2015 Burger King Corporation. Todos los derechos reservados.',
            }}
          />
        </React.Fragment>
      );
  }
}


const CarouselItem = (props) => (
    <Paper>
        <img src={SERVER_URL + props.item.bannerImage.url } />
        <Button className="CheckButton">{props.item.ctaButtonName}</Button>
    </Paper>
);

