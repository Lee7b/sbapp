import React from 'react';
import { Element } from 'react-scroll'

class About extends React.Component { 
    render () {
        return (
          <div>
            <Element name="about" className="element" />
            <div id="aboutme" className="blue-grey darken-4" style={{marginBottom:"50px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <h2 className="text-center"><strong>About me</strong></h2>
                            <img src="img/code1.svg" style={{float:"left", width:"300px", height:"auto", paddingRight:"30px"}}></img>
                                I am currently a mainframe systems programmer, specializing in IBM zEnterprise systems. 
                                I am also a full stack developer when I'm not working on mainframes. That is my true passion (wink wink).
                                I have a computer science background and a passion for programming, problem solving, and learning!
                                The languages that I use the most on the job right now are JCL (Job Control Language), 
                                Assembler, COBOL, and a little bit of Java. I also use Unix commands a fair bit. My favorite 
                                language to use on my personal projects is JavaScript! I love learning new tools and frameworks
                                that can help make me a better programmer! My plan is to keep working on this website 
                                so I can use it as a gauge to track my progress and skill development. Thanks for
                                checking me out!       
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default About;