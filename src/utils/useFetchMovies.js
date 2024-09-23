import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "./constants";
import { useDispatch } from "react-redux";
import { addMovies, addTrailer } from "../redux/Slices/movieSlice";

const useFetchMovies = () =>{
    const dispatch = useDispatch();
    const getLatestMovies = async() =>{
        const rawData = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1' , TMDB_API_OPTIONS);
        const movie = await rawData.json();
        // console.log(data.results);
        dispatch(addMovies(movie.results));
        const randomNum = Math.floor((Math.random() % movie.results?.length)*10) ;
        //    console.log(random)
           const displayMovie = movie.results[randomNum];
        dispatch(addTrailer(displayMovie));

      }
    
      useEffect(()=>{
        getLatestMovies();
      },[])
      
}

export default useFetchMovies;