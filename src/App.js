import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

import './App.css'

import SearchPage from './SearchPage/SearchPage';
import HomePage from './HomePage/HomePage';
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
            <Switch>
              <Route 
                path="/" 
                exact
                render={(routerProps) => <SearchPage {...routerProps} />} 
              />
              {/* <Route 
                path="/search" 
                exact
                render={(routerProps) => <SearchPage {...routerProps} />} 
              /> */}
            </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
}
