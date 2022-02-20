import React, { useState } from 'react';
import headerimage from './img/NavBar_landing_page.png';




import './Event.css';


function Event() {

  const title = "Event Name: ";


  return (
    <div className="App">
      <img src={headerimage} className="header-image" alt="header-image" />
      <div className="insert-picture" align="center"><strong>Insert image</strong></div>

      <div className="event-title">
        {title} <input></input>
      </div>

      <div className="event-start-date">
        Start Date: <input size={8}></input>
        Start Time: <input size={8}></input>
      </div>

      <div className="event-end-date">
        End Date: <input size={8}></input>
        End Time: <input size={8}></input>
      </div>
      
      
    </div>
  );
}

export default Event;
