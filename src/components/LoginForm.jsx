import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { signInWithGoogle } from '../services/firebase';

export const LoginForm = () => {

  const { isSignUp, setIsSignUp } = useContext(AuthContext);

  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
  }

  const handleGoogleLoginClick = (event) => {
    event.preventDefault();
    signInWithGoogle();
  }

  return (
    <div className="select-none w-full max-w-xs mx-auto mt-7">
      <form className="bg-white shadow-xl rounded-md px-8 pt-6 pb-8 mb-4">
        {/* Full Name field */}
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input className="selext-text shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Full Name" />
          </div>
        )}

        {/* Email field */}
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input className="selext-text shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email Address" />
          </div>
        )}
        
        {/* Username field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="selext-text shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>

        {/* Password field */}        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border select-text rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="***********" />
          {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
        </div>

        {/* Confirm Password field */}        
        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="shadow appearance-none border select-text rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmpassword" type="password" placeholder="***********" />
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
        )}      

        {/* Sign Up/In and Forgot Password buttons */}
        <div className="flex items-center justify-between mb-2">
          <button className="active:translate-x-1 active:translate-y-1 duration-300 click:translate-y-2 bg-blue-500 hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-300 hover:text-blue-800" href="http://localhost:3000/">
            Forgot Password?
          </a>
        </div>
        
        <div className="flex justify-center mb-3">
          <a onClick={switchMode} className="inline-block align-baseline font-bold text-sm text-blue-300 hover:text-blue-800" href="http://localhost:3000/">
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Regsiter here!"}
          </a>
        </div>
        {/* Sign In with Google */}
        <div className="flex justify-center p-1">
          <button onClick={handleGoogleLoginClick} className="font-bold w-full text-md rounded-sm shadow-lg box-border p-2 active:translate-x-1 active:translate-y-1 duration-300 click:translate-y-2 hover:bg-blue-700 hover:text-white focus:outline-none focus:shadow-outline">
            <span className='mr-2'>Sign In with</span>
            <img className="inline-block" src="https://img.icons8.com/color/25/undefined/google-logo.png" alt="Google logo" />          
          </button>
        </div>

      </form>
      
      {/* Copyright section */}
      <p className="text-center text-gray-500 text-xs">
        &copy;2022 ChitChat. All rights reserved.
      </p>

    </div>
  )
}
