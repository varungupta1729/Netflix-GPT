import React from 'react'
import { useSelector } from 'react-redux';
import Category from '../component/Category';

const NowPlaying = () => {
    const data = useSelector(store=>store.movie.topRatedMovies);
    // console.log(data);
  return (
    <div className='bg-black p-10'>
      <Category title={"Popular Movies"} data={data}/>
    </div>
  )
}

export default NowPlaying
