import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import headerimage from './img/NavBar_landing_page.png';
import socialmediatop from './img/SM_TopGroup.png';
import socialmediabottom from './img/SM_BottomGroup.png';
import createeventbuton from './img/Create_event_button.png';
import leftscreen from './img/ProductImage_Left.png';
import middlescreen from './img/ProductImage_Middle.png';
import rightscreen from './img/ProductImage_Right.png';
import Home from './App';
import NewEvent from './Event';



import './App.css';


function App() {
  //let navigate = useNavigate();
  const newEvent = () => {
    let path = 'create.js';
    //navigate(path);
    console.log('New event clicked!!!!!!');
  }
  return (
    <Router>
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/event' element={<NewEvent/>} />
        
    </Routes>
    </Router>


  );
}

export default App;
