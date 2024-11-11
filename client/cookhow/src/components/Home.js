import React, { useState } from "react";
import "./Home.css";
import heroImage from "../assets/hero1.jpeg";
import searchIcon from "../assets/search1.png"
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query: ", searchQuery);
    // You can perform additional logic here, like filtering recipes
  };

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

            {/* Link to Discover Page */}
            <Link to="/discover">
              <button className="view-btn">View recipes</button>
            </Link>
          </div>
        </div>
        <div className="image">
          <img src={heroImage} alt="Hero" />
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

export default Home;
