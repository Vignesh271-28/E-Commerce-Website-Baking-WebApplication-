import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/st_logo.jpeg';
import ChocolateProduct from './ChocolateProduct'; // use the shared product list
import './App.css';
import { FaPhoneAlt, FaInstagram, FaShoppingCart,FaYoutube, FaFacebook } from 'react-icons/fa';


function Chocolate() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header>
        <div className='logo'>
      <Link to="/about">
          <img src={logo} alt="ST's Homemade Bakes" />
          </Link>
          </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ul className="menu-lists">
            <li className="menu-list"><Link to="/">Home</Link></li>
            <li className='menu-list'><Link to="/signup">Signup</Link></li>
            <li className="menu-list"><Link to="/orders"><FaShoppingCart style={{ marginRight: '5px' }} /></Link></li>

          </ul>
        </div>
      </header>

      <div className="cake-menu">
        <ul className="cake-lists">
          <li className="cake-list"><Link to="/brownie">Brownie</Link></li>
          <li className="cake-list"><Link to="/chocolate">Chocolates</Link></li>
          <li className="cake-list"><Link to="/cupcake">Cup Cakes</Link></li>
        </ul>
      </div>

    <div className='container'>
      <div className="brownie-container">
        <div className="brownie-lists">
          {ChocolateProduct.map((cake, i) => (
            <div key={i} className="brownie-list">
              <Link to={`/product/${cake.id}`}>
                <img src={cake.src} alt={cake.name} />
              </Link>
              <div className="brownie-info">
                <span className="brownie-name">{cake.name}</span>
                <span className="item-price-info">
                <del className="item-price">{cake.price}</del>

                  <span className="item-offprice">₹{cake.offerprice}</span>
                </span>
                {/* <span className="item-delivery">{cake.delivery}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
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
            <a href="http://www.youtube.com" target="blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
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
      
    </div>
  );
}

export default Chocolate;
