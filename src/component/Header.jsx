import React, { useEffect, useState } from "react";
import { LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/Slices/authSlice";
import toast from "react-hot-toast";

const Header = () => {
  const user = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // console.log(uid, email, displayName  , photoURL);
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/home");
        // toast.success("Successfully Login")
      } else {
        dispatch(removeUser());
        navigate("/");
        // toast.success("Successfully Logout")
      }
    });
    // unsubscribe while unmount
    return () => unsubscribe();
  }, []);
  //   console.log(user);

  const handleSignout = () => {
    // console.log("handlesubmit");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logout Successfully");
        // console.log("signout");
      })
      .catch((error) => {
        // An error happened.
        toast.error(error.message);
        // console.log(error.message + "WErrrr");
      });
  };
  return (
    <>
    <div className="absolute w-full z-10  justify-center md:justify-between px-12 py-3 bg-gradient-to-b from-black hidden md:flex ">
      <div className={`flex justify-center items-center  md:flex-row ${toggle ? "flex-col" : "flex-row"} `}>
        {/* <img className="w-40 hidden md:flex " alt="logo" src={LOGO} /> */}
        <h1 className="text-[#ffbf00] text-4xl">MovieGPT</h1>
        <div className="flex  w-screen px-6 justify-between items-center md:hidden ">
          {/* <img className="w-32 " alt="logo" src={LOGO} /> */}
       
        </div>

        {user && (
          <ul className={`ml-10 text-white  gap-4  md:flex   text-sm ${toggle ? "flex flex-col items-center justify-center" : "hidden"}`}>
            <li
              className="cursor-pointer text-[0.7rem] md:text-base"
              onClick={() => navigate("/nowplaying")}
            >
              Now Playing
            </li>
            <li
              className="cursor-pointer  text-[0.7rem] md:text-base"
              onClick={() => navigate("/popular")}
            >
              Popular
            </li>
            <li
              className="cursor-pointer  text-[0.7rem] md:text-base"
              onClick={() => navigate("/toprated")}
            >
              Top Rated
            </li>
            <li
              className="cursor-pointer  text-[0.7rem] md:text-base"
              onClick={() => navigate("/upcoming")}
            >
              Upcoming
            </li>
            <li>
            {
              toggle && <button className="bg-[#ffbf00] text-white py-1 px-2  rounded md:hidden" onClick={handleSignout}>Logout</button>
            }
            </li>
           
          </ul>
        )}
      </div>

      {user && (
        <div className="hidden md:flex justify-between items-center gap-6">
          <img src={user.photoURL} alt="user" className="" />
          <p className="text-white font-bold">{user.displayName}</p>
          <button
            className="bg-[#ffbf00] p-2 text-white rounded px-3 cursor-pointer"
            onClick={handleSignout}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
    <div className="absolute w-full z-10  justify-center  px-7 py-5 bg-gradient-to-b from-black md:hidden  ">
      <div className="flex w-full justify-between items-center">
      <h1 className="text-[#ffbf00] text-4xl">MovieGPT</h1>
      {user&&(!toggle  ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              onClick={() => setToggle(!toggle)}
            >
              <path
                d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
                fill="white"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
              onClick={() => setToggle(!toggle)}
            >
              <path
                d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
                fill="white"
              ></path>
            </svg>
          ))}
      </div>

      <div>
        {
          toggle && (    <ul className={`w-full text-white  gap-4  md:flex   text-sm ${toggle ? "flex flex-col items-center justify-center" : "hidden"}`}>
            <li
              className="cursor-pointer text-[0.7rem] md:text-base"
              onClick={() => navigate("/nowplaying")}
            >
              Now Playing
            </li>
            <li
              className="cursor-pointer  text-[0.7rem] md:text-base"
              onClick={() => navigate("/popular")}
            >
              Popular
            </li>
            <li
              className="cursor-pointer  text-[0.7rem] md:text-base"
              onClick={() => navigate("/toprated")}
            >
              Top Rated
            </li>
            <li
              className="cursor-pointer  text-[0.7rem] md:text-base"
              onClick={() => navigate("/upcoming")}
            >
              Upcoming
            </li>
            <li>
            {
              toggle && <button className="bg-[#ffbf00] text-white py-1 px-2  rounded md:hidden" onClick={handleSignout}>Logout</button>
            }
            </li>
           
          </ul>)
        }

      </div>

    </div>
    </>
  );
};

export default Header;
