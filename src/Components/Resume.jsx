import React from 'react';
import Footer from './Footer';
import ReactPDF from '@react-pdf/renderer';

const Resume = () => {
    // return resume as pdf
    return (
        <><div className='resuma'>
            <br></br>
            <h1 className='h1New'>Resume</h1>
            {/* <br></br> */}
            <object width="100%" height="100vh" data="https://drive.google.com/uc?export=view&id=1--13rtLh0ZaTPUOQkylvyurMnOGrZw2e" className="resume" />
            {/* <ReactPDF
        file={{
            url: "https://drive.google.com/uc?export=view&id=1--13rtLh0ZaTPUOQkylvyurMnOGrZw2e"
        }}
        /> */}

        </div><Footer /></>

    )
}
export default Resume;