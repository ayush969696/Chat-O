import React, { useState } from 'react';
import Login from "../modules/Form/Login";
import SignUp from '../modules/Form/SignUp';

function Home() {
  const [showLogin, setShowLogin] = useState(true); // State to toggle between Login and SignUp

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex justify-center md:p-3 bg-white w-full my-8  rounded-lg border-1 border-gray-300 shadow-xl">
        <h1 className="text-4xl font-bold text-center font-rubik">Chat-O</h1>
      </div>
      <div className="bg-white md:w-[500px] w-[300px]  p-12 rounded-lg border-1 border-gray-300 shadow-xl">
        <div className="w-full">
          <div className="flex justify-between ">
            <button className="tab-btn" onClick={() => setShowLogin(true)}>Login</button>
            <button className="tab-btn" onClick={() => setShowLogin(false)}>Sign Up</button>
          </div>
          <div className="tab-content w-full">
            {showLogin ? <Login /> : <SignUp />} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
