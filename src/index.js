import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme/theme';
import axios from "axios";

const rootElement = document.querySelector('#root');
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

// ReactDOM.render(
//   <ThemeProvider theme={theme}>
//     <CssBaseline />
//     <App />
//   </ThemeProvider>,
//   rootElement
// );


// fix for getting site setting first
class RootComponent extends Component {

  state = {
    siteSetting: null
  }

  async componentDidMount(){
    await axios
      .get(SERVER_URL + "/site-setting")
      .then(response => {
        console.log("get site-setting response", response.data);
        this.setState({ siteSetting: response.data });
      })
      .catch(error => console.log("Error when connect to API 3", error));
  }

  render(){
    const {siteSetting} = this.state

    if(siteSetting){
      theme.palette.background.paper = siteSetting.backgroundColor
      theme.palette.background.default = siteSetting.footerColor

      theme.palette.text.primary = siteSetting.fontColor
      theme.palette.text.secondary = siteSetting.secondaryColor

      theme.palette.secondary.main = siteSetting.buttonColor
    }
    else{
      return <></>
    }
    console.log('>>>>>>> theme: ', theme)

    // theme.palette.background.paper = '#FFF'
    return(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <RootComponent />,
  rootElement
);