import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profileImage from '../assets/Girmay.png';
import Footer from './Footer/footer';
class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Girmay Hailu</h2>
            <img
              src={profileImage}
              alt="avatar"
              style={{height: '250px', borderRadius:'50%'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
               Three-year professional experience in software programming
               and testing using Visual Basic.Net, Java, C#, C++ and
               System Administrator. I have been studying Danish since
               2014 and working in Service Sector. I have taken different
               courses in 2018 in Digital Analytics, Digital Marketing,
               python, CSS, html and JavaScript.
             </p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+45) 31877717
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (+45) 318-7771
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ink423103@yahoo.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>


              </List>
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

export default Contact;
