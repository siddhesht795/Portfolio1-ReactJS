import React from 'react';
import "./Navbar.css"
import gh from "../images/Vector.png"
import lin from "../images/lin.png"
import resume from "../pdf/Siddhesh Todi.pdf"

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navb logo">
            <span className="s">S</span>
            <span className="t">T</span>
        </div>
      
        <div className="navb empty"></div>
        <div className="navb resume">
            <a href={resume} style={{ color: 'white', textDecoration: 'none' }}>Resume</a>
        </div>
        
        <div className="navb gh">
            <a href="https://github.com/siddhesht795">
                <img src={gh} alt="GitHub" />
            </a>
        </div>
      
        <div className="navb lin">
            <a href="https://www.linkedin.com/in/siddhesh-todi-62466828b/">
                <img src={lin} alt="LinkedIn" />
            </a>
        </div>
    </div>
  );
};