import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import { Link } from 'react-scroll'

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
          <div>
            <MDBNavbar color="bg-dark" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>SB</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <Link className="nav-link" to="home" smooth={true}>Home</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className="nav-link" to="about" smooth={true}>About</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className="nav-link" to="skills" smooth={true}>Skills</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className="nav-link" to="projects" smooth={true}>Projects</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link className="nav-link" to="contact" smooth={true}>Contact</Link>
                  </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav right>
                  <MDBNavItem>
                    <a className="nav-link" href="https://www.linkedin.com/in/samuel-burkett/">
                      <MDBIcon fab icon="linkedin" />
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <a className="nav-link" href="https://www.github.com/Lee7b">
                      <MDBIcon fab icon="github" />
                    </a>
                  </MDBNavItem>
                </MDBNavbarNav>

              </MDBCollapse>
            </MDBNavbar>
          </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;