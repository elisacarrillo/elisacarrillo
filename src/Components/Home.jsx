import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React from "react";
import { render } from "react-dom";
import { Canvas } from "react-three-fiber";

import { Shadow, OrthographicCamera, OrbitControls, Html } from '@react-three/drei'
import { Text } from '@react-three/drei'






//
import { TypeAnimation } from 'react-type-animation';
import '../index.css';
// import React from 'react'
// import Heart from "react-heart";
import Sparkle from 'react-sparkle'
import { Link } from 'react-router-dom';
// import { useRef } from 'react';
import { useState } from 'react';


// import MyFont from "../index.css";
// import "react-dat-gu÷÷i/build/react-dat-gui.css";


// https://sean.brunnock.com/SVG/SVGPathGenerator/
// https://codesandbox.io/embed/troika-3d-text-via-react-three-fiber-ntfx2?fontsize=14
// https://sean.brunnock.com/SVG/SVGPathGenerator/
// https://codesandbox.io/embed/troika-3d-text-via-react-three-fiber-ntfx2?fontsize=14
function SphereBlog({ children }) {

  return (
    <mesh>
      
      <sphereBufferGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"rgba(255, 9, 185, 0.971)"} />
      <Html distanceFactor={10} scaleFactor={10}>
        <div className="cont">
          <div className="text3">{"Blog"}</div>
        </div>
        
      </Html>
    </mesh>
  )
}
function SphereProjects({ children }) {

  return (
    <mesh>
      
      <sphereBufferGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"rgba(255, 9, 185, 0.971)"} />
      <Html distanceFactor={10} scaleFactor={10}>
        <div className="cont">
          <div className="text2">{"Projects"}</div>
        </div>
      </Html>
    </mesh>
  )
}
function SphereContactMe({ children }) {

  return (
    <mesh>
      
      <sphereBufferGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"rgba(255, 9, 185, 0.971)"} />
      <Html distanceFactor={10} scaleFactor={10}>
        <div className="cont">
          <div className="text2">{"Contact"}</div>
        </div>
      </Html>
    </mesh>
  )
}
function SphereResume({ children }) {

  return (
    <mesh>
      
      <sphereBufferGeometry args={[5, 24, 24]} />
      <meshStandardMaterial color={"rgba(255, 9, 185, 0.971)"} />
      <Html distanceFactor={10} scaleFactor={10}>
        <div className="cont">
          <div className="text2">{"Resume"}</div>
        </div>
      </Html>
    </mesh>
  )
}
const Home = () => {
  const [active, setActive] = useState(false);
  const [rotation,setRotation] = useState([0, 0, 0, 0]);
  const [opts, setOpts] = useState({
    fontSize: 12,
    color: "#99ccff",
    maxWidth: 300,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "justify",
    materialType: "MeshPhongMaterial"
  });
  function goToProjects() {
    window.location.href = "/projects";
  }
  function animateHeart() {
    setActive(!active);
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
  function scroll() {
    window.scrollTo(0, 1100);
  }

  const onMouseMove = e => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 8,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 8,
      0
    ]);
  };
  return (
    <div className='home'>
      <Sparkle/>
      {/* <br></br> */}
      {/* 3d component */}
 
      
      <div className='title'>
        <span class="alt-text">The Queenellie Orbit</span>
        <span class="full-span">
        <div className='tit' onClick={scroll} >
          {/* <h1 className='h1New'>./The Queenellie Orbit</h1> */}
        <svg  viewBox="0 0 600 600">
          <path id="curve" d="M100,300 C195,339 375,340 500,300" />
          {/* <div className='toTransform'> */}
          <text width="600">
            
            <textPath href="#curve">
             The Queenellie Orbit 
            </textPath>
            
          </text>
          {/* </div> */}
        </svg>
        
        {/* <h1 className = "hTitNew">Hi Im Elisa</h1> */}
        <div className='toType' >
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
         '\0 Click The Worlds Below To Explore',
        // 10000,
        2000,
        
        

        () => {
          console.log('Done typing!'); // Place optional callbacks anywhere in the array
        }
      ]}
      wrapper="div"
      cursor={false}
    //   repeat={Infinity}
      style={{ fontSize: '7vw', cursor: false , fontFamily: 'Myfont', color: '#4c0c35', textShadow: '2px 2px 5px #fe53c5'}}
    /> 
        </div>
        </div>
        </span>

        
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
    <div className='total'>
    {/* <div className='yo'> */}
    {/* <Heart className = "heart" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} />
        <Heart className="heart" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} />
        <Heart className = "heart" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} />
        <Heart className="heart" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} /> */}

    {/* </div> */}
    <div className="row3">
          <div className="sphere" onClick={goToBlog}>
          <Canvas
            style={{ height: 400, width:200 }}
            camera={{ position: [0, 15, 15] }}
            text = "Hello"
            
          >

            <pointLight position={[0, 20, 10]} />
            <SphereBlog />
          </Canvas>
          </div>
          <div className="sphere" onClick={goToProjects}>
          
          <Canvas
          style={{ height: 400, width: 200 }}
          camera={{ position: [0, 15, 15] }}
          text = "Hello"
          
        >
          <pointLight position={[0, 20, 10]} />
          <SphereProjects />
        </Canvas>
        </div>
        <div className='sphere' onClick={goToContact}>
        <Canvas
        style={{ height: 400, width: 200 }}
        camera={{ position: [0, 15, 15] }}
        text = "Hello"
      >
        <pointLight position={[0, 20, 10]} />
        <SphereContactMe />
      </Canvas>
      </div>
      <div className='sphere' onClick={goToResume}>
      <Canvas
            style={{ height: 400, width: 200 }}
            camera={{ position: [0, 15, 15] }}
            text = "Hello"
            
          >
            <pointLight position={[0, 20, 10]} />
            <SphereResume />
          </Canvas>
          </div>
          </div>

        {/* <div style={{ width: "12vw" }}> */}
        
        {/* </div> */}
        
        
      
        {/* <div class='col-sm' onClick={goToBlog} > */}
          {/* Blog</div> */}
        {/* <div onClick={goToBlog} >Blog</div> */}
        {/* <div class='col-sm' onClick={goToProjects} onTouchStart={animateHeart}>Projects</div>
        <div class = 'col-sm' onClick={goToResume}>Resume</div>
        <div class='col-sm' onClick = {goToContact}>Contact Me</div> */}
        
   
    {/* <div className='right'> */}
    {/* <Heart className = "heart2" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} />
        <Heart className="heart2" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} />
        <Heart className = "heart2" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} />
        <Heart className="heart2" isActive={active} onClick={() => setActive(!active)} activeColor = "green" inactiveColor = "rgba(255, 9, 185, 0.971)" animationTrigger = "hover" animationScale = {1.5} /> */}
        {/* </div> */}
    </div>
    </div>
  )
};
export default Home;