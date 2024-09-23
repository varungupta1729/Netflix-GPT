import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Categories from './Categories'
import { TMDB_API_OPTIONS } from '../utils/constants';
import toast from 'react-hot-toast';

const SearchMovieSpace = () => {
   
    const [movieInfo , setMovieInfo] = useState();
    const data = useSelector(store=>store.movie.searchMovie);
    if(!data) return ;

   try {
    const tempMovies = data?.split(',');
    
    const movies = tempMovies?.map((movie=>movie?.trim()));
    const fetchingMovie = async (movie) =>{
        const fetchMovie = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
              movie +
              "&page=1",
            TMDB_API_OPTIONS
          );

          const data = await fetchMovie.json()
          return data ;
    }

    
        const promiseFunction = async()=>{
            const promiseArray = await movies?.map((movie)=>fetchingMovie(movie))
            const promiseMovie = await Promise.all(promiseArray);
            setMovieInfo(promiseMovie);
            // console.log(promiseMovie);
        }
       
        promiseFunction();
  
   

   } catch (error) {
    toast.error("Something Went Wrong Try Again")
    window.reload();
   }
   



    // console.log(movieInfo)

    // console.log(moviePromise);
  return (
    <div className='mt-10 rounded-xl md:px-10 w-full md:w-3/4 bg-[#000000df] text-white'>
      <p className='my-10 px-10 relative  font-mono  md:text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-black after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black'>Movie Results : {data?data:""}</p>
      {
        movieInfo && movieInfo.map((movie , index)=><Categories key={movie?.id} title={movie?.results[0]?.title} data={movie?.results} />)
      }
    </div>
  )
}

export default SearchMovieSpace
