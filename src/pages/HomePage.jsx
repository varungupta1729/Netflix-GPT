import { useSelector } from "react-redux";
import Header from "../component/Header";
import Hero from "../component/Hero";
import useFetchMovies from "../utils/useFetchMovies";
import Playlist from "../component/Playlist";
import { useNavigate } from "react-router-dom";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";

const HomePage = () => {
  useFetchMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const navigate = useNavigate();

  // console.log(process.env.REACT_APP_FIREBASEKEY)
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Playlist />
      <div className="sticky bottom-20 md:bottom-24 z-20 right-16">
        <button onClick={()=> navigate('/search')} className="shadow-lg shadow-white float-right bg-white px-3 py-2 md:px-10 md:py-3 mr-4 md:mr-16  rounded-full font-bold font-mono hover:translate-y-2">
          {" "}
          AI Search
        </button>
      </div>

      <div className="text-white flex justify-center items-center mb-10 w-full">
        <p>
        Made By Varun Gupta❤️
        </p>
        </div>
    </div>
  );
};

export default HomePage;
