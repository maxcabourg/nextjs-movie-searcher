import axios from 'axios';

export async function searchMovies(title, page = 1) {
  const movies = await axios.get(`http://www.omdbapi.com/?apikey=db1deabe&s=${title}&page=${page}`)
  return movies.data;
}