import React from 'react';
import Nav from '../Components/Nav';
import Intro from '../Components/Intro';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import { Element } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/styles.css';

class Home extends React.Component {
  super(props) {
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
    render () {
    return (
        <div>
          <Element name="home" className="element" />
          <Nav />
          <Intro />
          <About />
          <div className="container"> {/* Put the skills/projects/contact sections in container div */}
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
        
    )
  }
}

export default Home;