import React from 'react'
import Categories from './Categories'
import { useSelector } from 'react-redux'

const Playlist = () => {
    const nowPlaying = useSelector((store)=>store.movie.nowPlayingMovie)
    const upcomingMovies = useSelector((store)=>store.movie.upcomingMovies)
    const topRatedMovies = useSelector((store)=>store.movie.topRatedMovies)
    const popularMovies = useSelector((store)=>store.movie.popularMovies)
    // console.log(data)
  return (
    <div className='w-full bg-black'>
      <div className='-mt-2 lg:-mt-60 relative z-10'>
      <Categories title={"Now Playing"} data={nowPlaying}/>
      <Categories title={"Upcoming Movies"} data={upcomingMovies}/>
      <Categories title={"Top Rated"} data={topRatedMovies}/>
      <Categories title={"Popular"} data={popularMovies}/>
      </div>
     
    </div>
  )
}

export default Playlist
