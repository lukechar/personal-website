import React from 'react';
import GithubCard from '../components/GithubCard';

const Projects = (props) => {
    return(
        <div className="container">
            <h3>Personal Projects</h3>
            <div className="row">
                <div className="col s12 m6">
                    <GithubCard image="../img/baking.jpg" title="Ingredient Weight Calculator" content="Calculator for determining the weight of common cooking/baking ingredients. Built with Django for the backend and a simple Twitter Bootstrap frontend." githubLink="https://github.com/lukechar/ingredient_weight_calculator/" appLink="https://www.lukeacharbonneau.com/ingredient_weight_calculator/"></GithubCard>
                </div>
                <div className="col s12 m6">
                    <GithubCard image="../img/raspi.png" title="Pi Video Stream" content="Pi-Video-Stream is a PiCamera tool that consists of a server (stream.py), which provides live video frames taken by any PiCamera via a http server running on a Raspberry Pi (of any flavor), and a client (streamView.py), which provides a simple PyQt GUI for connecting to and viewing the stream retrieved from the http server." githubLink="https://github.com/lukechar/Pi-Video-Stream"></GithubCard>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6">
                    <GithubCard image="../img/skier.jpg" title="Snowfall API" content="The snowfall_api scrapes web results with the Python Beautiful Soup to get the latest snow and weather conditions for various ski resorts in the US + Canada. The API runs on a simple Flask server and endpoints are accessible with the URI format: '/snow_report/[resort name]'" githubLink="https://github.com/lukechar/snowfall_api/"></GithubCard>
                </div>
                <div className="col s12 m6">
                    <GithubCard image="../img/snowfall_screenshot.jpg" title="Snowfall Phone App" content="Phone app that consumes the snowfall_api to provide snowfall reports and forecasts for ski areas. Built with Flutter." githubLink="https://github.com/lukechar/snowfall/"></GithubCard>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6">
                    <GithubCard image="../img/twilight_struggle.jpg" title="Twilight Struggle Scorer" content="Uses The Python OpenCV library to process an image of a Twilight Struggle game board and provide the current score for every region. This is still a work in progress, but suggestions are welcome." githubLink="https://github.com/lukechar/Twilight-Struggle-Scorer/"></GithubCard>
                </div>
                <div className="col s12 m6">
                    <GithubCard image="../img/polygons_darken.png" title="My Personal Website" content="My personal website. Created from scratch with React. Feel free to use as a template for your React site if you like it. Licensed under the GPLv3. Attribution / linking to my site is appreciated, but not required." githubLink="https://github.com/lukechar/personal-website/"></GithubCard>
                </div>
            </div>
        </div>
    );
};

export default Projects;