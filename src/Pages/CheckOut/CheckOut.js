import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from './../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const CheckOut = () => {
   const {title, price , _id} = useLoaderData();
   const navigate = useNavigate(); 
   
   const {user} = useContext(AuthContext); 
   const handlePlaceOrder = (e) => {
         e.preventDefault(); 
         const form = e.target; 
         const name = `${form.firstName.value} ${form.lastName.value}`; 
         const email = form.email.value; 
         const phone  = form.phone.value; 
         const message = form.message.value; 

         if(name && email && phone && message){
               const order = {
               service_id: _id, 
               serviceName: title, 
               price, 
               customerName: name, 
               email, 
               phone, 
               message,
            }

            fetch('http://localhost:5000/orders', {
            method: 'POST', 
            headers: {
               'content-type': 'application/json', 
               authorization: `Bearer ${localStorage.getItem('genius-token')}`,
            }, 
            body: JSON.stringify(order)
         })
         .then(res => res.json())
         .then(data => {
            console.log(data)
            if(data.acknowledged){
                  toast.success('Your order placed successfully'); 
                  navigate('/orders'); 
                  form.reset(); 
            }
         })
         .catch(err => console.error(err))
         }
         else{
            toast.error('Please Fill the form please.')
         }
       

         

      }
   return (
      <div className="py-10 ">
         <div>
         <h2 className="text-4xl  font-bold">Your are going to place order : {title}</h2>
         <h3 className="text-3xl  font-semibold ">Price : {price}</h3>
         </div>
         <form onSubmit={handlePlaceOrder}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-5">
               <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full  outline-none"
                  name="firstName"
               />
               <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full outline-none"
                  name="lastName"
               />
               <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full outline-none"
                  name="phone"
               />
               <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full outline-none"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
               />
            </div>
            <textarea name="message" className="textarea w-full  input-bordered " style={{minHeight: '150px'}} placeholder="Your message "></textarea>
            <input type="submit" className="btn bg-orange-500 border-none  px-4 py-2 my-5 block mx-auto uppercase text-xl " value='Place your order ' style={{letterSpacing: '0.5px'}} />
         </form>
      </div>
   );
};

export default CheckOut;
