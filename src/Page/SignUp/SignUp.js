import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import React, { useState } from 'react';
import signUpLottieData from '../../Page/SignUp/Animation - 1751298836636.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../contex/AuthProvider';
import { useContext } from 'react';
import auth from '../../Firebase/firebase.init';
import { FaLongArrowAltRight } from "react-icons/fa";
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';





const SignUp = () => {
    const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    //Google SignIn
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    role: 'user',
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/');
                    })
                // setUser(result.user);

            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null)
            }
            )
    }


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const first_name = form.first_name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.password.value;

        // console.log(email.password);
        createUser(email, password)
            .then(() => {
                //creat user entry in the database.
                const userInfo = {
                    name: first_name,
                    email: email,
                    role: 'user'
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.insertedId) {

                        }
                        console.log(res)
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'SignUp Successfully.....',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/');
                    })

            })
            .catch(error => {
                console.log(error.message)
            })


    }

    return (
        <div className='lg:flex  lg:justify-around '>

            <div className='lg:w-96 lg:h-96 md:w-52 md:h-44 h-20 w-44 lg:mt-32 lg:ml-52 md:ml-72 ml-32 mt-4 '>
                <Lottie animationData={signUpLottieData}></Lottie>
            </div>
            <div className='lg:mr-96 '> 
                 <h1 className='text-center mt-24 text-2xl border-b-4 border-pink-950 text-white ' >𝑺𝒊𝒈𝒏𝑼𝒑</h1>
                   
                <form onSubmit={handleSignUp} >
                    <div class=" mb-6 lg:ml-24 md:ml-44  ">
                           <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">𝐅𝐮𝐥𝐥 𝐍𝐚𝐦𝐞</label>
                            <input type="text" name="first_name" className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '400px' }} placeholder="Enter your first name" required />
                        </div>


                        <div>
                            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">𝐏𝐡𝐨𝐧𝐞 𝐍𝐮𝐦𝐛𝐞𝐫</label>
                            <input type="tel" name="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark style={{width:'400px'}}:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '400px' }} placeholder="Enter your phone number" required />
                        </div>

                        <div class="mb-6 ">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">𝐄𝐦𝐚𝐢𝐥 𝐀𝐝𝐝𝐫𝐞𝐬𝐬</label>
                            <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark style={{width:'400px'}}:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '400px' }} placeholder="Enter your email" required />
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝</label>
                            <input type="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark style={{width:'400px'}}:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '400px' }} placeholder="•••••••••" required />
                        </div>
                        <div class="mb-6">
                            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">𝐂𝐨𝐧𝐟𝐢𝐫𝐦 𝐏𝐚𝐬𝐬𝐰𝐨𝐫𝐝 </label>
                            <input type="password" name="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark style={{width:'400px'}}:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ width: '400px' }} placeholder="•••••••••" required />
                        </div>
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input name="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">𝖨 𝖺𝗀𝗋𝖾𝖾 𝗐𝗂𝗍𝗁 𝗍𝗁𝖾 <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">𝗍𝖾𝗋𝗆𝗌 𝖺𝗇𝖽 𝖼𝗈𝗇𝖽𝗂𝗍𝗂𝗈𝗇𝗌</a>.</label>

                        </div>
                    </div>

                    <div className='text-center gap-2'>
                        <button type="submit " className="text-white justify-end mb-2 w-32 bg-pink-950 lg:w-80   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm md:w-48  sm:w-auto px-5 py-2.5 text-center ">𝐒𝐢𝐠𝐧𝐔𝐩</button>
                    </div>

                </form>
                <div className='divider'>OR</div>
                <div className='  text-center'>
                <button onClick={handleGoogleSignIn} className=' mb-2 text-white w-32 bg-pink-950 lg:w-80  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center'>𝐒𝐢𝐠𝐧𝐔𝐩 𝐰𝐢𝐭𝐡 𝐆𝐨𝐨𝐠𝐥𝐞 </button>
                {user && <h2>{user.displayName}</h2>}
                <p className='mb-7'><span className='mt-4'>***</span>  𝐈𝐟 𝐲𝐨𝐮 𝐡𝐚𝐯𝐞 𝐚𝐧 𝐚𝐜𝐜𝐨𝐮𝐧𝐭, 𝐩𝐥𝐞𝐚𝐬𝐞  <span className='border-b-2 border-slate-200 text-xl text-white'> <Link to='/login'>𝐋𝐨𝐠𝐈𝐧 </Link>  </span></p>
</div>

            </div>


        </div>
    );
};

export default SignUp;
