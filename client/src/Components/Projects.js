import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardTitle, MDBCardText, MDBRow, MDBCol} from 'mdbreact';
import { Element } from 'react-scroll'

class Projects extends React.Component {
    render () {
    return (
        <div className="projects">
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

          
          {/* <div className="container" data-aos="fade-right" data-aos-duration="3000"> 
              <h1 className="text-center">Projects</h1>
              <MDBRow>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">SamBurkett.me (v2)</h5>
                        <p className="card-text">My personal portfolio website version 2</p>
                        <a href="https://github.com/Lee7b/lee7b.github.io" className="btn btn-mdb-color">View Project</a>
                        <a href="http://samburkett.me" className="btn btn-mdb-color">View Live Demo</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">SamBurkett.me (v1)</h5>
                        <p className="card-text">My personal portfolio website version 1</p>
                        <a href="http://www.samburkett.me" className="btn btn-mdb-color">View Project</a>
                        <a href="https://sbreactapp.herokuapp.com/" className="btn btn-mdb-color">View Live Demo</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">SBX Photography</h5>
                          <p className="card-text">Sample photography site</p>
                          <a href="https://sbxphotoapp.herokuapp.com/" className="btn btn-mdb-color">View Project</a>
                          <a href="https://sbxphotoapp.herokuapp.com/" className="btn btn-mdb-color">View Live Demo</a>
                        </div>
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">New Project</h5>
                          <p className="card-text">New project will go here</p>
                          <a href="#" className="btn btn-mdb-color">View Project</a>
                        </div>
                      </div>
                  </div>
                  </MDBRow>
          </div> */}
        </div>
    )
  }
}

export default Projects;