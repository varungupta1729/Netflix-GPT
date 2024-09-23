import React, { useEffect, useState } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const VideoBg = ({movieId}) => {
     const [trailer , setTrailer] = useState("hXzcyx9V0xw");
   
       

    const fetchTrailer = async () =>{
        const rawdata = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos` ,TMDB_API_OPTIONS );
        const data = await rawdata.json();
        const matchData = data.results?.filter((info)=>info.type === "Trailer")
        // console.log(matchData);
        setTrailer(matchData[0].key);
    }
    useEffect(()=>{
          fetchTrailer();
    },[])


  return (
    <div>
      <iframe
      className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer}?si=N3BdzHGFtnEebFaL&amp;start=7?&autoplay=1&loop=1&mute=1&enablejsapi=1&showinfo=0&controls=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen        
      ></iframe>
    </div>
  );
};

export default VideoBg;
