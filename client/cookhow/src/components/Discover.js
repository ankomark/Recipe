import React from "react";
import './Discover.css'
import heroIcon from "../assets/arrow.png";
import top1 from "../assets/top1.png"

const Discover = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Top pick this week</h1>
          <h2>How to make egg fried rice</h2>
          <button className="join-button">
            Join Us Today{" "}
           <img src={heroIcon} alt="arrow"/> 
          </button>
        </div>
        <div className="hero-image">
          <img
            src={top1}
            alt="Egg Fried Rice"
          />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-section">
          <h3>Join us to get latest updates on upcoming events.</h3>
          <div className="subscribe">
            <input type="email" placeholder="Email address" />
            <button>Subscribe</button>
          </div>
          <p>By signing up you agree to our privacy policies.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Navigate</h4>
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">About Us</a>
          </div>

          <div className="footer-column">
            <h4>Official</h4>
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">FAQs</a>
            <a href="#">Terms</a>
            <a href="#">Contacts</a>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <a href="#">Recipe Room</a>
            <a href="#">Recipe Room</a>
            <a href="#">RecipeRoom@gmail.com</a>
            <a href="#">+254700076984</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Discover;
