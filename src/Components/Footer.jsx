import React from 'react';
const footer = () => {
    const goHome = () => {
        window.location.href = "/";
    }
    
    const goToBlog = () => {
        window.location.href = "/blog";
    }
    const goToProjects = () => {
        window.location.href = "/projects";
    }
    const goToResume = () => {
        window.location.href = "/resume";
    }
    const goToContact = () => {
        window.location.href = "/contact";
    }
    // TODO make footer have worlds
    return (

        <footer>
            <div className="footer">
                <div className="cont2">
                <div className="row">
                    <p className="col-md" onClick={goHome}>Home</p>
                    <p className="col-md">|</p>
                    <p className="col-md" onClick={goToBlog}>Blog</p>
                    <p className="col-md">|</p>
                    <p className="col-md" onClick={goToProjects}>Projects</p>
                    <p className="col-md">|</p>
                    <p className="col-md" onClick = {goToResume}>Resume</p>
                    <p className="col-md">|</p>
                    <p className="col-md" onClick={goToContact}>Contact Me</p>
                </div>
            </div>
            </div>
        </footer>
    );
    }
    export default footer;