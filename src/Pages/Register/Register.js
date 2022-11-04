import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import singUpImg from '../../assets/images/login/login.svg'; 
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const Register = () => {
   const {createUser, updateInfo } = useContext(AuthContext); 
   const handleForm = event => {
      event.preventDefault(); 
      const form = event.target; 
     const email =form.email.value; 
     const name = form.name.value; 
     const password = form.password.value; 
      console.log(name, email, password); 

       createUser(email, password)
       .then(res => {
            const user =res.user; 
            console.log(user); 
            addInfo({
               displayName: name, 
            })
            form.reset(); 
       })
       .catch(err => console.log(err))

   }

   const addInfo = (profile) => {
         updateInfo(profile)
         .then(() => {})
         .catch(err => console.log(err))
   }
   return (
      <div className="hero ">
      <div className="hero-content gap-10 flex-col lg:flex-row">
         <div className="text-center lg:text-left">
                  <img src={singUpImg} alt="" className="w-3/4" />
         </div>
         <div className="card  w-full max-w-sm shadow-2xl bg-base-100 py-20">
            <form onSubmit={handleForm} className="card-body ">
               <h2 className="text-4xl font-bold text-center" >Sign Up</h2>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Full Name:</span>
                  </label>
                  <input
                     type="text"
                     placeholder="full name"
                     className="input input-bordered"
                     required
                     name="name"
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input
                     type="email"
                     placeholder="email"
                     className="input input-bordered"
                     required
                     name="email"
                  />
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input
                     type="password"
                     placeholder="password"
                     className="input input-bordered"
                     required
                     name="password" 
                  />
               </div>
               <div className="form-control mt-6">
                  <input type="submit" value='Sign Up' className="btn btn-primary" />
               </div>
            </form>
               <p className="text-center text-base  capitalize">Already Have an account? <Link to='/login' className="text-orange-600 text-bold underline">Login </Link>  </p>
         </div>
      </div>
   </div>
   );
};

export default Register;