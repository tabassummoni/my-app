import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaList, FaUsers, FaServer, FaShoppingCart, FaHeart, FaVoicemail } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import useCart from '../../hooks/useCart';
import { MdEmail } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import useUserRole from '../../hooks/useUserRole';


const Dashboard = () => {
    const [cart] = useCart();
    const { role, roleLoading } = useUserRole();
    console.log(role)
    // const isAdmin = true;
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen text-white text-2xl ' style={{ background: '#4a0429' }}>
                <ul className='menu p-4'>
                    {
                        !roleLoading && role === 'admin' &&
                        <>
                            <li className='text-2xl' >
                                <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>𝐀𝐝𝐦𝐢𝐧 𝐇𝐨𝐦𝐞</NavLink>
                            </li>
                            <li className='text-2xl' >
                                <NavLink to='/dashboard/adminProductAdd'> <TbShoppingBagPlus />𝐀𝐝𝐝  𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</NavLink>
                            </li>
                            <li className='text-2xl' >
                                <NavLink to='/dashboard/allreview'> <TbShoppingBagPlus />𝐔𝐬𝐞𝐫 𝐑𝐞𝐯𝐢𝐞𝐰</NavLink>
                            </li>
                            
                            <li className='text-2xl' >
                                <NavLink to='/dashboard/allUsers'> <FaUsers></FaUsers>𝐀𝐥𝐥 𝐔𝐬𝐞𝐫𝐬</NavLink>
                            </li>
                            <div className='divider'> </div>
                        </>




                    }
                    <li className='text-xl' >
                        <NavLink to='/dashboard/cart'> <FaShoppingCart ></FaShoppingCart>𝐌𝐲 𝐂𝐚𝐫𝐭 ({cart.length})</NavLink>
                    </li>
                    <li className='text-xl' >
                        <NavLink to='/dashboard/review'> <FaServer ></FaServer>𝐀𝐝𝐝 𝐚 𝐑𝐞𝐯𝐢𝐞𝐰</NavLink>
                    </li>
                    <li className='text-xl' >
                        <NavLink to='/dashboard/wishList'> <FaHeart ></FaHeart>𝐖𝐢𝐬𝐡 𝐋𝐢𝐬𝐭</NavLink>
                    </li>
                    <div className='divider'> </div>
                    <li className='text-xl' >
                        <NavLink to='/'> <FaHome ></FaHome>𝐇𝐨𝐦𝐞</NavLink>
                    </li>
                    <li className='text-xl font-bold ' style={{ fontFamily: 'serif' }}>
                        <NavLink to='/dashboard/contact'>
                            <MdEmail />Contect
                        </NavLink>
                    </li>
                    <li className='text-xl dropdown dropdown-hover' >
                        <div  > <FiMenu ></FiMenu>                      <div className="dropdown dropdown-hover">
                            <div tabIndex={0} className=" ">𝐌𝐞𝐧𝐮</div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                <NavLink to='/skincare'><li className='text-sm ' style={{ fontFamily: 'serif' }}><a>Skin Care</a></li></NavLink>
                                <NavLink to='/makeUpCare'><li className='text-sm ' style={{ fontFamily: 'serif' }}><a>Make Up</a></li></NavLink>
                                <NavLink to='/hairCare'><li className='text-sm ' style={{ fontFamily: 'serif' }}><a>Hair Care</a></li></NavLink>
                                <NavLink to='/babyCare'><li className='text-sm ' style={{ fontFamily: 'serif' }}><a>Baby Care</a></li></NavLink>
                            </ul>
                        </div>
                        </div>
                    </li>




                </ul>
            </div>
            <div className='flex-1 p-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;