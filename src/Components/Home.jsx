import { TypeAnimation } from 'react-type-animation';
import '../index.css';
import React from 'react'
import Sparkle from 'react-sparkle'
import homephoto from '../coolphoto.png'

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
  return (
    <div className='home'>
      <Sparkle/>
      <div className='title'>
      <TypeAnimation
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
    />
    </div>
    {/* <div className='title2'>
      <p className='title2'>Hello Earthlings! My name is Elisa Carrillo</p>
    </div> */}
    <div className = 'imagez'>
      
      <img className = 'inner' src={homephoto} alt='logo' />
    </div>
    
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