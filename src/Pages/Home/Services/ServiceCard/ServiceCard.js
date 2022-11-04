import React from "react";
import { AiOutlineDoubleRight} from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
   const { _id, title,img, price } = service; 
   return (
      <div className="card card-compact shadow-xl p-3 border ">
         <figure>
            <img src={img} alt="Shoes" className="rounded-xl"/>
         </figure>
         <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className='text-xl text-orange-600 text-semibold flex items-center justify-between  '> <span>Price: ${price}</span> <Link to={`/checkout/${_id}`}> <span className='text-3xl hover:mr-0 duration-1000 transition-all mr-5'> <AiOutlineDoubleRight></AiOutlineDoubleRight> </span></Link></p>
         </div>
      </div>
   );
};

export default ServiceCard;
