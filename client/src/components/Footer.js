import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import home from '../files/images/homeIcon.png';
import '../constants/styles.css'

class Footer extends Component { 
  state = { redirect: false }
  
  // link to home page
  setRedirect = () => {
    this.setState({ redirect: true })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  
  render() {
      return (
        <div className="footerContainer">
          <Link className="footer" onClick={ this.setRedirect }  to='#' >
              <img src={ home } alt="titlePic" />
              { this.renderRedirect() }
          </Link>
        </div>
      )
  }
}

export default Footer;
