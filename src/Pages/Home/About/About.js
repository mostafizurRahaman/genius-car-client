import React from "react";
import person1 from '../../../assets/images/about_us/person.jpg'; 
import parts from '../../../assets/images/about_us/parts.jpg'; 
const About = () => {
   return (
      <div className="hero mt-10">
         <div className="hero-content flex-col lg:flex-row">
            <div className="w-full  lg:w-1/2 relative">
               <img src={person1} alt="" className="w-10/12" />
               <img src={parts} alt="" className="absolute  w-1/2 right-5 top-1/2 shadow-sm border-8 border-white rounded-md" />
            </div>
            <div className="w-full lg:w-1/2">
               <h3 className="text-orange-500 text-xl font-bold ">About Us</h3>
               <h1 className="text-5xl font-bold my-5 ">We are qualified 
               <br /> & of experience <br />
               in this field</h1>
               <p className="py-6">
               There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
               </p>
               <p>
               the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.    
               </p>              
                <button className=" mt-5 btn border-0  bg-orange-500 text-white ">Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default About;
