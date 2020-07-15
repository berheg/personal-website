import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Footer from './Footer/footer';
import githubUserSearchImage from '../assets/githubUserSearch.png';
import ImgurImage from '../assets/Imgur.png';
import signupFirebaseImage from '../assets/signupFirebase.png';
import signupFormImage from '../assets/signupForm.png';
import fastPressAppImage from '../assets/fast-press-app.png';
import gifySearchAppImage from '../assets/gify-search-app.png';
import weatherAppImage from '../assets/weather-app.png';
import mealSharingImage from '../assets/mealSharing.png';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${githubUserSearchImage}) center / cover`}} >React Project #1</CardTitle>
            <CardActions border>
              <Button colored href="">GitHub</Button>
              <Button colored href="https://berheg.github.io/githubSearch/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${signupFirebaseImage}) center / cover`}} >React Project #2</CardTitle>
            <CardActions border>
              <Button colored href="https://github.com/berheg/Firebase">GitHub</Button>
              <Button colored href="http://berheg.github.io/signUpFirebase">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${signupFormImage}) center / cover`}} >React Project #3</CardTitle>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${ImgurImage}) center / cover`}} >HTML/JavaScript #1</CardTitle>
            <CardActions border>
              <Button colored href="">GitHub</Button>
              <Button colored href="https://berheg.github.io/html-css/week2/about.html/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${gifySearchAppImage}) center / cover`}} >HTML/JavaScript #2</CardTitle>
            <CardActions border>
              <Button colored href="https://github.com/berheg/Firebase">GitHub</Button>
              <Button colored href="https://berheg.github.io/javascript/javascript3/week1/Giphy%20api/index.html">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${signupFormImage}) center / cover`}} ></CardTitle>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored href="https://berheg.github.io/html-css/week3/form.html">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${weatherAppImage}) center / cover`}} >React Project #3</CardTitle>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored href="https://berheg.github.io/javascript/javascript3/week1/weatherApp/index.html">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 5 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${fastPressAppImage}) center / cover`}} ></CardTitle>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored href="https://berheg.github.io/javascript/javascript2/week3/fastPress/index.html">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        <div>
        {/* Project 6 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: `url(${mealSharingImage}) center / cover`}} ></CardTitle>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored href="https://berheg.github.io/javascript/javascript2/week3/fastPress/index.html">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div>
        {/* Project 6 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: `url(${mealSharingImage}) center / cover`}} ></CardTitle>
          <CardActions border>
            <Button colored href="https://github.com/berheg/MealSharing">GitHub</Button>
            <Button colored href="https://berheg.github.io/javascript/javascript2/week3/fastPress/index.html">Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
      )
    }else if(this.state.activeTab === 4) {
      return (
        <div>
          {/* Project 6 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${mealSharingImage}) center / cover`}} ></CardTitle>
            <CardActions border>
              <Button colored href="https://github.com/berheg/MealSharing">GitHub</Button>
              <Button colored href="https://berheg.github.io/javascript/javascript2/week3/fastPress/index.html">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }



  render() {
    return(
      <div className="projects-head">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>HTML-CSS/JavaScript</Tab>
          <Tab>Angular</Tab>
          <Tab>NodeJS</Tab>
          <Tab>MySql</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
            <Cell className = "footer" col ={12}>
              <Footer />
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
