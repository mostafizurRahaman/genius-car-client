import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.svg";
import { AuthContext } from "./../../Context/AuthProvider/AuthProvider";
import {  FaGithubAlt, FaGoogle } from "react-icons/fa";
import { toast } from "react-hot-toast";
const Login = () => {
   const { LogIn,  GoogleSignIn, LogOut } = useContext(AuthContext);
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const navigate = useNavigate();
   const handleForm = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      LogIn(email, password)
         .then((res) => {
            const user = res.user;
            console.log(user);
            const currentUser = {
               email : user.email, 
            }
            fetch('http://localhost:5000/jwt', {
               method: 'POST', 
               headers: {
                  'Content-Type': 'application/json',
               }, 
               body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
               toast.success("You successfully login. ")
               localStorage.setItem('genius-token', data.token); 
               navigate(from, {replace: true }); 
            })
            .catch(err => console.log(err));
         })
         .catch((err) => console.log(err));
   };
   const handleGoogleSignIn = () => {
      GoogleSignIn()
         .then((res) => {
            const user = res.user;
            console.log(user);
            navigate(from, { replace: true });
         })
         .catch((err) => console.log(err));
   };
   return (
      <div className="hero ">
         <div className="hero-content gap-10 flex-col lg:flex-row">
            <div className="text-center lg:text-left">
               <img src={loginImg} alt="" className="w-3/4" />
            </div>
            <div className="card  w-full max-w-sm shadow-2xl bg-base-100 py-20">
               <form onSubmit={handleForm} className="card-body ">
                  <h2 className="text-4xl font-bold text-center">Login</h2>
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
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                           Forgot password?
                        </a>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <input
                        type="submit"
                        value="Login"
                        className="btn btn-primary"
                     />
                  </div>
               </form>
               <p className="text-center text-base  capitalize">
                  New to Genius car?{" "}
                  <Link
                     to="/register"
                     className="text-orange-600 text-bold underline"
                  >
                     Sign Up{" "}
                  </Link>{" "}
               </p>
               <div className="flex items-center justify-center gap-3 my-2">
                  <button
                     onClick={handleGoogleSignIn}
                     className="bg-black  w-10 h-10 flex items-center justify-center rounded-xl "
                  >
                     {" "}
                     <FaGoogle className="w-6 h-6 text-white"></FaGoogle>{" "}
                  </button>
                  <button className="bg-black  w-10 h-10 flex items-center justify-center rounded-xl">
                     {" "}
                     <FaGithubAlt className="w-6 h-6 text-white"></FaGithubAlt>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
