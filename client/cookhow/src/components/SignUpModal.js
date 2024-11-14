// import React from "react";
// import "./SignUpModal.css";
// import signUp_pic from "../assets/signUp_pic.png"

// const SignUpModal = () => {
//   return (
//     <div className="sign-up-modal">
//       <div className="left-image-section">
//       <img
//           src={signUp_pic}
//           alt="Welcome"          
//           className="left-image"
//         />
//         <div className="join-text">Join Today</div>
//       </div>
//       <div className="sign-up-form">
//         <h2>Sign Up</h2>
//         <div className="form-group">
//           <div className="form-field">
//             <label>First Name</label>
//             <input type="text" />
//           </div>
//           <div className="form-field">
//             <label>Last Name</label>
//             <input type="text" />
//           </div>
//         </div>
//         <div className="form-field">
//           <label>Email</label>
//           <input type="email" />
//         </div>
//         <div className="form-field">
//           <label>Password</label>
//           <input type="password" />
//         </div>
//         <div className="form-field">
//           <label>Re-enter password</label>
//           <input type="password" />
//         </div>
//         <div className="terms">
//           <input type="checkbox" />
//           <label>I have read and agree to terms of service and privacy policy.</label>
//         </div>
//         <button className="sign-up-button">Sign Up</button>
//         <div className="or">Or</div>
//         <div className="social-sign-up">
//           <button className="google-button">
//             <img src="https://placeholder.pics/svg/24x24" alt="Google" />
//             Sign Up with Google
//           </button>
//           <button className="facebook-button">
//             <img src="https://placeholder.pics/svg/24x24" alt="Facebook" />
//             Sign Up with Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpModal;

import React, { useState } from "react";
import "./SignUpModal.css";
import signUp_pic from "../assets/signUp_pic.png";

const SignUpModal = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State to hold any form submission errors
  const [error, setError] = useState("");

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple password match validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Clear previous error
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User registered successfully:", data);
        // Optionally redirect user or show a success message
      } else {
        console.error("Error registering user:", data);
        setError("User already exists or something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("There was an error submitting your registration.");
    }
  };

  return (
    <div className="sign-up-modal">
      <div className="left-image-section">
        <img src={signUp_pic} alt="Welcome" className="left-image" />
        <div className="join-text">Join Today</div>
      </div>
      <div className="sign-up-form">
        <h2>Sign Up</h2>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="form-field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Re-enter password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="terms">
            <input type="checkbox" required />
            <label>
              I have read and agree to terms of service and privacy policy.
            </label>
          </div>
          <button className="sign-up-button" type="submit">
            Sign Up
          </button>
        </form>
        <div className="or">Or</div>
        <div className="social-sign-up">
          <button className="google-button">
            <img src="https://placeholder.pics/svg/24x24" alt="Google" />
            Sign Up with Google
          </button>
          <button className="facebook-button">
            <img src="https://placeholder.pics/svg/24x24" alt="Facebook" />
            Sign Up with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
