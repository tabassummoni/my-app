import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BMDetails = () => {

  const { _id, name, image, price, details } = useLoaderData();


  return (
    <div className='lg:p-7   bg-black  lg:flex' >
      <div className='w-96'>
        <img className='w-96 md:ml-48 md:mt-8' src={image} alt="Shoes" />

      </div>
      <div className="ml-56">
        <h2 className="text-amber-50 font-bold text-2xl mt-12 ">{name}</h2>
        <h2 className="text-amber-50 font-xl mt-5">{price} Tk</h2>
        <p className='text-amber-50 font-xl mt-5'>{details}</p>
        <h2 className="text-amber-50 text-xl mt-2">Expiration Date :{price} Tk</h2>
        <div className="card-actions lg:justify-center justify-end mt-4">
          <button className="">𝙰𝚍𝚍 𝚝𝚘 𝙲𝚊𝚛𝚝</button>
        </div>
      </div>
    </div>

  );
};

export default BMDetails;