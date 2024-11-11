import React from 'react'

const Contact = () => {
  return (
    <div>
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
  )
}

export default Contact
