import React from 'react';
import { Link } from 'react-router-dom';

const AdminProductAdd = () => {
    return (
        <div className=''>
           <div className='text-center text-3xl underline text-white mt-5'>𝐀𝐝𝐝 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 lg:grid-cols-4  mb-5 p-3'>
           <Link to='/dashboard/addSkinProduct'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'>𝐒𝐤𝐢𝐧 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭  𝐀𝐝𝐝</h1> </Link>
           <Link to='/dashboard/addMakeUpProduct'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'>𝐌𝐚𝐤𝐞𝐔𝐩  𝐏𝐫𝐨𝐝𝐮𝐜𝐭  𝐀𝐝𝐝</h1> </Link>
           <Link to='/dashboard/addHairProduct'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'>𝐇𝐚𝐢𝐫 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭  𝐀𝐝𝐝</h1> </Link>
           <Link to='/dashboard/addBabyProduct'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'> 𝐁𝐚𝐛𝐲 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐀𝐝𝐝 </h1> </Link>
           
        </div>
        <div>
            <div className='text-3xl text-center text-white underline '>𝐄𝐝𝐢𝐭 𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5 lg:grid-cols-4  mb-5 p-3'>
           <Link to='/dashboard/skinEditshow'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'>𝐒𝐤𝐢𝐧 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭  𝐔𝐩𝐝𝐚𝐭𝐞 𝐚𝐧𝐝 𝐃𝐞𝐥𝐞𝐭𝐞</h1> </Link>
           <Link to='/dashboard/makeUpshow'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'>𝐌𝐚𝐤𝐞𝐔𝐩  𝐏𝐫𝐨𝐝𝐮𝐜𝐭  𝐔𝐩𝐝𝐚𝐭𝐞 𝐚𝐧𝐝 𝐃𝐞𝐥𝐞𝐭𝐞</h1> </Link>
           <Link to='/dashboard/hairShow'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'>𝐇𝐚𝐢𝐫 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭  𝐔𝐩𝐝𝐚𝐭𝐞 𝐚𝐧𝐝 𝐃𝐞𝐥𝐞𝐭𝐞</h1> </Link>
           <Link to='/dashboard/babyShow'><h1 className='p-4 text-center lg:h-36 justify-center text-white bg-pink-500'> 𝐁𝐚𝐛𝐲 𝐂𝐚𝐫𝐞 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐔𝐩𝐝𝐚𝐭𝐞 𝐚𝐧𝐝 𝐃𝐞𝐥𝐞𝐭𝐞 </h1> </Link>
           
        </div>
        </div>
    );
};

export default AdminProductAdd;