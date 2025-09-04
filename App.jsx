import React from 'react';
// import ProtectedRoute from './ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cupcake from './Cupcake';
import ChocolateProduct from './ChocolateProduct';
import CupCakesProduct from './CupCakesProduct';
import Brownie from './Brownie';
import Home from './Home';
import About from './About';
import Orders from './Orders';
import Chocolate from './Chocolate';
import Contact from './Contact';
import Login from './Login';
import Signup from './SignUp';
import BrownieProduct from './BrownieProduct';
import AllUsersLogin from './AllUsersLogin';
import ProductDetail from './ProductsDetail';
// import Allusers from './Allusers';



function App() {
  
  return (
    
    <BrowserRouter basename="/E-Commerce-Website-Baking-WebApplication-/">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
       <Route path='/brownie' element={<Brownie />} />
       <Route path='/orders' element={<Orders />} />
        <Route path='/chocolate' element={<Chocolate />} />
        <Route path='/cupcake' element={<Cupcake />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/chocolateproduct/:id' element={<ChocolateProduct />} />
        <Route path='/cupcakeproduct/:id' element={<CupCakesProduct />} />
        <Route path='/cupcakeproduct/:id' element={<BrownieProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/alluserslogin' element={<AllUsersLogin />}/>
        {/* <Route path='/allusers' element={ 
          <ProtectedRoute>
          <Allusers />
          </ProtectedRoute> }/> */}

      </Routes> 
    </BrowserRouter>
  );
}

export default App;
