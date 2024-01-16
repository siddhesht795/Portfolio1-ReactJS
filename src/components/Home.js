import React from 'react'
import "./Home.css"
import home from "../images/home3.png"
import down from "../images/Downward.png"

export default function Home() {
  return (
    <div>
      <div className="container1">
        <p className="content1">
          I create <span className="playful">playful</span>
          <br />experiences.
        </p>
        <div className="image-2">
          <img src={home} className="image-2-pic" alt="Playful Experiences" />
        </div>
      </div>

      <div className="container2">
        <p id="st">Siddhesh Todi/Student</p>
      </div>

      <div className="container3">
        <p className="proj">Projects</p>
        <p className="dwn">
          <a href=".myProj">
            <img src={down} alt="Downward Arrow" />
          </a>
        </p>
      </div>
    </div>
  );
};