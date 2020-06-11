import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profileImage from '../assets/Girmay.png';
import Footer from './Footer/footer';

class Landing extends Component {
  render() {
    return(
      <div >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profileImage}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/girmay-hailu-7ba27230/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/berheg" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
      </div>
          </Cell>
          <Cell className = "footer" col ={12}>
            <Footer />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
