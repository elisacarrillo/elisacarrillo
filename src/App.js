import logo from './logo.svg';
import './App.css';


// import { Router } from '@reach/router';
// import Button from 'react-bootstrap/esm/Button';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Components/Home';
import Blog from './Components/Blog';

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
