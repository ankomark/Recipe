import React, { useState } from "react";
import './Discover.css'
import heroIcon from "../assets/arrow.png";
import top1 from "../assets/top1.png"
import searchIcon from "../assets/search1.png"
import { Link } from "react-router-dom"; 

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query: ", searchQuery);
    // You can perform additional logic here, like filtering recipes
  };
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Top pick this week</h1>
          <h2>How to make egg fried rice</h2>
          {/* <button className="join-button">
            Join Us Today{" "}
           <img src={heroIcon} alt="arrow"/> 
          </button> */}

          <Link to="/signup">
              <button className="join-button">Join Us Today{" "}
              <img src={heroIcon} alt="arrow"/></button>
            </Link>

        </div>
        <div className="hero-image">
          <img
            src={top1}
            alt="Egg Fried Rice"
          />
        </div>
      </section>

      {/* Search Bar Section */}
      <div className="search-bar">
        <img
          src={searchIcon}
          alt="Search Icon"
          className="search-icon"
        />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        />
        <button className="search-button" onClick={handleSearch}> {/* Search Button */}
          Search
        </button>
      </div>

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
