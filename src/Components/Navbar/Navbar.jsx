import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="vertical-navbar">
      <div className="vertical-item">
        <a href="/">About</a>
      </div>
      <div className="vertical-item">
        <a href="/">Experiance</a>
      </div>
      <div className="vertical-item">
        <a href="/">Projects</a>
      </div>
      <div className="vertical-item">
        <a href="/">Certifications</a>
      </div>
      <div className="vertical-item">
        <a href="/">Contact</a>
      </div>
    </div>
  );
}
