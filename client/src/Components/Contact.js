import React from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";

class Contact extends React.Component {
    render () {
    return (
        <section id="contact">
            <MDBContainer className="mt-5 text-center">
                {/* <div data-aos="zoom-in"> */}
                    <MDBRow>
                        <MDBCol>
                        <MDBJumbotron className="text-center">
                            <MDBCardTitle className="card-title h4 pb-2">
                            <strong>Get in touch</strong>
                            </MDBCardTitle>

                            <MDBCardImage
                            src="./img/maccoding.jpg"
                            className="img-fluid"
                            />
                            <MDBCardBody>
                                <MDBCardTitle className="indigo-text h5 m-4">
                                    Social Media and Contact information
                                </MDBCardTitle>
                                <MDBCardText>
                                    You can reach out to me through social media or email. My email is sburk377@gmail.com. 
                                    I will respond as soon as possible. Thank you!
                                </MDBCardText>

                                <MDBCol className="d-flex justify-content-center mt-4" md="12">
                                    <MDBCol md="3" className="d-flex justify-content-around">
                                    <a href="https://www.linkedin.com/in/samuel-burkett/"><MDBIcon
                                        fab
                                        icon="linkedin-in"
                                        className="grey-text"
                                        size="lg"
                                    /></a>
                                    <a href="https://www.facebook.com/sam.burkett.71"><MDBIcon
                                        fab
                                        icon="facebook-f"
                                        className="grey-text"
                                        size="lg"
                                    /></a>
                                    <a href="https://www.github.com/Lee7b"><MDBIcon
                                        fab
                                        icon="github"
                                        className="grey-text"
                                        size="lg"
                                    /></a>
                                    </MDBCol>
                                </MDBCol>
                            </MDBCardBody>
                        </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                {/* </div> */}
            </MDBContainer>
        </section>
    )
  }
}

export default Contact;