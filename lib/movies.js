import axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export async function searchMovies(title, page = 1) {
  const movies = await axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&s=${title}&page=${page}&type=movie`
  );
  return movies.data;
}

export async function getMovieById(id) {
  const movie = await axios.get(
    `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}&i=${id}&type=movie`
  );
  return movie?.data;
}
