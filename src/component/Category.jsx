import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./Header";

const Category = ({ data , title }) => {
  const user = useSelector((store)=>store.auth);
  const navigate = useNavigate();

  useEffect(()=>{
      if(!user) navigate('/');
  },[])
  return (
    <>
    
    <button className="text-black bg-white px-4 py-2 rounded-full mt-10 ml-10" onClick={()=>navigate('/')}>
      Go To Back
    </button>
    <div className=" flex justify-center items-center  flex-col my-10">
      <h2 className="text-[#ffbf00] text-3xl my-10">{title}</h2>
      <div className="w-full flex flex-wrap justify-center gap-10">
        {data?.map((movie) => (
          <MovieCard key={movie.id} url={movie?.poster_path} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Category;
