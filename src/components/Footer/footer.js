import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return(
      <footer>
        <section class="ft-legal">
          <ul class="ft-legal-list">
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li>&copy; 2020 Copyright Nowrap Inc.</li>
          </ul>
        </section>
      </footer>
    )
  }
}

export default Footer;
