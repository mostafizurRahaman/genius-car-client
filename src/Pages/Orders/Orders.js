import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import OrderRow from "../OrdeRow/OrderRow";
import { AuthContext } from "./../../Context/AuthProvider/AuthProvider";

const Orders = () => {
   const { user , LogOut } = useContext(AuthContext);
   const [orders, setOrders] = useState([]);
   useEffect(() => {
      fetch(`http://localhost:5000/orders?email=${user?.email}`, {
         headers: {
            authorization: `Bearer ${localStorage.getItem('genius-token')}`
         }
      })
         .then((res) => {
            if(res.status === 401 || res.status === 403){
               LogOut()
            }
           return   res.json()})
         .then((data) => {
            setOrders(data);
            // console.log(data);
         })
         .catch((err) => console.log(err));
   }, [user?.email, LogOut]);
   const handleDelete = (order) => {
      const confirm = window.confirm("Are your sure ?? ");
      if (confirm) {
         fetch(`http://localhost:5000/orders/${order._id}`, {
            method: "DELETE",
            headers: {
               authorization : `Bearer ${localStorage.getItem('genius-token')}`,
            }
         })
            .then((res) => res.json())
            .then((data) => {
               console.log(data);
               if (data.deletedCount) {
                  const remaining = orders.filter(
                     (items) => items._id !== order._id
                  );
                  setOrders(remaining);
               }
            })
            .catch((err) => console.log(err));
      }
   };

   const handleApprove = (id) => {
      fetch(`http://localhost:5000/orders/${id}`, {
         method: 'PATCH', 
         headers: {
            'content-type' : 'application/json', 
            authorization: `Bearer ${localStorage.getItem('genius-token')}`,
         }, 
         body: JSON.stringify({status: 'Approved'}),
      })
      .then(res => res.json())
      .then(data => {
         console.log(data);
         if(data.modifiedCount > 0){
            const remaining = orders.filter(o => o._id !== id); 
            const approved = orders.find(o => o._id === id); 
            approved.status = 'Approve';
            setOrders([approved, ...remaining]);
         }
      })
      .catch(err=> console.log(err)); 
   }
   return (
      <div>
         <h2 className="text-center text-4xl font-semibold capitalize  my-3 text-orange-500 ">
            Total order : {orders.length}
         </h2>
         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>
                        <label>
                           <input type="checkbox" className="checkbox" />
                        </label>
                     </th>
                     <th>Customer Name </th>
                     <th>Service Name</th>
                     <th>email</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {orders.map((order) => (
                     <OrderRow
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleApprove ={handleApprove}
                     ></OrderRow>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default Orders;
