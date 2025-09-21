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
        
        <div className="flex flex-col lg:flex-row">
      {/* Sidebar (only lg and up) */}
      <div className="hidden lg:block lg:w-64 min-h-screen text-white" style={{ background: '#4a0429' }}>
         <ul className='menu p-4'>
                    {
                        !roleLoading && role === 'admin' &&
                        <>
                            <li className='lg:text-2xl md:text-sm text-xs' >
                                <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>𝐀𝐝𝐦𝐢𝐧 𝐇𝐨𝐦𝐞</NavLink>
                            </li>
                            <li className='lg:text-2xl md:text-sm' >
                                <NavLink to='/dashboard/adminProductAdd'> <TbShoppingBagPlus />𝐀𝐝𝐝  𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</NavLink>
                            </li>
                            <li className='lg:text-2xl md:text-sm' >
                                <NavLink to='/dashboard/allreview'> <TbShoppingBagPlus />𝐔𝐬𝐞𝐫 𝐑𝐞𝐯𝐢𝐞𝐰</NavLink>
                            </li>
                            
                            <li className='lg:text-2xl md:text-sm' >
                                <NavLink to='/dashboard/allUsers'> <FaUsers></FaUsers>𝐀𝐥𝐥 𝐔𝐬𝐞𝐫𝐬</NavLink>
                            </li>
                            <div className='divider'> </div>
                        </>




                    }
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/dashboard/cart'> <FaShoppingCart ></FaShoppingCart>𝐌𝐲 𝐂𝐚𝐫𝐭 ({cart.length})</NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/dashboard/review'> <FaServer ></FaServer>𝐀𝐝𝐝 𝐚 𝐑𝐞𝐯𝐢𝐞𝐰</NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/dashboard/wishList'> <FaHeart ></FaHeart>𝐖𝐢𝐬𝐡 𝐋𝐢𝐬𝐭</NavLink>
                    </li>
                    <div className='divider'> </div>
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/'> <FaHome ></FaHome>𝐇𝐨𝐦𝐞</NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm font-bold ' style={{ fontFamily: 'serif' }}>
                        <NavLink to='/dashboard/contact'>
                            <MdEmail />𝐂𝐨𝐧𝐭𝐚𝐜𝐭
                        </NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm text-white font-bold dropdown dropdown-hover' >
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
      {/* cu */}
      {/* <div className='flex'>
            <div className='lg:w-64 hidden sm:hidden md:inline min-h-screen text-white ' style={{ background: '#4a0429' }}>
                <ul className='menu p-4'>
                    {
                        !roleLoading && role === 'admin' &&
                        <>
                            <li className='lg:text-2xl md:text-sm text-xs' >
                                <NavLink to='/dashboard/adminHome'> <FaHome></FaHome>𝐀𝐝𝐦𝐢𝐧 𝐇𝐨𝐦𝐞</NavLink>
                            </li>
                            <li className='lg:text-2xl md:text-sm' >
                                <NavLink to='/dashboard/adminProductAdd'> <TbShoppingBagPlus />𝐀𝐝𝐝  𝐏𝐫𝐨𝐝𝐮𝐜𝐭𝐬</NavLink>
                            </li>
                            <li className='lg:text-2xl md:text-sm' >
                                <NavLink to='/dashboard/allreview'> <TbShoppingBagPlus />𝐔𝐬𝐞𝐫 𝐑𝐞𝐯𝐢𝐞𝐰</NavLink>
                            </li>
                            
                            <li className='lg:text-2xl md:text-sm' >
                                <NavLink to='/dashboard/allUsers'> <FaUsers></FaUsers>𝐀𝐥𝐥 𝐔𝐬𝐞𝐫𝐬</NavLink>
                            </li>
                            <div className='divider'> </div>
                        </>




                    }
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/dashboard/cart'> <FaShoppingCart ></FaShoppingCart>𝐌𝐲 𝐂𝐚𝐫𝐭 ({cart.length})</NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/dashboard/review'> <FaServer ></FaServer>𝐀𝐝𝐝 𝐚 𝐑𝐞𝐯𝐢𝐞𝐰</NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/dashboard/wishList'> <FaHeart ></FaHeart>𝐖𝐢𝐬𝐡 𝐋𝐢𝐬𝐭</NavLink>
                    </li>
                    <div className='divider'> </div>
                    <li className='lg:text-2xl md:text-sm' >
                        <NavLink to='/'> <FaHome ></FaHome>𝐇𝐨𝐦𝐞</NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm font-bold ' style={{ fontFamily: 'serif' }}>
                        <NavLink to='/dashboard/contact'>
                            <MdEmail />𝐂𝐨𝐧𝐭𝐚𝐜𝐭
                        </NavLink>
                    </li>
                    <li className='lg:text-2xl md:text-sm dropdown dropdown-hover' >
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
        </div> */}
{/* /cu */}
      <div className="lg:hidden w-full bg-[#4a0429] text-white">
        <ul className="flex flex-wrap justify-around items-center p-2 text-xs sm:text-sm md:text-base">
          {/* Admin Links */}
          {!roleLoading && role === 'admin' && (
            <>
              <li>
                <NavLink to="/dashboard/adminHome"><FaHome /> <span className="hidden sm:inline">Admin</span></NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/adminProductAdd"><TbShoppingBagPlus /> <span className="hidden sm:inline">Add</span></NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allreview"><TbShoppingBagPlus /> <span className="hidden sm:inline">Review</span></NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers"><FaUsers /> <span className="hidden sm:inline">Users</span></NavLink>
              </li>
            </>
          )}

          {/* User Links */}
          <li>
            <NavLink to="/dashboard/cart"><FaShoppingCart /> <span className="hidden sm:inline">Cart</span></NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review"><FaServer /> <span className="hidden sm:inline">Review</span></NavLink>
          </li>
          
          <li>
            <NavLink to="/"><FaHome /> <span className="hidden sm:inline">Home</span></NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact"><MdEmail /> <span className="hidden sm:inline">Contact</span></NavLink>
          </li>

          {/* Dropdown Menu */}
          <li className="dropdown dropdown-hover">
            <div tabIndex={0} className="cursor-pointer flex items-center gap-1">
              <FiMenu /> <span className="hidden sm:inline">Menu</span>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 text-white font-bold rounded-box z-[1] w-40 p-2 shadow"
            >
              <NavLink to="/skincare"><li>Skin Care</li></NavLink>
              <NavLink to="/makeUpCare"><li>Make Up</li></NavLink>
              <NavLink to="/hairCare"><li>Hair Care</li></NavLink>
              <NavLink to="/babyCare"><li>Baby Care</li></NavLink>
            </ul>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5">
        <Outlet />
      </div>
    </div>
  );
};
export default Dashboard;