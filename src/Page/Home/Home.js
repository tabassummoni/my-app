import React from 'react';
import about from '../../image/aboutUs.jpg'
import about1 from '../../image/29149.jpg'

import logo from '../../image/logo2.png'
import makelist from '../../image/makeupitem.jpg'
import './../Home/home.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import ReviewShow from '../Review/ReviewShow';
// import { motion } from "motion/react"
const Home = () => {
  return (
    <div className=''>

      <div className="hero  ">
        <img className=' md:w-full w-auto lg:h-96 h-full opacity-55' src={makelist}></img>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="avatar ">
            <div className="mask mask-hexagon w-72 h-80  ">
              <img className='md:h-20  md:w-20 h-10 w-10' src={makelist} />
            </div>


          </div>

          <div>
            <h1 className="mb-5 text-5xl  font-bold text-white md:ml-28">𝕴𝕽 𝕮𝖔𝖘𝖒𝖊𝖙𝖎𝖈𝖘  </h1>
            <p className="mb-2 font-bold text-xl md:ml-28 text-white">
              𝙰𝚕𝚕 𝚊𝚛𝚎 𝚊𝚞𝚝𝚑𝚎𝚗𝚝𝚒𝚌 𝚙𝚛𝚘𝚍𝚞𝚌𝚝𝚜
            </p>
            <p className='font-bold text-xl md:ml-28 mb-3 text-white'>𝙶𝚕𝚘𝚠 𝚄𝚙 𝚃𝚑𝚒𝚜 𝚂𝚎𝚊𝚜𝚘𝚗 </p>
            <button className=" md:ml-32  text-white">𝐒𝐡𝐨𝐩 𝐍𝐨𝐰 🛍️</button>
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:mb-10  bg-base-100 shadow-sm   ml-3">
        <figure>
          <motion.img className='max-w-sm ml-4 lg:ml-4  md:ml-72 lg:w-60 lg:h-44 w-56 md:w-96 md:h-72 h-40 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4  '
            src={about}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, repeat: Infinity }} />
          <motion.img className='max-w-sm md:w-96 md:h-72 w-56 lg:h-44  lg:w-60 h-40 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4  '
            src={about1}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }} />
        </figure>
        <div className="card-body">
          <h1 className='text-4xl mt-5 text-yellow-50  lg:ml-36'>🌿 <span className='underline'>𝐀𝐛𝐨𝐮𝐭 𝐔𝐬</span> </h1>
          <p className="text-lg text-white leading-relaxed max-w-7xl mx-auto">
            At <strong>Ir Cosmetic</strong>, we believe that true luxury lies in elegance, quality, and attention to detail. Our exclusive collection of high-performance cosmetics is thoughtfully designed for those who appreciate the art of beauty. Each product is meticulously crafted using premium ingredients and cutting-edge formulations to deliver flawless results with a touch of sophistication. From richly pigmented lipsticks to silky, skin-enhancing foundations, our line reflects timeless glamour and modern grace. We don’t just offer makeup — we offer an experience of indulgence, refinement, and self-expression.
          </p>

          {/* <p className='mt-3 lg:ml-36 '> 𝖠𝗍 <span className='font-bold '>'𝙸𝚛 𝚌𝚘𝚜𝚖𝚎𝚝𝚒𝚌' </span> , 𝗐𝖾 𝖻𝖾𝗅𝗂𝖾𝗏𝖾 𝗍𝗋𝗎𝖾 𝗅𝗎𝗑𝗎𝗋𝗒 𝗅𝗂𝖾𝗌 𝗂𝗇 𝖾𝗅𝖾𝗀𝖺𝗇𝖼𝖾, 𝗊𝗎𝖺𝗅𝗂𝗍𝗒, 𝖺𝗇𝖽 𝖺𝗍𝗍𝖾𝗇𝗍𝗂𝗈𝗇 𝗍𝗈 𝖽𝖾𝗍𝖺𝗂𝗅. <br/> 𝖮𝗎𝗋 𝖾𝗑𝖼𝗅𝗎𝗌𝗂𝗏𝖾 𝖼𝗈𝗅𝗅𝖾𝖼𝗍𝗂𝗈𝗇 𝗈𝖿 𝗁𝗂𝗀𝗁-𝗉𝖾𝗋𝖿𝗈𝗋𝗆𝖺𝗇𝖼𝖾 𝖼𝗈𝗌𝗆𝖾𝗍𝗂𝖼𝗌 𝗂𝗌 𝖽𝖾𝗌𝗂𝗀𝗇𝖾𝖽 𝖿𝗈𝗋 𝗍𝗁𝗈𝗌𝖾 𝗐𝗁𝗈 𝖺𝗉𝗉𝗋𝖾𝖼𝗂𝖺𝗍𝖾 𝗍𝗁𝖾 𝖺𝗋𝗍 𝗈𝖿 𝖻𝖾𝖺𝗎𝗍𝗒. <br/> 𝖤𝖺𝖼𝗁 𝗉𝗋𝗈𝖽𝗎𝖼𝗍 𝗂𝗌 𝗆𝖾𝗍𝗂𝖼𝗎𝗅𝗈𝗎𝗌𝗅𝗒 𝖼𝗋𝖺𝖿𝗍𝖾𝖽 𝗎𝗌𝗂𝗇𝗀 𝗉𝗋𝖾𝗆𝗂𝗎𝗆 𝗂𝗇𝗀𝗋𝖾𝖽𝗂𝖾𝗇𝗍𝗌 𝖺𝗇𝖽 𝖼𝗎𝗍𝗍𝗂𝗇𝗀-𝖾𝖽𝗀𝖾 𝖿𝗈𝗋𝗆𝗎𝗅𝖺𝗍𝗂𝗈𝗇𝗌 𝗍𝗈 𝖽𝖾𝗅𝗂𝗏𝖾𝗋 <br></br>𝖿𝗅𝖺𝗐𝗅𝖾𝗌𝗌 𝗋𝖾𝗌𝗎𝗅𝗍𝗌 𝗐𝗂𝗍𝗁 𝖺 𝗍𝗈𝗎𝖼𝗁 𝗈𝖿 𝗌𝗈𝗉𝗁𝗂𝗌𝗍𝗂𝖼𝖺𝗍𝗂𝗈𝗇. 𝖥𝗋𝗈𝗆 𝗋𝗂𝖼𝗁𝗅𝗒 𝗉𝗂𝗀𝗆𝖾𝗇𝗍𝖾𝖽 𝗅𝗂𝗉𝗌𝗍𝗂𝖼𝗄𝗌 𝗍𝗈 𝗌𝗂𝗅𝗄𝗒, <br/> 𝗌𝗄𝗂𝗇-𝖾𝗇𝗁𝖺𝗇𝖼𝗂𝗇𝗀 𝖿𝗈𝗎𝗇𝖽𝖺𝗍𝗂𝗈𝗇𝗌, 𝗈𝗎𝗋 𝗅𝗂𝗇𝖾 𝗋𝖾𝖿𝗅𝖾𝖼𝗍𝗌 𝗍𝗂𝗆𝖾𝗅𝖾𝗌𝗌 𝗀𝗅𝖺𝗆𝗈𝗎𝗋 𝖺𝗇𝖽 𝗆𝗈𝖽𝖾𝗋𝗇 𝗀𝗋𝖺𝖼𝖾. 𝖶𝖾 𝖽𝗈𝗇’𝗍 𝗃𝗎𝗌𝗍 𝗈𝖿𝖿𝖾𝗋  <br/> 𝗆𝖺𝗄𝖾𝗎𝗉—𝗐𝖾 𝗈𝖿𝖿𝖾𝗋 𝖺𝗇 𝖾𝗑𝗉𝖾𝗋𝗂𝖾𝗇𝖼𝖾 𝗈𝖿 𝗂𝗇𝖽𝗎𝗅𝗀𝖾𝗇𝖼𝖾, 𝗋𝖾𝖿𝗂𝗇𝖾𝗆𝖾𝗇𝗍, 𝖺𝗇𝖽 𝗌𝖾𝗅𝖿-𝖾𝗑𝗉𝗋𝖾𝗌𝗌𝗂𝗈𝗇.</p> */}
          <div className="card-actions  justify-end">
            <button class="btn-shine">
              <Link to="/about"><span>𝐋𝐞𝐚𝐫𝐧 𝐦𝐨𝐫𝐞 👉 </span></Link>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mb-6">
  <h2 className="text-3xl font-bold text-white ">✨<span className='underline'>𝐎𝐮𝐫 𝐏𝐫𝐨𝐝𝐮𝐜𝐭 𝐑𝐞𝐯𝐢𝐞𝐰𝐬 </span> </h2>
  <p className="text-gray-500 mt-2">𝐒𝐞𝐞 𝐰𝐡𝐚𝐭 𝐨𝐮𝐫 𝐜𝐮𝐬𝐭𝐨𝐦𝐞𝐫𝐬 𝐚𝐫𝐞 𝐬𝐚𝐲𝐢𝐧𝐠!</p>
  <p></p>
</div>
      <ReviewShow></ReviewShow>

    </div>
  );
};

export default Home;