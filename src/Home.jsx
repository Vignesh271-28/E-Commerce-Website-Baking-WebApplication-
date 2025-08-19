import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';
import logo from "../images/st_logo.jpeg";
import triplechocolate from "/images/triplechocolate.jpeg";
import blondiebrownie from "/images/blondiebrownie.jpeg";
import chocochip from "/images/chocochip.jpeg";
import redvelvet from "/images/chococupcake.jpeg";
import kitakatbrownie from "/images/kitakatbrownie.jpeg";
import nutellachoco from "/images/nutellachoco.jpeg";
import nutschoco from "/images/nutschoco.jpeg";
import peanutsBrownie from "/images/peanutsBrownie.jpeg";

import { FaPhoneAlt, FaInstagram, FaShoppingCart,FaYoutube, FaFacebook } from 'react-icons/fa';


const carouselImages = [
  triplechocolate,
  blondiebrownie,
  chocochip,
  redvelvet,
  kitakatbrownie,
  nutellachoco,
  nutschoco,
  peanutsBrownie,
  

];

function Home() {

  const [menuOpen, setMenuOpen] = useState(false); 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const getCarouselClass = (i) => {
    const total = carouselImages.length;
    const position = (i - activeIndex + total) % total;

    if (position === 0) return 'carousel-item center';
    if (position === 1) return 'carousel-item right';
    if (position === total - 1) return 'carousel-item left';
    return 'carousel-item hidden';
  };

  return (
    <>
      <header>
        
        <div className='logo'>
          <Link to="/about">
          <img src={logo} alt="ST's Homemade Bakes" />
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

      <main>
        <div className="cake-menu">
          <ul className="cake-lists">
            <li className="cake-list"><Link to="/brownie">Brownie</Link></li>
            <li className="cake-list"><Link to="/chocolate">Chocolates</Link></li>
            <li className="cake-list"><Link to="/cupcake">Cup Cakes</Link></li>
          </ul>
        </div>

        <div className="about-home">
  <div className="about-home-content-left">
    <h3>Home Made Bakes </h3>
    <h4>Homemade Joy In Every Slice</h4>
    <p>Freshly baked cakes, brownies, and cupcakes made with love and quality ingredients.</p>
    <p className="tagline">Because every celebration deserves something sweet.</p>
    <p className="quote">“Happiness is knowing there’s cake in the oven.”</p>
  </div>
</div>

        <section className="carousel-container">
        {carouselImages.map((img, i) => (
          <div className={getCarouselClass(i)} key={i}>
            <img src={img} alt={`slide-${i}`} />
          </div>
        ))}
      </section>
      </main>
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
            <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
            <FaYoutube style={{ marginRight: '13px',color:'black' }} />
            </a>
           </p>
          
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
  );
}

export default Home;
