import React, { useRef, useState } from 'react'
import { validate } from '../utils/formValidation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import Loader from './Loader';


const LoginForm = () => {
  const[error , setError] = useState();
  const[loading , setLoading] = useState(false);
   const email = useRef();
   const password = useRef();
  const handleSubmit= (e) =>{
    
    e.preventDefault();
  
   const err =  validate(email.current.value , password.current.value);
   
   setError(err);

   if(err) return;
   setLoading(true);

  //  firebase login
  signInWithEmailAndPassword(auth, email.current.value , password.current.value)
  .then((userCredential) => {

    const user = userCredential.user;
    
    console.log(user);

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setError(errorCode+" : " + errorMessage);
  });

   setLoading(false);
  //  console.log(email.current.value ,  password.current.value);
  }
  return (
    <div className='text-white flex flex-col gap-5'>
      <h2 className='text-2xl font-bold'>Login</h2>
      <form onSubmit={(e)=>handleSubmit(e)} className='flex flex-col gap-4'>
        <input ref={email} type='email' className='p-3 w-full bg-slate-800 text-white' placeholder='Enter Email'/>
        <input ref={password} type='password' className='p-3 w-full bg-slate-800 text-white' placeholder='Enter Password'/>
        {
          <p className='text-[#D9232E] text-sm'>{error}</p>
        }
        <button type='submit' className='w-full rounded bg-[#D9232E] p-3'>Login</button>
      </form>
      {
        loading && <Loader/>
      }
    </div>
  )
}

export default LoginForm