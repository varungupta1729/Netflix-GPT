import React from 'react'
import { TMDB_IMAGE_CDN } from '../utils/constants'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({movie, key, url}) => {
  const navigate = useNavigate();
  // console.log(movie)
  return (
    <div onClick={()=>navigate('/player/'+ movie.id)}>
      {
        url &&
      <img className=' rounded min-w-[70px] max-w-[70px] md:min-w-[170px] md:max-w-[170px] transition-transform hover:scale-125'  src={TMDB_IMAGE_CDN+url} alt='movies'/>
      }
    </div>
  )
}

export default MovieCard
