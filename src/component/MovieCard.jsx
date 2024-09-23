import React from 'react'
import { TMDB_IMAGE_CDN } from '../utils/constants'

const MovieCard = ({url}) => {
  return (
    <div className=''>
      {
        url &&
      <img className=' rounded min-w-[70px] max-w-[70px] md:min-w-[170px] md:max-w-[170px] transition-transform hover:scale-125'  src={TMDB_IMAGE_CDN+url} alt='movies'/>
      }
    </div>
  )
}

export default MovieCard
