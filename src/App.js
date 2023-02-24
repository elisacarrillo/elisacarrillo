import logo from './logo.svg';
import './App.css';


// import { Router } from '@reach/router';
// import Button from 'react-bootstrap/esm/Button';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';
import Post from './Components/Post'
import Resume from './Components/Resume';
import Projects from './Components/Projects';

function App() {
  return (
    <div className='background'>

      {/* <Router> 
        <Home path="/home" default/>
        

      </Router> */}
      <Router>
      
      <Routes>
          <Route exact path='/' exact element={<Home />} />
          <Route path='/blog' element = {<Blog />}/>
          <Route path='/blog/:id' element = {<Post />}/>
          <Route path='/resume' element={<Resume/>} />
          <Route path='/projects' element={<Projects/>} />
          {/* <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/sign-up' element={<SignUp/>} /> */}
      </Routes>
      </Router>

    
    </div>
    

   
    
  );
}

export default App;
