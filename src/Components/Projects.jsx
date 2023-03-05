import React from 'react';
import Footer from './Footer';
import '../index.css';
const Projects = () => {
    return (<>
        <div className='projects'>
            <h1 className='h4New'>Projects</h1>
            {/* <div class="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                
            </div>
            <div class="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
     
            <div class="row2">
                <div class="col2">
                    <div class="card2">
                    <div class="card-body">
                        <div className='leftside'>
                        <h3 class="card-title">Oracle of Artists</h3>
                        <br></br>
                        <p class="card-text">Collaborated with a team of three to develop a project based on the six degrees of separation concept, using a dataset of over 1.2 million songs from Spotify. </p>
                        <p class = "card-text">Built an algorithm using A* to find the shortest path of collaborations between two input artists, and created a feature that allows users to input at least three artists to generate a playlist showcasing their connections. </p> 
                        <p class = "card-text">Additionally, implemented a minimum spanning tree display feature to showcase the relationships between artists. </p>
                        
                         </div>
                         <div className='rightside'>
                                <a href="https://github.com/elisacarrillo/Oracle-of-Artists"  class="btn btn-light" >Github Link</a>
                                {/* <br></br> */}
                                <a href="/oracle-of-artists" class="btn btn-light">Inside the project</a>
                        </div>
                    </div>
                    </div>
                </div>
                
                </div>
                {/* <br></br> */}
      
            <div class="row2">
                <div class="col2">
                    <div class="card2">
                    <div class="card-body">
                        <div className='leftside'>
                        <h3 class="card-title">Career Advancement Exchange</h3>
                        <br></br>
                        
                        <p class="card-text">Led the development and launch of Career Advancement Exchange, a venture that creates personalized portfolios for individuals from underrepresented communities to showcase their skills and experiences to potential employers</p>
                        <p class="card-text">Designed and implemented a platform for users to request personalized websites to showcase their abilities</p>
                        <p class="card-text">Managed a team of developers and provided ongoing support and guidance for job search and interview preparation</p>
                        <p class="card-text">Developed innovative approaches to maximize employment based on skill level and break down biases to provide equal opportunities for all individuals, regardless of their background.</p>
                        </div>
                        <div className='rightside'>
                        <a href="#" class="btn btn-light">Github Link</a>
                        <a href="#" class="btn btn-light">Go To The Platform</a>
                        <a href="#" class="btn btn-light">Inside the project</a>
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        
            <div class="row2">
                <div class="col2">
                    <div class="card2">
                    <div class="card-body">
                        <div className='leftside'>
                        
                        <h3 class="card-title">Coding For Change</h3>
                        <br></br>
                        <p class="card-text">Developed an educational application using Golang and Gin, aimed at teaching coding while also promoting social impact in the community. The application allowed users to learn coding concepts such as if loops while also creating a program that sorted different charities based on user preferences. The project aimed to inspire those with a passion for social good to engage with computer science and make a positive impact on their community</p>
                        <p class="card-text">Won First Place and Team MVP at VMWare Codehouse Hackathon</p>
                        </div>
                        <div className='rightside'>
                        <a href="#" class="btn btn-light">Github Link</a>
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
       </>

    )
}
export default Projects;