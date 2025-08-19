import React, { useState } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import logo from '../public/images/logo.png';
import { FaPhoneAlt, FaInstagram, FaShoppingCart,FaYoutube, FaFacebook } from 'react-icons/fa';


function About() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
    <header>
        <div className='logo'>
          <img src={logo} alt="ST's Homemade Bakes" />
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
      
       <section className="about-page">
      <div className="about-content">
        <h2>About ST’s Homemade Bakes 🎂</h2>
        <p>
          At ST’s Homemade Bakes, we blend love, tradition, and quality ingredients to bring
          delicious homemade treats to your doorstep. Our passion for baking began in a cozy home kitchen and has grown into a beloved brand cherished by our community.
        </p>
        <p>
          From rich brownies to creamy cupcakes and healthy ragi-based delights, every bite reflects our commitment to taste and freshness.
        </p>
        <p>
          Whether it’s for a celebration or a sweet craving, our goal is to deliver joy in every slice.
        </p>
      </div>
      <div className="about-image">
        <img src={logo} alt="About ST Bakes" />
      </div>
    </section>


    <footer className="site-footer">
  <div className="footer-content">
    <h4>ST's Homemade Bakes</h4>
    <p className='footer-icon'><FaPhoneAlt style={{ }} /> +91 98765 43210</p>
    <div className='footer-icons'>
          <p>
            <a href="https://www.instagram.com/st_homemade_bakes" target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
            <FaInstagram style={{ marginRight: '13px',color:'black' }}  />
            </a>
           </p>
          
          
           <p>
            <a href="https://www.facebook.com/share/1Ar7SbFQvj/" target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
            <FaFacebook style={{ marginRight: '13px',color:'black' }} />
            </a></p>
            <p>
              
            <a href="https://www.instagram.com/st_homemade_bakes" target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
            <FaYoutube style={{ marginRight: '13px',color:'black' }} />
            </a></p>
            </div>
            <div className="footer-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      {/* <a href="/privacy">Privacy Policy</a> */}
    </div>
   
    <div className="footer-bottom">
        <p>© {new Date().getFullYear()} ST's Homemade Bakes. All rights reserved.</p>
      </div>   
  </div>
</footer>      

  </>
  )
}

export default About;