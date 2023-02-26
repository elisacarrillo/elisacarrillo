import { TypeAnimation } from 'react-type-animation';
import '../index.css';
import React from 'react'
import Sparkle from 'react-sparkle'
import homephoto from '../coolphoto.png'
import { Link } from 'react-router-dom';
import { useRef } from 'react';


const Home = () => {
  function goToProjects() {
    window.location.href = "/projects";
  }
  function goToResume() {
    window.location.href = "/resume";
  }
  function goToContact() {
    window.location.href = "/contact";
  }
  
  function goToBlog() {
    window.location.href = "/blog";
  }
  const myRef = useRef(null);
  function executeScroll() {
    myRef.current.scrollIntoView()
  } 
  function scroll() {
    executeScroll();
  }
  return (
    <div className='home'>
      <Sparkle/>
      {/* <br></br> */}
      
      
      <div className='title'>
        <div className='tit' onClick={scroll}>
        <svg  viewBox="0 0 600 600">
          <path id="curve" d="M100,300 C234,325 389,327 500,300" />
          {/* <div className='toTransform'> */}
          <text width="600">
            
            <textPath href="#curve">
            The Queenellie Orbit
            </textPath>
            
          </text>
          {/* </div> */}
        </svg>
        {/* <h1 className = "hTitNew">Hi Im Elisa</h1> */}
        <div className='toType' ref={myRef}>
        <TypeAnimation
      sequence={[
        2000,
        '\0Beep' , // Types 'One'
        1000,
        '\0Boop' , // Types 'One'
        1000,
        '\0Beep Boop',
        1000,
        '\0 Welcome to my page' ,
        1000,
        '\0 My name is Elisa Carrillo' , // Types 'One'
        
         // Deletes 'One' and types 'Two'
         4000,
         '\0 Click The Links Below To Explore',
        // 10000,
        2000,
        
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '7vw', cursor: false , fontFamily: 'Myfont', color: '#642454', textShadow: '2px 2px 5px#af4092'}}
    /> 
        </div>
        </div>
        
      {/* <TypeAnimation
      sequence={[
        1000,
        '\0Hello Earth Creatures \n My name is Elisa Carrillo' , // Types 'One'
         // Deletes 'One' and types 'Two'
        // 10000,
        2000,
        
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '7vw', cursor: false , fontFamily: 'Myfont', color: 'dark pink'}}
    /> */}
    </div>
    
    {/* <div className='title2'>
      <p className='title2'>Hello Earthlings! My name is Elisa Carrillo</p>
    </div> */}
    {/* <div className = 'imagez'> */}
      {/* <br></br> */}
      {/* <img className = 'inner' src={homephoto} alt='logo' /> */}
      
      {/* <img className = 'inner' src={"https://media1.giphy.com/media/xvZOuJeLij0W9IwCdH/giphy.gif"} alt='logo' /> */}
    {/* </div> */}
    
    <div className='container'>
      <div class='row'>
        <div class='col-sm' onClick={goToBlog}>Blog</div>
        <div class='col-sm' onClick={goToProjects}>Projects</div>
        <div class = 'col-sm' onClick={goToResume}>Resume</div>
        <div class='col-sm' onClick = {goToContact}>Contact Me</div>
      </div>
    </div>
    </div>
  )
};
export default Home;