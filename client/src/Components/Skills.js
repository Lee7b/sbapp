import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer, MDBIcon, MDBRow } from "mdbreact";


class Skills extends React.Component {
    render() {
        return (
            <div id="skills" style={{paddingBottom:"50px"}}>
            <MDBContainer>
                <h1 className="text-center">Skills</h1>
                <MDBRow>
                <MDBListGroup data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" style={{ width: "70rem" }}>
                    <MDBListGroupItem className="newactive"><MDBIcon icon="code" className="pr-3"/>Languages</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="java" className="pr-3"/>Java</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="js" className="pr-3"/>JavaScript</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="chevron-right" className="pr-3"/>C++</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="python" className="pr-3"/>Python</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="node-js" className="pr-3"/>NodeJS</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="html5" className="pr-3"/>HTML/CSS</MDBListGroupItem>
                </MDBListGroup>
                </MDBRow>
                <br />
                <MDBRow>
                <MDBListGroup data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" style={{ width: "70rem" }}>
                <MDBListGroupItem className="newactive"><MDBIcon icon="code" className="pr-3"/>Frameworks</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="node-js" className="pr-3"/>ExpressJS</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="react" className="pr-3"/>ReactJS</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="angular" className="pr-3"/>Angular</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="chevron-right" className="pr-3"/>Django</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="bootstrap" className="pr-3"/>Bootstrap</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="database" className="pr-3"/>MongoDB</MDBListGroupItem>
                </MDBListGroup>
                </MDBRow>
                <br />
                <MDBRow>
                <MDBListGroup data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" style={{ width: "70rem" }}>
                <MDBListGroupItem className="newactive"><MDBIcon icon="code" className="pr-3"/>My Toolkit</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="laptop-code" className="pr-3"/>Visual Studio</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="laptop-code" className="pr-3"/>Eclipse</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="laptop-code" className="pr-3"/>IntelliJ</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="laptop-code" className="pr-3"/>Git/GitHub</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon icon="laptop-code" className="pr-3"/>Postman</MDBListGroupItem>
                    <MDBListGroupItem><MDBIcon fab icon="linux" className="pr-3"/>Linux</MDBListGroupItem>
                </MDBListGroup>
                </MDBRow>
            </MDBContainer>
            </div>
        );
    }
};

export default Skills;