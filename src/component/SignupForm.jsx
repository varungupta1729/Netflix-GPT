import React, { useRef, useState } from "react";
import { validate } from "../utils/formValidation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { USER_AVATAR } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/Slices/authSlice";
import Loader from "./Loader";


const SignupForm = () => {
  const [error, setError] = useState();
  const [loading , setLoading] = useState(false);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const err = validate(email.current.value, password.current.value);
    setError(err);

    if (err) return;
    setLoading(true);

    //firebase signup
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        })
          .then(() => {
            const { email, uid, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );

           
          })
          .catch((error) => {
            setError(error.message);
          });
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError(errorCode + " : " + errorMessage);
        // console.log(error);
      });

    // console.log(email.current.value, password.current.value);
    setLoading(false);
  };
  return (
    <div className="text-white flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Create Account</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-4">
        <input
          ref={name}
          type="text"
          className="p-3 w-full bg-slate-800 text-white"
          placeholder="Enter Full Name"
          required
        />
        <input
          ref={email}
          type="email"
          className="p-3 w-full bg-slate-800 text-white"
          placeholder="Enter Email"
        />
        <input
          ref={password}
          type="password"
          className="p-3 w-full bg-slate-800 text-white"
          placeholder="Enter Password"
        />
        {<p className="text-[#D9232E] text-sm">{error}</p>}
        <button className="w-full rounded bg-[#D9232E] p-3">Signup</button>
      </form>
      {
        loading && <Loader/>
      }
    </div>
  );
};

export default SignupForm;
