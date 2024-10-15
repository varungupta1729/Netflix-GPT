import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDB_API_OPTIONS, TMDB_IMAGE_CDN } from "../utils/constants";
import toast from "react-hot-toast";
import Loader from "../component/Loader.jsx";
import VideoTitle from "../component/VideoTitle.jsx";
import { useSelector } from "react-redux";
const PlayerPage = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState("hXzcyx9V0xw");
  const [loading, setloading] = useState(false);
  const [movieInfo, setMovieInfo] = useState();

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId,
      TMDB_API_OPTIONS
    );
    const rawData = await data.json();
    setMovieInfo(rawData);
    console.log(rawData);
  };

  const fetchTrailer = async () => {
    try {
      setloading(true);
      const rawdata = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
        TMDB_API_OPTIONS
      );
      // console.log(rawdata)
      const data = await rawdata.json();
      const matchData = data?.results?.filter(
        (info) => info.type === "Trailer"
      );
      // console.log(matchData);
      setTrailer(matchData[0].key);
      setloading(false);
    } catch (error) {
      toast.error(error.messsage);
      setloading(false);
    }
  };
  useEffect(() => {
    fetchTrailer();
    fetchData();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="text-black ">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailer}?si=N3BdzHGFtnEebFaL&amp;start=7?&autoplay=1&loop=1&mute=1&enablejsapi=1&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="flex flex-col lg:flex-row p-10 gap-2">
        <div className="bg-white p-10 relative m-10 w-full lg:w-1/2 flex flex-col gap-3 rounded-xl mx-auto">
          <h1 className="text-5xl font-bold">{movieInfo?.original_title}</h1>
          <p className="text-lg">{movieInfo?.overview}</p>
          <div className="bg-black text-white p-2  rounded-full px-4 w-[140px]">
            Rating : {movieInfo?.vote_average}
          </div>
        </div>
        <div className="bg-white p-10 relative m-10 w-full lg:w-1/2 mx-auto flex flex-col gap-3 rounded-xl">
          <h2>Genres:</h2>
          <div className="flex w-full flex-wrap gap-2">
            {movieInfo?.genres.map((data) => (
              <span className=" flex bg-black text-white gap-2 py-2 rounded-full px-4 ">
                <p>{data.name}</p>
              </span>
            ))}
          </div>
          <h2>Production Companies:</h2>
          <div className="flex w-full flex-wrap gap-2">
            {movieInfo?.production_companies.map((data) => (
              <span className=" flex bg-black text-white gap-2 py-2 rounded-full px-4 ">
                {data.logo_path &&
                  <div className="rounded-full w-7 h-7 flex justify-center items-center">
                    
                    <img
                      src={TMDB_IMAGE_CDN + data.logo_path}
                      alt="logo"
                      className=" "
                    />
                  </div>
                }
                <p>{data.name}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
