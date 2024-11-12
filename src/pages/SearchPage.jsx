import React, { useEffect } from 'react'
import { BANNER_IMAGE } from '../utils/constants'
import SearchBox from '../component/SearchBox'
import SearchMovieSpace from '../component/SearchMovieSpace'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SearchPage = () => {
  const navigate = useNavigate(); 
  const user = useSelector(store=>store.auth);
  useEffect(()=>{
    if(!user) navigate("/");
  },[])
  return (
    <div>
      <div className="fixed w-full h-full overflow-hidden -z-10">
        <img
          className="w-full h-screen object-cover"
          src={BANNER_IMAGE}
          alt="banner"
        />
      </div>
      <div className="w-full  flex flex-col justify-center items-center">
        <div className='w-full text-right mt-10'>
          <button onClick={()=> navigate('/home')} className='bg-[#ffbf00] text-black px-3 py-1 md:px-5 md:py-2 rounded mr-12'>HOME</button>
        </div>
      <h1 className='text-[#ffbf00] text-4xl lg:text-7xl font-bold mt-10'>MOVIEGPT</h1>
      <SearchBox/>
      
      <SearchMovieSpace/>
    </div>
    </div>
  )
}

export default SearchPage
