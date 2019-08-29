import React from 'react';
import {MDBRow} from 'mdbreact';
import { Element } from 'react-scroll'

class Projects extends React.Component {
    render () {
    return (
        <div>
          <Element name="projects" className="element" />
          <div className="container" data-aos="fade-right" data-aos-duration="3000"> 
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
          </div>
        </div>
    )
  }
}

export default Projects;