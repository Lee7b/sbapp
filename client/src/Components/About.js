import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';

class About extends React.Component { 
    render () {
        return (
          <section id="about" style={{paddingBottom:"50px"}}>
            <div id="aboutme" className="blue-grey darken-4">
                <div className="container">
                    <MDBRow className="d-flex align-items-center py-5"> {/* Vertically center content and add padding to top/bottom */}
                        <MDBCol>
                            <img src="img/code1.svg" alt="AboutMeImage" style={{height:"250px"}}></img>  
                        </MDBCol>
                        <MDBCol>                       
                            <h2 className="text-center"><strong>About me</strong></h2>
                            <p>
                                Hi, I'm Sam. I am from the great state of Arkansas! I'm a huge Razorback fan and I love nature and spending time with friends and family.
                                I am currently a mainframe systems programmer, specializing in IBM zEnterprise systems. 
                                I am also a full stack developer when I'm not working on mainframes. It is my dream to work in the software development/web development field.
                                I have a computer science background and a passion for programming, problem solving, and learning!
                                The languages that I use the most on the job right now are JCL (Job Control Language), 
                                Assembler, and COBOL. My favorite language to use on my personal projects is JavaScript. I also love learning new tools and frameworks
                                that help make me a better programmer! My plan is to keep working on this website so
                                I can use it as a gauge to track my progress and skill development. Thanks for
                                checking me out!      
                            </p>                   
                        </MDBCol>
                    </MDBRow>
                </div>
            </div>
          </section>
        )
    }
}

export default About;