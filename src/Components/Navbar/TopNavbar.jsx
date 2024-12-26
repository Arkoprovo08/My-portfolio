import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faLeanpub } from "@fortawesome/free-brands-svg-icons"; // LeetCode isn't in FontAwesome, using an alternative icon
import "./TopNavbar.css";

const TopNavbar = () => {
  return (
    <nav className="top-navbar">
      <div className="left-icons">
        <a href="https://www.linkedin.com/in/arkoprovo-ghosh-36137a206/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="https://github.com/Arkoprovo08" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://leetcode.com/u/arkoprovoghosh17/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLeanpub} className="icon" />
        </a>
      </div>
      <div className="right-resume">
        <a
          href="https://drive.google.com/drive/folders/1vbegy09LddVB4xQA_q_-NWoqJZVTErPd"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default TopNavbar;
