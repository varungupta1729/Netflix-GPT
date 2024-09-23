import React from 'react'
import { useSelector } from 'react-redux'
import Category from '../component/Category';

const PopularPage = () => {
  const data = useSelector(store=>store.movie.popularMovies);
  return (
    <div className='bg-black'>
       <Category title={"Popular Movies"} data={data}/>
    </div>
  )
}

export default PopularPage
