import React, { useEffect } from "react";
import { LOGO } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/Slices/authSlice";


const Header = () => {
  const user = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName  , photoURL} = user;
        // console.log(uid, email, displayName  , photoURL);
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName,
          photoURL:photoURL,
        }));

        navigate("/home")
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
        // console.log("signout");
      })
      .catch((error) => {
        // An error happened.
        // console.log(error.message + "WErrrr");
      });
  };
  return (
    <div className="absolute w-full z-10 flex justify-center md:justify-between px-12 py-3 bg-gradient-to-b from-black ">
      <div className="flex justify-center items-center">
        <img className="w-40 " alt="logo" src={LOGO} />
        {
          user &&   <ul className="ml-10 text-white flex gap-4 text-sm">
          <li className="cursor-pointer text-[0.7rem] md:text-base" onClick={()=>navigate('/nowplaying')}>Now Playing</li>
          <li className="cursor-pointer  text-[0.7rem] md:text-base" onClick={()=>navigate('/popular')}>Popular</li>
          <li className="cursor-pointer  text-[0.7rem] md:text-base" onClick={()=>navigate('/toprated')}>Top Rated</li>
          <li className="cursor-pointer  text-[0.7rem] md:text-base" onClick={()=>navigate('/upcoming')}>Upcoming</li>
        </ul>
        }
      
      </div>

      {user && (
        <div className="hidden md:flex justify-between items-center gap-6">
          <img src={user.photoURL} alt="user" className="" />
          <p className="text-white font-bold">{user.displayName}</p>
          <button
            className="bg-[#D9232E] p-2 text-white rounded px-3 cursor-pointer"
            onClick={ handleSignout}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
