import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Tabs from './Components/Tabs';
import Footer from './Components/Footer';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-147972937-1');
ReactGA.pageview('/');

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Tabs id="scrl"/>
        <Footer />
      </div>
    );
  }
}

export default App;
