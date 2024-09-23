import React from 'react'
import { useSelector } from 'react-redux';
import Category from '../component/Category';


const UpcomingPage = () => {
    const data = useSelector(store=>store.movie.upcomingMovies);
  return (
    <div className='bg-black'>
       <Category title={"Upcoming Movies"} data={data}/>
    </div>
  )
}

export default UpcomingPage
