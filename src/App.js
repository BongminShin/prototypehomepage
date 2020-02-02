import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/navbars/Navbar';
import Footer from './components/footer/Footer';
// import MainScreen from './components/carousel/SlideCarousel';
import Header from './components/header/Header';
import {Components} from './pages/Components';
import { Provider } from "react-redux";
import dataStore  from "./store";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Navbar/>
          <Provider store={ dataStore }>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/contact' component={Contact}/>
              <Route path='/about' component={About}/>
              {/* <Route path='/board' component={Board}/>
              <Route path='/boardform' component={BoardForm}/> */}
              {/* <Route path='/formValidate' component={Form}/> */}
              <Route path='/components' component={Components}/>
            </Switch>
          </Provider>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;