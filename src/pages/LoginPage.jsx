import React, { useState } from "react";
import { LOGO } from "../utils/constants";
import LoginForm from "../component/LoginForm";
import SignupForm from "../component/SignupForm";
import Header from "../component/Header";

const LoginPage = () => {
  const [activeLogin, setActiveLogin] = useState(true);
  return (
    <div className=" bg-cover  bg-hero bg-[#0000] flex flex-col ">
      
      <Header/>
     
     
      <div className="flex w-full h-screen ">
      <div className="w-1/2 h-full  justify-center items-center flex-col hidden md:flex">
        <img src={LOGO} alt="logo" className="w-3/4" />
        <div className="font-bold text-white text-2xl">
          Watch Movies by Netflix Made By Varun Gupta
        </div>
      </div>

      <div className="w-full md:w-1/2 h-full  flex justify-center items-center">
        <div className="w-full sm:w-3/4 mx-3 md:w-3/5 bg-[#00000099] p-10">
          {activeLogin ? (
            <>
              <LoginForm />
              <p
                className="text-white cursor-pointer mt-10"
                onClick={() => setActiveLogin(!activeLogin)}
              >
                New to Netflix?
                <span className="text-[#D9232E] ml-2">Signup Now</span>
              </p>
            </>
          ) : (
            <>
              <SignupForm />
              <p
                className="text-white cursor-pointer mt-10"
                onClick={() => setActiveLogin(!activeLogin)}
              >
                Already Have Account?
                <span className="text-[#D9232E] ml-2">Signin Now</span>
              </p>
            </>
          )}
        </div>
      </div>

      </div>
     
    </div>
  );
};

export default LoginPage;
