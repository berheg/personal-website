import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Footer from './Footer/footer';

class About extends Component {
  render() {
    return(
      <div className = "about-me-main">
      <div className="about-me">
      <Grid>
        <Cell className = "about-me-body" col ={12}>
          <h1>About Me</h1>
          <p>I am intersted in problem solving and making things
            comfortable and easily accessable. Hence I use programming
            and algorithm development to fullfill my interset.
            I have a solid understanding of software system development
            and life cycle of system developments.
            I am searching for a position in software development where
            I can use my exprience and knowledge to bring a difference.

          </p>
        </Cell>
      </Grid>
      </div>
      <Grid>
        <Cell className = "footer" col ={12}>
          <Footer />
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default About;
