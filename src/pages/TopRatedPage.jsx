import React from 'react'
import { useSelector } from 'react-redux';
import Category from '../component/Category';

const TopRatedPage = () => {
    const data = useSelector(store=>store.movie.topRatedMovies);
    // console.log(data);
  return (
    <div className='bg-black'>
      <Category title={"TopRated Movies"} data={data}/>
    </div>
  )
}

export default TopRatedPage
