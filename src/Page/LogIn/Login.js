import React, { useContext, useState } from 'react';

import signUpLottieData from '../../Page/LogIn/Login.json'

import Lottie from 'lottie-react';
import { AuthContext } from '../../contex/AuthProvider';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';


const Login = () => {
    const{logIn}=useContext(AuthContext);
    const navigate =useNavigate();
    const location =useLocation();
      const [user,setUser] = useState(null);
        const provider = new GoogleAuthProvider();
       const from= location.state?.form?.pathname || "/";

    //Google SignIn
    const handleGoogleSignIn =() =>{
        signInWithPopup(auth,provider)
        .then((result) => { console.log(result.user);
            setUser(result.user);
            navigate(-1);
        })
        .catch(error => {console.log('ERROR',error);
            setUser(null)
        }
        )
    }
    const handleLogIn = event=>{
        event.preventDefault();
        const form = event  .target
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
        logIn(email,password)
        .then(result => {
            console.log('sign in ', result.user);
            navigate(from,{replace:true})
        })
        .catch(error => {
            console.log(error);
        })
          
    }
    
    return (
        <div className='lg:flex  justify-start '>  
        <div className='lg:w-96 lg:h-96 md:w-52 md:h-44 h-20 w-44 lg:mt-20 lg:ml-60 md:ml-72 ml-28 mb-6 '>
            <Lottie  animationData={signUpLottieData}></Lottie>   
             </div>
             
          
<form onSubmit={handleLogIn} className='mt-20 lg:ml-56 md:ml-44 ml-16'>
      <div className='text-center text-white text-2xl border-b-4 border-pink-950 md:w-96 w-72 '>𝑳𝒐𝒈𝑰𝒏</div>
    <div class="mb-6 lg:w-96 md:w-96 w-72 mt-6">
        <label for="email" class="block mb-2 text-sm font-mefdium text-gray-900 dark:text-white">𝐄𝐦𝐚𝐢𝐥 𝐀𝐝𝐝𝐫𝐞𝐬𝐬</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" required />
    </div> 
    <div class="mb-6 lg:w-96 md:w-96 w-72">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 </label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
    </div> 
   
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">𝐈 𝐚𝐠𝐫𝐞𝐞 𝐰𝐢𝐭𝐡 𝐭𝐡𝐞 <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">𝐭𝐞𝐫𝐦𝐬 𝐚𝐧𝐝 𝐜𝐨𝐧𝐝𝐢𝐭𝐢𝐨𝐧𝐬</a>.</label>
    </div>
    <div className='text-center'>
    <button type="submit " className="text-white justify-end mb-10 w-32 bg-pink-950 lg:w-48  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center  md:w-44">𝙻𝚘𝚐𝙸𝚗</button>
    {/* <button className=''>Google</button> */}
</div><div className='divider'>OR</div>
       <button onClick={handleGoogleSignIn} className='justify-evenly ml-16    mb-2 text-white w-32 bg-pink-950 lg:w-80  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center'>𝐒𝐢𝐠𝐧𝐔𝐩 𝐰𝐢𝐭𝐡 𝐆𝐨𝐨𝐠𝐥𝐞 </button>
    {user && <h2>{user.displayName}</h2>} 
    <p className='mb-7'><span className='mt-4'>***</span>  𝐈𝐟 𝐲𝐨𝐮 𝐝𝐨𝐧'𝐭 𝐡𝐚𝐯𝐞 𝐚𝐧 𝐚𝐜𝐜𝐨𝐮𝐧𝐭, 𝐩𝐥𝐞𝐚𝐬𝐞  <span className='border-b-2 border-slate-200 text-xl text-white'><Link to='/sign'> 𝐒𝐢𝐠𝐧𝐔𝐩 </Link> </span></p>
    
</form>

        </div>
    );
};

export default Login;