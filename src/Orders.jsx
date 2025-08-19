import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import './App.css';

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      alert('Please login first.');
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const userRole = decoded.role || decoded.roles || [];
      const uname = decoded.sub;

      const adminCheck = Array.isArray(userRole)
        ? userRole.includes('ROLE_ADMIN')
        : userRole === 'ROLE_ADMIN';

      setUsername(uname);

      const url = adminCheck
        ? 'http://localhost:8080/admin/orders' 
        : 'http://localhost:8080/user/orders';

      fetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) throw new Error('Unauthorized or failed to fetch orders');
          return res.json();
        })
        .then((data) => setOrders(data))
        .catch((err) => {
          console.error('❌ Error fetching orders:', err);
          alert('Failed to fetch orders.');
          navigate('/login');
        });
    } catch (error) {
      console.error('JWT Decode Error:', error);
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
     

      <div className="order-page">
        <h2 style={{ textAlign: 'center' }}>
          Your orders : {username}
        </h2>
        {orders.length === 0 ? (
          <p style={{ textAlign: 'center' }}>No orders found.</p>
        ) : (
          <div className="order-list">
            {orders.map((order) => (

              
              <div key={order.id} className="order-card">
                <p><strong>Product:</strong> {order.productName}</p>
                <p>
  <strong>Weight:</strong>{" "}
  {order.productWeight > 999
    ? `${(order.productWeight / 1000).toFixed(1)}kg`
    : `${order.productWeight}g`}
</p>
                <p><strong>Price:</strong> ₹{order.productPrice}</p>
                {order.orderedAt && (
  <p>
    <strong>Ordered At:</strong>{' '}
    {new Date(order.orderedAt).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}{' '}
    at{' '}
    {new Date(order.orderedAt).toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
    })}
  </p>
)}

              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Orders;
