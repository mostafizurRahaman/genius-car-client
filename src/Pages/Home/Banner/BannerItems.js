import React from 'react';

const BannerItems = ({slider}) => {
      const {image, id, prev, next} = slider; 
   return (
      <div id={`${id}`} className="carousel-item relative w-full ">
      <div className='carousel-image'>
           <img src={image} alt='images1' className="w-full " />
      </div>
      <div className="absolute flex 
       justify-start gap-5 transform -translate-y-1/2 left-5  top-1/4">
       <h1 className='text-white text-6xl font-bold text-start'>
             Affordable <br />
             Price for car <br />
             servicing 
       </h1>
      </div>
      <div className="absolute flex 
       justify-start gap-5 transform -translate-y-1/2 left-5 font-semibold text-xl  top-2/4 w-2/5 text-white text-start">
          <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      </div>
      <div className="absolute flex 
       justify-start gap-5 transform -translate-y-1/2 left-5 font-semibold text-xl  top-3/4 ">
        <button className="btn btn-outline btn-warning ">Warning</button>
        <button className="btn btn-error ">Warning</button>
      </div>
      <div className="absolute flex gap-5 
       justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#${prev}`} className="btn btn-circle bg-pink-500 ">❮</a> 
        <a href={`#${next}`} className="btn btn-circle">❯</a>
      </div>
    </div> 
   );
};

export default BannerItems;