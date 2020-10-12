import React from 'react';

const About = (props) => {
    return(
        <div className="container">
            <h3>About Luke</h3>
            <p>
                I graduated from the University of Colorado in 2016, where I completed both my B.A. and M.S. in Physics. My research concentration in graduate school was in experimental ultrafast optics, which deals with optical pulses which are extremely temporally short (shorter than 10<sup>-12</sup> seconds).
            </p>
            <p>
                Since completing my studies at the University of Colorado, I have worked in the optics industry designing and building software for use by both optics production facilities and research institutions. Since deciding to focus on software, I have been able to leverage my graduate studies experiences as an optical hardware developer and researcher to design and develop user-friendly tools utilized by research institutions across the globe. In particular, I am interested in machine vision and image processing, as well as the utilization of machine learning tools that enable computers to preform tasks that are difficult to automate with traditional coding approaches (e.g. self-driving cars, optical character recognition, electronic component analysis, etc). 
            </p>
            <p>
                I am currently employed as the Head of Product Development at <a target="_blank" href="https://crunchtec.com/" rel="noopener noreferrer">Crunch Technologies</a> in Boulder, Colorado. Additionally, I offer freelance coding services in my spare time under the Colorado-registered <a target="_blank" href="https://www.castlescientific.com/" rel="noopener noreferrer">Castle Scientific LLC</a>.             
            </p>
            <p>
                My hobbies outside of coding include hiking, skiing, backpacking, playing piano and reading about history - in particular, my favorite topics right now are the late Roman Republic and the Cold War.
            </p>
        </div>
    );
};

export default About;
