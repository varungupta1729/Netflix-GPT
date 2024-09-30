import React, { useEffect, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useDispatch } from "react-redux";
import { addSearchMovie } from "../redux/Slices/movieSlice";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { MOVIE_TYPE, TMDB_API_OPTIONS } from "../utils/constants";
import useSpeechToText from "react-hook-speech-to-text";
import { FaMicrophone } from "react-icons/fa";

const SearchBox = () => {
  const searchMovie = useRef(null);
  const [voice, setVoice] = useState([]);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  if (error) toast.error("Web Speech API is not available in this browser 🤷");
  //  searchMovie.current.value = results.map((result) => (
  //   <li className="bg-yellow-50" key={result.timestamp}>{result.transcript}</li>
  // ))

  const handleSubmit = async (e, movie) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (movie) searchMovie.current.value = movie;
      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt =
        "Suggest me the five movies which is of type mentioned in the Query . Query:" +
        searchMovie.current.value +
        ". Give me the list of which is (,) comma separated and format is strictly like the given example and not give extra text only give name of movies. Example : Stree , Golmaal , Bahubaali , Tumbad , Houseful";
      // const prompt = "Write a story about a magic backpack.";
      console.log(prompt);

      const result = await model.generateContent(prompt);
      const data = result.response.text();

      dispatch(addSearchMovie(data));
      searchMovie.current.value = "";
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }

    // console.log(data);
  };

  // useEffect(() => {
  //   if (isRecording) {
  //     setVoice(results.map((result) => result.transcript));
  //      searchMovie.current.value =  interimResult;
  //   }else{
  //     setVoice([]);
  //   }
  // }, [startSpeechToText]);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      {/* <button
        className={`${
          isRecording ? "bg-black text-red-600" : "bg-blue-950 text-white"
        }  text-2xl  p-4 rounded-full mt-10`}
        onClick={isRecording ? stopSpeechToText : startSpeechToText}
      >
        <FaMicrophone />
      </button>
      <span className="font-bold">
        {isRecording ? "Tap to Stop" : "Tap to Search by Voice"}
      </span> */}
      <div className="w-full md:w-[70%]  lg:w-[40%] p-5 bg-black rounded-full mt-16 ">
        <form className="flex justify-center items-center">
          <input
            ref={searchMovie}
            className="text-white bg-black border w-[70%] md:w-[75%] px-3 py-2 sm:py-3 rounded-l-full"
            type="text"
            placeholder="Enter Text To Search Movies"
          />
          <button
            onClick={(e) => handleSubmit(e, null)}
            className="w-[25%] border bg-[#D9232E] rounded-r-full text-white px-10 py-3 text-[0.7rem] sm:text-base"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full lg:w-[50%] flex flex-wrap justify-center gap-2 mt-4">
        {MOVIE_TYPE.map((movie) => (
          <button
            key={movie.id}
            className="rounded-full bg-black text-white hover:bg-[#D9232E] px-5 py-2 text-[0.7rem] sm:text-base"
            onClick={(e) => handleSubmit(e, movie)}
          >
            {movie}
          </button>
        ))}
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default SearchBox;
