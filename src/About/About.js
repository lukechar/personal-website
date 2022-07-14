import React from 'react';

const About = (props) => {
    return(
        <div className="container">
            <h3>About Luke</h3>
            <p>
                I graduated from the University of Colorado in 2016, where I completed both my B.A. and M.S. in Physics. My research concentration in graduate school was in experimental ultrafast optics, which deals with optical pulses which are extremely temporally short (shorter than 10<sup>-12</sup> seconds).
            </p>
            <p>
                After completing my studies at the University of Colorado, I worked in the optics industry as the Head of Product Development at <a target="_blank" href="https://crunchtec.com/" rel="noopener noreferrer">Crunch Technologies</a> in Boulder, Colorado. designing and building software for use by both optics production facilities and research institutions. Since deciding to focus on software, I have been able to leverage my graduate studies experiences as an optical hardware developer and researcher to design and develop user-friendly tools utilized by research institutions across the globe. 
            </p>
            <p>
                I am currently helping to build and maintain data processing pipelines for NASA missions at the Laboratory for Atmospheric and Space Physics (<a target="_blank" href="https://lasp.colorado.edu/" rel="noopener noreferrer">LASP</a>). The primary mission that I work on is known as the Total and spectral Solar Irradiance Sensor (<a target="_blank" href="https://www.nasa.gov/content/goddard/tsis-1-mission-overview/" rel="noopener noreferrer">TSIS-1</a>), which consists a pair of instruments mounted on the International Space Station that perform daily measurements of the Sun's activity. These measurements are then processed and corrected by engineers at LASP (including myself) into scientific data products that provide climate researchers with critical insights into the Sun's influence on Earth's various systems. Additionally, I offer freelance coding services in my spare time under the Colorado-registered Castle Scientific LLC.             
            </p>
            <p>
                My hobbies outside of coding include hiking, skiing, backpacking, playing piano and reading about history - in particular, my favorite topics right now are the late Roman Republic and the Cold War.
            </p>
        </div>
    );
};

export default About;
