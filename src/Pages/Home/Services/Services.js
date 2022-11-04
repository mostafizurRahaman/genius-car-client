import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
   const [services, setServices] = useState([]);
   useEffect(() => {
      fetch("https://genius-car-srever.vercel.app/services")
         .then((res) => res.json())
         .then((data) => setServices(data));
   }, []);
   return (
      <div>
         <div className="text-center w-2/3 mx-auto my-8">
            <p className="text-2xl font-bold text-orange-500  ">Service</p>
            <h2 className="text-5xl font-bold my-5 ">Our Service Area</h2>
            <p className="text-xl capitalize text-semibold text-gray-600 ">
               <small>
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.{" "}
               </small>
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
            {services.map((service) => (
               <ServiceCard key={service._id} service={service}></ServiceCard>
            ))}
         </div>
         <div className="">
            <button className="btn bg-orange-600 text-xl text-white font-medium border-0 mb-5 block mx-auto capitalize">
               More Services{" "}
            </button>
         </div>
      </div>
   );
};

export default Services;
