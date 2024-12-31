import React from 'react';
import "./HomeContent.css";
import profilePic from './bg-pic.jpg';

export default function HomeContent() {
  return (
    <div className="HomeContent">
      <div className="card">
        <div className="left-section">
          <div className="profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
          <h2 className="name">Arkoprovo Ghosh</h2>
          <hr></hr>
          <h3 className="designation">Frontend Developer</h3>
          <p>Javascript ES6 , ReactJS</p>
        </div>
        <div className="right-section">
          <h1>Hello, I'm Arkoprovo</h1>
          <p className="intro">I'm a Frontend Developer</p>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Let's connect!
          </p>
          <button className="contact-btn">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
