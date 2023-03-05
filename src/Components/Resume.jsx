import React from 'react';
import Footer from './Footer';
import ReactPDF from '@react-pdf/renderer';

const Resume = () => {
    // return resume as pdf
    return (
        <><div className='resuma'>
            <br></br>
            <h1 className='h4New'>Resume</h1>
            <div className="row2">
                <div className="col2">
                    <h2>Education</h2>
                    <h3>University of Illinois Urbana-Champaign, Grainger Engineering</h3>
                    <p>Graduation Date: May 2025</p>
                    <p>Major: Computer Science</p>
                    <p>Minor: Informatics</p>
                </div>
                </div>
             <div className='row2'>   
                <div className="col2">
                    <h2>Experience</h2>
                    <h3>ServiceNow</h3>
                    <p>Software Engineering Intern</p>
                    <p>May 2022 - August 2022</p>
                    <p>San Diego, CA</p>
                    <li>Utilized breakpoints to identify user actions on ServiceNow framework, creating 15 marks using javascript and a internal Databroker API to send network calls when specific actions were taken</li>
                    <li>Developed a subscriber using java that collected and categorized over 1,000 marks, providing insights into user behavior and enhancing platform understanding for engineers</li>
                </div>
            </div>
            <div className='row2'>
                <div className="col2">
                    <h2>Involvement</h2>
                </div>
                
            </div>
            

        </div></>

    )
}
export default Resume;