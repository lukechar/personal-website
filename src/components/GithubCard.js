import React from 'react';

const GithubCard = ({image, title, content, githubLink, appLink}) => {
    let appLinkButton = null;
    if (appLink) {
        appLinkButton = <a href={appLink} target="_blank" rel="noopener noreferrer" className="btn-floating left halfway-fab waves-effect waves-light red darken-2"><i className="material-icons">link</i></a>
    }
    return(
        <div className="card github-card grey lighten-1">
            <div className="card-image">
                <img src={image} />
                <span className="card-title">{title}</span>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn-floating halfway-fab waves-effect waves-light gray"><i className="material-icons">code</i></a>
                {appLinkButton}
            </div>
            <div className="card-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default GithubCard;