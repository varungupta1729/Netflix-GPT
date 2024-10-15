import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie: null,
    trailer: null,
    searchMovie: null,
    upcomingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    playerVideo:null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    addSearchMovie: (state, action) => {
      state.searchMovie = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addPlayerVideo: (state, action) => {
      state.playerVideo = action.payload;
    },
  },
});

export const { addMovies, addTrailer, addSearchMovie ,addUpcomingMovies,
    addPopularMovies,
    addTopRatedMovies, addPlayerVideo } = movieSlice.actions;

export default movieSlice.reducer;
