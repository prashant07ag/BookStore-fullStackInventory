import React, { useContext, useState } from 'react'
import googleLogo from "../assets/google-logo.svg";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './Authprovider'

const SignUp = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);
    const [suerror, setSuerror] = useState("")
    const location = useLocation();
    const navigator = useNavigate();

    const from = location.state?.from?.pathname || '/';
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("sign-up successful");
            navigator(from, {replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setSuerror(errorMessage);
            // ..
          });
        console.log(email, password);
    }
    const handleGoogleRegister = ()=>{
        signInWithGoogle().then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("sign-up successful");
            navigator(from, {replace:true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setSuerror(errorMessage);
            // ..
          });
    }
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 px-4 md:px-24">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">SignUp Form</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSignup} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                                </div>
                                <div className="relative">
                                    <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                                </div>
                                <p className='m-3'>If you have an account. Please <Link to="/login" className='text-blue-500 underline'>Log In</Link></p>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-4 py-2">Submit</button>
                                </div>
                            </form>
                        </div>
                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-6'>
                            <button onClick={handleGoogleRegister} className='block text-pretty'><img src={googleLogo} alt="" className='w-12 h-12 inline-block'/>Login with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
