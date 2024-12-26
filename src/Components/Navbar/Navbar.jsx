import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="vertical-navbar">
      <div className="vertical-item">
        <a href="/">Home</a>
      </div>
      <div className="vertical-item">
        <a href="/">Services</a>
      </div>
      <div className="vertical-item">
        <a href="/">About</a>
      </div>
      <div className="vertical-item">
        <a href="/">Contact</a>
      </div>
    </div>
  );
}
