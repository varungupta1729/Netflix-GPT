import React from 'react'
import MovieCard from './MovieCard'

const Categories = ({title , data}) => {
 
  return (
    <div className='w-full p-10  flex flex-col gap-10 '>
      <h2 className='text-white text-base text-center md:text-left md:text-3xl'>{title}</h2>
      <div className='flex overflow-y-hidden overflow-x-scroll scrollbar-hide  w-full  gap-4 '>
        {
          data && data.map((movie)=><MovieCard url={movie.poster_path} key={movie.id} movie={movie}/>)
        }
      </div>
    </div>
  )
}

export default Categories
