import React from 'react';
import { Element } from 'react-scroll'


class Contact extends React.Component {
    render () {
    return (
        <div>
            <Element name="contact" className="element" />
            <div className="text-center py-5">
            <h1>Get in touch</h1>
            </div>

            <div className="container">
                <div style={{fontSize:"2rem"}}>
                    <div><a href="#"><i className="fab fa-facebook-f fa-fw black-text"></i> facebook</a></div>
                    <div><a href="https://www.linkedin.com/in/samuel-burkett/"><i className="fab fa-linkedin fa-fw black-text"></i> linkedin</a></div>
                    <div><a href="https://www.github.com/Lee7b"><i className="fab fa-github fa-fw black-text"></i> github</a></div>
                    <div><a href="mailto:sburk377@gmail.com"><i className="fas fa-envelope fa-fw black-text"></i> email - sburk377@gmail.com</a></div>
                </div>
            </div>
        </div>
    )
  }
}

export default Contact;