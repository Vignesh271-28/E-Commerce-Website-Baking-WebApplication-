// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Allusers() {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8080/orders/all", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`
//       }
//     })
//     .then(response => {
//       setOrders(response.data);
//     })
//     .catch(error => {
//       alert("Access Denied or Unauthorized"+error);
//     });
//   }, []);

//   return (
//     <div>
//       <h2>All Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders available</p>
//       ) : (
//         orders.map((order, index) => (
//           <div key={index} style={{border: '1px solid gray', padding: '10px', margin: '10px'}}>
//             <p><strong>Product:</strong> {order.productName}</p>
//             <p><strong>Price:</strong> ₹{order.productPrice}</p>
//             <p><strong>Username:</strong> {order.username}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }

// export default Allusers;
