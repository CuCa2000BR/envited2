import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import headerimage from './img/NavBar_landing_page.png';
import socialmediatop from './img/SM_TopGroup.png';
import socialmediabottom from './img/SM_BottomGroup.png';
import createeventbuton from './img/Create_event_button.png';
import leftscreen from './img/ProductImage_Left.png';
import middlescreen from './img/ProductImage_Middle.png';
import rightscreen from './img/ProductImage_Right.png';



import './App.css';


function App() {
  //let navigate = useNavigate();
  const newEvent = () => {
    let path = 'create.js';
    //navigate(path);
    
    console.log('New event clicked!!!!!!');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={headerimage} className="header-image" alt="header-image" />
      </header>

      <div className="main-title">
        Facebook events without Facebook.
      </div>

      <div className="main-text">
        Easily host and share events with your friends across any social media.
      </div>
      <NavLink to="/event"><img src={createeventbuton} className="create-event-button" alt="create-event-button" onClick={newEvent}/></NavLink>

      <img src={leftscreen} className="left-product-image" alt="left-product-image" />
      <img src={middlescreen} className="middle-product-image" alt="middle-product-image" />
      <img src={rightscreen} className="right-product-image" alt="right-product-image" />


      <img src={socialmediatop} className="socialmedia-top" alt="social-media-top-icons" />
      <img src={socialmediabottom} className="socialmedia-bottom" alt="social-media-bottom-icons" />
      
    </div>
  );
}

export default App;
