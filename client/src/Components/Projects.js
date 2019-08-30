import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdbreact';

class Projects extends React.Component {
    render () {
    return (
        <div id="projects" className="projects container" style={{overflowX:"hidden", overflowY:"hidden", paddingBottom:"50px"}}>
          <h1 className="text-center">Projects</h1>
          <div data-aos="fade-down-right">
          <MDBRow>
              <MDBCol className="d-flex justify-content-center">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>sbappv3</strong></MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText>
                    My personal website. ReactJS front-end with node/express back-end. Much better than the last one! I also have a pure HTML/CSS/JS version.
                    SamBurkett.me does not currently support secure connection due to being hosted on Heroku free. I will link the secure connection link below.
                  </MDBCardText>
                  <MDBBtn color="dark" href="https://github.com/Lee7b/sbappv3">View Project</MDBBtn>
                  <MDBBtn color="dark" href="https://sbpersonal.herokuapp.com">View Live Demo</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>

              <MDBCol className="d-flex justify-content-center">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>sbappv1</strong></MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText>This was my first website that I created. ReactJS front-end with node/express back-end. Has a MongoDB database. Less fancy.</MDBCardText>
                  <MDBBtn color="dark" href="https://github.com/Lee7b/sbappold">View Project</MDBBtn>
                  <MDBBtn color="dark" href="https://sbreactapp.herokuapp.com/">View Live Demo</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>
          </MDBRow>

          <MDBRow>
              <MDBCol className="d-flex justify-content-center">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>MEAN Stack Auth App</strong></MDBCardHeader>
                <MDBCardBody>             
                  <MDBCardText>MEAN Stack Authentication App</MDBCardText>
                  <MDBBtn color="dark" href="https://github.com/Lee7b/MEANStackAuthApp">View Project</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>

              <MDBCol className="d-flex justify-content-center">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>Java Flappy Bird Clone</strong></MDBCardHeader>
                <MDBCardBody>                 
                  <MDBCardText>Flappy bird clone written in Java. This was a project I did while I was in school.</MDBCardText>
                  <MDBBtn color="dark" href="https://github.com/Lee7b/javaFlappyGame">View Project</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>
          </MDBRow>
          </div>
        </div>
    )
  }
}

export default Projects;