import React, { Component } from 'react';
import {HashRouter, Link} from 'react-router-dom';
import router from "./router";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <nav className='nav'>
          <div>WestSide University</div> 
          <div className='link-wrap'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
          </div>
        </nav>
      {router}
      </div>
      </HashRouter>
    )
  }
}