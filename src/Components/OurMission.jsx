import React from "react";
import "./OurMission.css";
import Blog from "/assets/images/our-mission/Blogs.png";
import Events from "/assets/images/our-mission/Events.png";
import OpenSource from "/assets/images/our-mission/Open Source.png";
import Innovation from "/assets/images/our-mission/Innovation.png";
function OurMission() {
  return (
    <>
      <div className="our-mission">
        <div className="ourmission-container">
          <div className="container1">
            <div className="card">
              <img src={Blog} alt="blog" />
              <h3>Blogs</h3>
              <p>
                We spread awareness regarding cybersecurity through weekly
                blogs, social media posts and more.
              </p>
            </div>
            <div className="card">
              <img src={OpenSource} alt="open source" />
              <h3>Open Source</h3>
              <p>
                We believe in maintaining a completely transparent and open
                source of code. Anyone from anywhere can access it.
              </p>
            </div>
          </div>
          <div className="container2">
            <div className="card">
              <img src={Events} alt="events" />
              <h3>Events</h3>
              <p>
                Speaker sessions, competitions and periodic conferences all help
                to spread the message of security.
              </p>
            </div>
            <div className="card">
              <img src={Innovation} alt="innovation" />
              <h3>Innovation</h3>
              <p>
                With continuous projects and new ideas, we aim to create unique
                tools to spread awareness on cybersecurity.
              </p>
            </div>
          </div>
        </div>
        <div className="ourmission-title">
          <h1>
            <div className="our">Our</div>
            <div className="mission">Mission</div>
          </h1>
          <p>
            The Cybersecurity Student Community
            <br />
            (CYSCOM). VITCC aims to spread awareness
            <br />
            about cybersecurity.
          </p>
        </div>
      </div>
    </>
  );
}

export default OurMission;
