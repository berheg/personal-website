import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profileImage from '../assets/Girmay.png';
import Footer from './Footer/footer';

class Resume extends Component {

  render() {
    const workDescription = "Developing  Frontend Website using technologies"+
    "HTML, CSS, JavaScript , Git,  VS Code and React." +
    "Develop Restful Api using Node.js and packages " +
    "Express, nodemon, body-parser, MySql, webpack, " +
    "dotenv, and morgan.";
    const workDescriptionSecond = "Studying Danish \ Feasibility study of private business \ Solving problems as new expat "
    return(
      <div className="resume-container">
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profileImage}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2>Girmay Hailu</h2>
            <h4 style={{color: 'grey'}}>Software Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Three-year professional experience in software programming
              and testing using Visual Basic.Net, Java, C#, C++ and
              System Administrator. I have been studying Danish since
              2014 and working in Service Sector. I have taken different
              courses in 2018 in Digital Analytics, Digital Marketing,
              python, CSS, html and JavaScript.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Copenhagen, Denmark</p>
            <h5>Phone</h5>
            <p>(+45) 31877717</p>
            <h5>Email</h5>
            <p>ink423103@yahoo.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <h2>Experience</h2>

        <Experience
          startYear={2019}
          endYear={2020}
          jobName="Full Stack Developer"
          jobDescription= {workDescription}
          />

          <Experience
            startYear={2014}
            endYear={2018}
            jobName="Service Assistance"
            jobDescription={workDescriptionSecond}
            />
            <Experience
              startYear={2008}
              endYear={2010}
              jobName="Systems and Network Administration Engineer"
              jobDescription= {workDescription}
              />
              <Experience
                startYear={2007}
                endYear={2008}
                jobName="Programmer"
                jobDescription= {workDescription}
                />
          <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Fullstack Developer"
              schoolDescription="Hack YourFuture, Copenhagen "
               />

               <Education
                 startYear={2010}
                 endYear={2013}
                 schoolName="MSC in Material Science and Engineering"
                 schoolDescription="KTH University, Stockholm, Sweden"
                  />
                  <Education
                    startYear={2005}
                    endYear={2007}
                    schoolName="Post Graduate Diploma in Computer Science"
                    schoolDescription="HiLCoE School of Computer Science and Technology, Addis Ababa, Ethiopia"
                     />
                     <Education
                       startYear={1996}
                       endYear={2001}
                       schoolName="BSC in Chemical Engineering"
                       schoolDescription="Addis Ababa University, Addis Ababa, Ethiopia "
                        />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={95}
                    />
                    <Skills
                      skill="React"
                      progress={75}
                      />


          </Cell>
          <Cell className = "footer" col ={12}>
            <Footer />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
