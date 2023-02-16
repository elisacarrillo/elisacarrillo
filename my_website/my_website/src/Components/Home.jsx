import { TypeAnimation } from 'react-type-animation';
import '../index.css';
import React from 'react'
import Sparkle from 'react-sparkle'
import homephoto from '../coolphoto.png'

const Home = () => {
  function goToBlog() {
    window.location.href = "/blog";
  }
  return (
    <div className='home'>
    
      <TypeAnimation
      sequence={[
        1000,
        '\0Hello Earth Creatures', // Types 'One'
        2000, // Waits 1s
        '\0My name is Elisa Carrillo', // Deletes 'One' and types 'Two'
        // 10000,
        2000,
        
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '10em', cursor: false , fontFamily: 'Myfont', color: 'dark pink'}}
    />
    <div className = 'imagez'>
      <Sparkle/>
      <img className = 'inner' src={homephoto} alt='logo' />
    </div>
    
    <div className='container'>
      <div class='row'>
        <div class='col-sm' onClick={goToBlog}>Blog</div>
        <div class='col-sm'>Projects</div>
        <div class = 'col-sm'>Resume</div>
        <div class='col-sm'>Contact Me</div>
      </div>
    </div>
    </div>
  )
};
export default Home;