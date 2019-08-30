import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends React.Component {
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
            <MDBNavbar color="bg-dark" fixed="top" dark expand="md">
              <MDBNavbarBrand href="/">
                <strong>SB</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <AnchorLink className="nav-link" href="#home">Home</AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink offset="100" className="nav-link" href="#about">About</AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink offset="100" className="nav-link" href="#skills">Skills</AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink offset="100" className="nav-link" href="#projects">Projects</AnchorLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <AnchorLink className="nav-link" href="#contact">Contact</AnchorLink>
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

export default Nav;