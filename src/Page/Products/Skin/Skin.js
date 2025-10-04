import React, { useEffect, useState } from 'react';
import SkinPro from './SkinPro';

const Skin = () => {

  const [skinProducts, setSkinProducts] = useState([]);
  useEffect(() => {
    fetch('https://my-app-server-liard.vercel.app/skin')
      .then(res => res.json())
      .then(data => setSkinProducts(data))
  })

  return (
    <div className='bg-black'>
      <div className='text-3xl text-center p-7 underline md:underline-offset-4 text-white '>✨ 𝐒𝐤𝐢𝐧 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5   gap-4'>
        {
          skinProducts.map(skinproduct => <SkinPro skinproduct={skinproduct} key={skinproduct._id}></SkinPro>)
        }
      </div>
    </div>
  );
};

export default Skin;
