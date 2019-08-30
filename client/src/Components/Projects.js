import React from 'react';
import { MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdbreact';
import { Element } from 'react-scroll'

class Projects extends React.Component {
    render () {
    return (
        <div className="projects container" style={{overflowX:"hidden", overflowY:"hidden"}}>
          <Element name="projects" className="element" />
          <h1 className="text-center">Projects</h1>
          <MDBRow>
              <MDBCol className="d-flex justify-content-center" data-aos="fade-down-right">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>sbappv3</strong></MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText>My personal website. ReactJS front-end with node/express back-end. Much better than the last one!</MDBCardText>
                  <MDBBtn color="dark" href="https://github.com/Lee7b/sbappv3">View Project</MDBBtn>
                  <MDBBtn color="dark">View Live Demo</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>

              <MDBCol className="d-flex justify-content-center" data-aos="fade-down-left">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>sbappv2</strong></MDBCardHeader>
                <MDBCardBody>
                  <MDBCardText>My personal website built with HTML/CSS/JS.</MDBCardText>
                  <MDBBtn color="dark" href="https://github.com/Lee7b/lee7b.github.io">View Project</MDBBtn>
                  <MDBBtn color="dark" href="https://sbappv2.herokuapp.com/">View Live Demo</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>
          </MDBRow>

          <MDBRow>
              <MDBCol className="d-flex justify-content-center" data-aos="fade-up-right">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>SBX Photography</strong></MDBCardHeader>
                <MDBCardBody>             
                  <MDBCardText>Photography site template built with ReactJS</MDBCardText>
                  <MDBBtn color="dark">View Project</MDBBtn>
                  <MDBBtn color="dark" href="https://sbxphotoapp.herokuapp.com/">View Live Demo</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>

              <MDBCol className="d-flex justify-content-center" data-aos="fade-up-left">
              <MDBCard style={{width:"500px"}}>
                <MDBCardHeader><strong>Rock paper scissors game</strong></MDBCardHeader>
                <MDBCardBody>                 
                  <MDBCardText>Rock paper scissors game built with ReactJS</MDBCardText>
                  <MDBBtn color="dark" href="http://sbreactapp.herokuapp.com/rpsgame">View Project</MDBBtn>
                </MDBCardBody>
              </MDBCard>
              </MDBCol>
          </MDBRow>
        </div>
    )
  }
}

export default Projects;