import React from "react";
import './landing.css';

function LandingPage() {
 
  return (
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <button  className="landingbutton lg bg-primary text-light btn-outline-light">
                  Login
                </button>
              </a>
              <a href="/register">
                <button
               
                  className="landingbutton lg btn-outline-primary"
                >
                  Signup
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;