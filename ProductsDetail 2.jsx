import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import './App.css';
import logo from '/images/st_logo.jpeg';
import CupCakesProduct from './CupCakesProduct';
import ChocolateProduct from './ChocolateProduct';
import BrownieProduct from './BrownieProduct';
import { FaPhoneAlt, FaInstagram, FaShoppingCart,FaYoutube, FaFacebook } from 'react-icons/fa';
import Popup from './Popup';


function ProductDetail() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    window.location.href = "/signup";
  };
  
  const { id } = useParams();

  const products=[
    ...BrownieProduct,
    ...ChocolateProduct,
    ...CupCakesProduct
  ]
  const item = products.find(p => p.id === id);

  const [mainImage, setMainImage] = useState(item?.src);
  const subImages = item?.subImage || [];
  const [productWeight,setProductWeight] = useState("500");
  const [username,setUserName] = useState();

  const [phoneNo, setPhoneNo] = useState('');
  const [location, setLocation] = useState('');

  if (!item) return <h2>Product not found</h2>;

  const calculatedPrice = (weight) => {
    const basePrice = item.offerprice / 1000; 
    return basePrice * weight;
  };


  
  const handleBuyNow = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to place your order.");
      return;
    }
  
    if (!phoneNo || !location) {
      alert("Please fill all fields!");
      return;
    }
  
    const orderData = {
      productId: item.id,
      productName: item.name,
      productWeight: parseInt(productWeight),
      productPrice: calculatedPrice(productWeight),
      phoneNo: parseInt(phoneNo),
      location: location
    };
  
    fetch("http://localhost:8080/public/cake/brownie/cakes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(orderData)
    })
    .then(data => {
      console.log("Order placed successfully:", data);
     
    
      const msg = `
     Hi, I would like to order ${item.name} ${item.Type}.
    
    Name: ${username}
    Phone: ${phoneNo}
    Product name : ${item.name}
    Weight: ${productWeight > 999 ? (productWeight / 1000).toFixed(1) + 'kg' : productWeight + 'g'}
    Price: ₹${calculatedPrice(productWeight)}
    Location: ${location}
    
    Please confirm my order 
    `;
    
      const whatsappLink = `https://wa.me/917339063939?text=${encodeURIComponent(msg)}`;
      window.open(whatsappLink, "_blank");
    })
    
  };
  
  return (
    <>

<div>
      {showPopup && (
        <Popup
          message="Login required to view this page."
          onClose={handleClosePopup}
        />
      )}

    
    </div>
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
            <li className="menu-list"><Link to="/orders">Orders</Link></li>
            <li className='menu-list'><Link to="/signup">Signup</Link></li>
            <li className="menu-list"><Link to="/orders"><FaShoppingCart style={{ marginRight: '5px' }} /></Link></li>

          </ul>
        </div>
      </header>

      <div className="product-container">
  <div className="product-detail">
    <div className="detailedimg-container">
      <img className="detailed-image" src={mainImage} alt={item.name} />

      <div className="more-images">
        {subImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            onClick={() => setMainImage(img)}
            className={mainImage === img ? "thumbnail selected" : "thumbnail"}
          />
        ))}
      </div>
    </div>

    <div className="product-about-container">
      <p className="detailed-item-name">{item.name}</p>
      <p>
        <span className="detailed-offerprice">₹{calculatedPrice(productWeight)}</span>
        <del className="detailed-price">₹{item.price}</del>
      </p>

      <div className="input-group">
        <label>Select Quantity</label>
        <select value={productWeight} onChange={(e) => setProductWeight(Number(e.target.value))}>
          <option value={250}>250 g</option>
          <option value={500}>500 g</option>
          <option value={1000}>1 Kg</option>
          <option value={1500}>1.5 Kg</option>
          <option value={2000}>2 Kg</option>
        </select>
      </div>

      <p className="detailed-delivery">Free Delivery</p>

      <div className="input-group">
        <label>Your Name</label>
        <input type="text"  onChange={(e) => setUserName(e.target.value)} required />
      </div>

      <div className="input-group">
        <label>Phone No</label>
        <input type="number" onChange={(e) => setPhoneNo(e.target.value)} required />
      </div>

      <div className="input-group">
        <label>Location</label>
        <input type="text" onChange={(e) => setLocation(e.target.value)} required />
      </div>

      <button className="buy-btn" onClick={handleBuyNow}> Buy Now</button>
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
            <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" style={{color:'white',textDecoration:'none'}}>
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
  );
}


export default ProductDetail;