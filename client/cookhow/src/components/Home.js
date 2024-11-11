import React from "react";
import "./Home.css";
import heroImage from "../assets/hero1.jpeg";


const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="content">
          <h1>Where Taste Meets Perfection.</h1>
          <p>
            Let your Cooking find its way to new heights by posting in this
            global kitchen.
          </p>
          <div className="buttons">
            <button className="join-btn">Join Us Today</button>
            <button className="view-btn">View recipes</button>
          </div>
        </div>
        <div className="image">
          <img src={heroImage} alt=""/>
        </div>
      </section>{" "}

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

export default Home;
