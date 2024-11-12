import React, { useState } from "react";
import { LOGO } from "../utils/constants";
import LoginForm from "../component/LoginForm";
import SignupForm from "../component/SignupForm";
import Header from "../component/Header";

const LoginPage = () => {
  const [activeLogin, setActiveLogin] = useState(true);

  return (
    <div className="login-page flex justify-center items-center h-screen bg-[#f6f5f7]">
      <div className="absolute top-0 w-full">

      <Header/>
      </div>
      <div
        className={`container ${activeLogin ? "right-panel-active" : ""}`}
        id="container"
      >
        <div class="form-container sign-up-container">
          <SignupForm setActiveLogin={setActiveLogin}/>
        </div>
        <div class="form-container sign-in-container">
        <LoginForm setActiveLogin={setActiveLogin}/>
        </div>
        <div class="overlay-container">
          <div class="overlay py-10">
            <div class="overlay-panel overlay-left text-black">
              
              <iframe  style={{ width: '100%', height: '100%' , padding:'0' }}  src="https://lottie.host/embed/e3c4bb1c-5763-49f9-ab8a-c6a94dcbdf42/KDAcClNkOR.json"></iframe>
             
            </div>
            <div class="overlay-panel overlay-right">
         
         
              <iframe  style={{ width: '60%', height: '70%' , padding:'0' }} src="https://lottie.host/embed/51cbb3f0-7c4a-4482-9bab-f4a8912d06ab/l1aP1luqFA.json"></iframe>
             

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
