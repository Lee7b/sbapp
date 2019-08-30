import React from 'react';
import Typist from 'react-typist';
import Typewriter from 'typewriter-effect';


class Intro extends React.Component { 
    render () {
        return (
          <section>
            <header>
              <div className="overlay"></div>
              <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="./img/galaxy2.mp4" type="video/mp4" />
              </video>
                <div className="container h-100">
                  <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                      <h1>
                        <Typewriter options={{
                          strings: ['Hello', "I'm Sam Burkett", 'I love coding!'],
                          autoStart: true,
                          loop: true,
                          }}
                         />
                        {/* <Typist>
                          <span className="my-custom-class">Hello</span>
                          <Typist.Delay ms={500} />
                          <br />
                          <div className="container">
                            <p> My name is Sam Burkett </p>
                          </div>
                          I am an application developer
                        </Typist> */}
                      </h1>
                    </div>
                  </div>
              </div>
             </header>
          </section>
        )
    }
}

export default Intro;