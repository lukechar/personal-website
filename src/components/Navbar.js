import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div>
            <ul id="slide-out" className="sidenav sidenav-fixed grey lighten-1 sidenav-custom">
                <li>
                    <div className="user-view">
                        <a href="/">
                            <a><img className="circle" id="avatar" src="/img/luke_pass.jpg" /></a>
                            <a><span className="white-text name">Luke Charbonneau</span></a>
                            <a><span className="white-text job-title">Software Engineer</span></a>
                        </a>
                    </div>
                </li>
                <li><NavLink to='/about'><i className="material-icons" style={{color: "darkcyan"}}>person</i>About</NavLink></li>
                <li><NavLink to='/projects'><i className="material-icons" style={{color: "crimson"}}>code</i>Projects</NavLink></li>
                <li><NavLink to='/research'><i className="material-icons" style={{color: "forestgreen"}}>science</i>Research</NavLink></li>
                <li><a href="https://luke-charbonneau-personal-website-files.s3-us-west-1.amazonaws.com/Resume_Luke_Charbonneau.pdf" target="_blank" type="application/pdf" rel="noopener noreferrer"><i className="material-icons" style={{color: "chocolate"}}>work</i>Resume</a></li>
                {/* <li><a href="/documents/Resume_Luke_Charbonneau.pdf" target="_blank" rel="noopener noreferrer"><i className="material-icons" style={{color: "chocolate"}}>work</i>Resume</a></li> */}
                <li><a href="https://github.com/lukechar" target="_blank" rel="noopener noreferrer"><i className="material-icons" style={{color: "deeppink"}}>device_hub</i>Github Profile</a></li>
                <li><a href="https://www.linkedin.com/in/lukeacharbonneau/" target="_blank" rel="noopener noreferrer"><i className="material-icons" style={{color: "navy"}}>domain</i>LinkedIn Profile</a></li>
                {/* <li><div className="divider"></div></li> */}
                <li><a className="subheader">Contact</a></li>
                <li id="email-address"><a href="mailto:charbonneau.luke@gmail.com"><i className="material-icons" style={{color: "maroon"}}>mail</i>charbonneau.luke@gmail.com</a></li>
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger left hide-on-large-only"><i className="material-icons">menu</i></a>
        </div>
    )
};

export default Navbar;