import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TMDB_API_OPTIONS } from '../utils/constants';
import toast from 'react-hot-toast';
import Loader from '../component/Loader.jsx'
import VideoTitle from '../component/VideoTitle.jsx';
const PlayerPage = () => {
    const {movieId} = useParams();
    const [trailer , setTrailer] = useState("hXzcyx9V0xw");
    const [loading , setloading] = useState(false);
   
       

    const fetchTrailer = async () =>{
    try {
      setloading(true);
      const rawdata = await fetch("https://api.themoviedb.org/3/movie/" + movieId +"/videos" ,TMDB_API_OPTIONS );
      console.log(rawdata)
      const data = await rawdata.json();
      const matchData = data?.results?.filter((info)=>info.type === "Trailer")
      console.log(matchData);
      setTrailer(matchData[0].key);
      setloading(false);
    } catch (error) {
      toast.error(error.messsage);
      setloading(false);
    }

    }
    useEffect(()=>{
          fetchTrailer();
    },[])


  return (
    <div>
      
      {
        loading ? (<Loader/>) :(<iframe
          className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${trailer}?si=N3BdzHGFtnEebFaL&amp;start=7?&autoplay=1&loop=1&mute=1&enablejsapi=1&showinfo=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen        
          ></iframe>)
      }
      
    </div>
  );
}

export default PlayerPage
