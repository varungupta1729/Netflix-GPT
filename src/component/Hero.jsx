import React from 'react'
import VideoTitle from './VideoTitle';
import { useSelector } from 'react-redux';
import VideoBg from './VideoBg';


const Hero = () => {
    const displayMovie= useSelector(store => store.movie?.trailer);
    // console.log(displayMovie)
    if(!displayMovie) return;
  
   

   
  return (
    <div>
     <VideoTitle title={displayMovie.original_title} overview={displayMovie.overview}/>
     <VideoBg movieId={displayMovie.id}/>
    </div>
  )
}

export default Hero
