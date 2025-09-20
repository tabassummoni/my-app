import React from 'react';
import { Link } from 'react-router-dom';

const SkinPro = ({ skinproduct }) => {
  const { _id, name, price, image, details } = skinproduct;

  return (
    <div className='text-center justify-center   p-4'>
      <div className="card bg-base-100 lg:w-80 shadow-sm border-2 rounded-lg border-red-300">
        <figure>
          <img className='mt-3 h-96 w-72' src={image} alt="Shoes" />
        </figure>
        <div className="">
          <div className='flex'>
            <h1 className="card-title p-3 ml-16">{name}</h1>
            <h1 className="card-title p-3 ml-16">{price}</h1>

          </div> <p className='line-clamp-2 text-xs w-64 ml-4'>{details}</p>
          <div className=" text-center ml-16">
            <Link to={`/skincare/${_id}`} >   <button className="h-11 w-36 text-center mt-4 bg-white text-pink-950 font-bold border-4 border-pink-950 mr-20 mb-2">𝐃𝐞𝐭𝐚𝐢𝐥𝐬 </button> </Link>
          </div>
        </div>
      </div></div>
  );
};

export default SkinPro;
