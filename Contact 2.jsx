import React, {useState} from 'react';
import './App.css';
import { Link } from "react-router-dom";
import images from "../images/st_logo.jpeg";
import { FaShoppingCart } from 'react-icons/fa';


function Contact() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <header>
        <div className='logo'>
          <Link to="/about">
          <img src={images} alt="ST's Homemade Bakes" />
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="menu-lists">
            <li className="menu-list"><Link to="/">Home</Link></li>
            <li className="menu-list"><Link to="/about">About</Link></li>
            <li className="menu-list"><Link to="/contact">Contact</Link></li>
            <li className="menu-list"><Link to="/signup">Signup</Link></li>
            <li className="menu-list"><Link to="/orders"><FaShoppingCart style={{ marginRight: '5px' }} /></Link></li>
          </ul>
        </div>
      </header>   

  <section className="contact-page">
      <div className="contact-info">
        <h2>Contact Us 📬</h2>
        <p>Have a question, feedback, or custom order request? We’d love to hear from you!</p>
        <ul>
          <li><strong>Email:</strong> hello@stbakes.com</li>
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Location:</strong> Coimbatore, Tamil Nadu</li>
        </ul>
      </div>
      </section>

  
  </>
  )
}

export default Contact;