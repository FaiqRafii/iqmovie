import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;

export const getMovieList = async () => {
  const req = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDNkM2YwM2IyYjc1N2UxMGM0MGExNWNmOWIxYjYwZSIsIm5iZiI6MTc1NTY2NjI1My44MjcwMDAxLCJzdWIiOiI2OGE1NTc0ZDU3ZmNhMjhhZGZmZDI0NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.O4_zPR5BiNdlFMqda7OM4LIscnyskD1CFAHNsK5iEYg",
    },
  };

  const movies = await axios.request(req);
  return movies.data.results;
};

export const searchMovie = async (q) => {
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/movie",
    params: {
      query: q,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MDNkM2YwM2IyYjc1N2UxMGM0MGExNWNmOWIxYjYwZSIsIm5iZiI6MTc1NTY2NjI1My44MjcwMDAxLCJzdWIiOiI2OGE1NTc0ZDU3ZmNhMjhhZGZmZDI0NGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.O4_zPR5BiNdlFMqda7OM4LIscnyskD1CFAHNsK5iEYg",
    },
  };

  const searchedMovies = await axios.request(options);
  return searchedMovies.data.results;
};
