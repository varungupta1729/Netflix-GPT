export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const BANNER_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    // Authorization: import.meta.env.VITE_TMDB_API_KEY,
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGM4MjIzMzI3YjYwMzYxNjM0NWJmMTMwYjM0NTlmMSIsIm5iZiI6MTcyNzAwMDE4NC43NDQ5NDMsInN1YiI6IjY2ZWZlZDc5N2ZmMmJmNTdjZDI2NDgyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yR7AiyuPcBz878RYNILAOxowzq5Ws9dkkPfMtORxPMU",
  },
};

// api key tmdb = f4c8223327b603616345bf130b3459f1
export const TMDB_IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "ur", name: "Urdu" },
];


export const MOVIE_TYPE = [
  "Motivation",
  "Documentry",
  "Sci-fi",
  "Action",
  "Kids",
  "Family",
  "Punjabi",
  "Thriller",
  "Hindi",
  "Adventure",
  "Comedy",
  "Horror",
  "Crime",
  "Animation",
  "Mystery",
  "Drama",
  "Romance"
];
