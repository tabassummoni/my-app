import React from 'react';
import { Link } from 'react-router-dom';

const BabyMonPro = ({ babyProduct }) => {
  const { _id, name, price, image, details } = babyProduct;

  return (
    <div className='text-center justify-center  p-4'>
      <div className="card bg-base-100 lg:w-80 shadow-sm border-2 rounded-lg border-red-300">
        <figure>
          <img className='mt-3 w-72 h-96' src={image} alt="Shoes" />
        </figure>
        <div className="">
          <div className='flex'>
            <h1 className="card-title p-3 ml-16">{name}</h1>
            <h1 className="card-title p-3 ml-16">{price}</h1>

          </div> <p className='line-clamp-2 text-xs w-64 ml-4'>{details}</p>
          <div className="card-actions justify-end">
            <Link to={`/babyCare/${_id}`} >   <button className="h-11 w-20 mt-4 bg-white text-pink-950 font-bold border-4 border-pink-950 mr-20 mb-2">Details </button>

            </Link>
          </div>
        </div>
      </div></div>
  );
};

export default BabyMonPro;