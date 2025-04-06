import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import login from "../services/loginFunction.js"
import loadingGif from "../assets/loading.webp";
import { useState } from 'react';
import checkElements2 from '../services/checkElements2.js';
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

function LoginForm() {

    //miscelanoues states
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(null);
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null);
    

    const [password, setPassword] = useState("");
    const [usermail, setUsermail] = useState("");

    async function loginUser() {

        setError(null)
        setSuccess(null);
        setMessage(null)

        // checks if formats of inputs are ok
        const control = await checkElements2(usermail, password);
        if (!control.state) {
            setError(control);
            return;
        }

        //initiate gif
        setIsLoading(true)

        const loginResponse = await login({ usermail, password });

        setIsLoading(false)

        if(loginResponse.state === false) {
            setSuccess(false)
            setMessage(loginResponse.message)
        } 
        else if (loginResponse.state === true) {
            setSuccess(true)
            setTimeout(() => {
                window.location.href = ("/dashboard")
            }, 1000);
        }
    }


    return (

        <motion.div
                    layoutId="authForm" 
                    className="w-full relative md:w-2/6 p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between"
                >

                {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                    <img src={loadingGif} alt="Loading" className="w-64 h-64" />
                    <p className="mt-4 text-xl font-semibold">Processing sign in request...</p>
                </div>
                )}
    

                {/* Login Form */}
                    <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

                    {/* Email or Username */}
                    <div>
                        <label htmlFor="email-username" className="block text-sm font-medium text-gray-700" >Email or Username</label>
                        <input type="text" id="email-username" placeholder="Enter your email or username" value={usermail} onChange={(e) => setUsermail(e.target.value)} 
                            className="w-full p-3 mt-2 border-b-2 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                        {error && error.element === "usermail" && (
                            <div className="text-red-500 text-xs mt-1">{error.message}</div>
                        )}
                    </div>
                    

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" placeholder="Enter your password"  value={password} onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-2 border-b-2 border-gray-300 focus:ring-2 focus:ring-blue-500" />
                        {error && error.element === "password" && (
                            <div className="text-red-500 text-xs mt-1">{error.message}</div>
                        )}
                    </div>

                        {success === false && (
                            <div className="text-red-500 text-center my-2">
                            Signing in failed. {message}
                            </div>
                        )}

                        {success === true && (
                            <div className="text-green-500 text-center my-2">
                            Signing in succesful. 
                            </div>
                        )}

                    {/* Login Button */}
                    <button onClick={loginUser} className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</button>

                    {/* Register Link */}
                    <div className="text-center mt-4">
                            <Link to="/register" className="text-sm text-gray-600 flex flex-row">
                            <div className=''>Dont have an account?</div>
                            <div className="text-blue-500 hover:underline ml-1">Register for free</div></Link>
                        </div>

                    {/* Or Login with Text */}
                    <div className="text-center my-4">
                        <span className="text-sm text-gray-600">Or login with</span>
                    </div>

                    {/* Social Media Login buttons*/}
                    <div className="flex justify-center gap-4">

                        <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-300">
                            <FaGithub className="w-9/10 h-9/10" />
                        </button>
                        <button className="w-10 h-10 rounded-full flex justify-center items-center hover:bg-gray-300">
                            <FaGoogle className='w-9/10 h-9/10'/>
                        </button>
                        <button className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300">
                            <FaFacebook className='w-9/10 h-9/10'/>
                        </button>
                    </div>


                </motion.div>)
} 

export default LoginForm