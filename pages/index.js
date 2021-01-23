import Head from 'next/head'
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../components/Layout';
import MoviePreview from '../components/MoviePreview';
import SearchForm from '../components/SearchForm';
import { searchMovies } from '../lib/movies';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [moviesLength, setMoviesLength] = useState(0);

  useEffect(() => {
    if (page > 1) {
      fetchMoreMovies();
    }
  }, [page])

  const onSearch = async (title) => {
    setSearchTerm(title);
    setPage(1);
    const movies = await searchMovies(title);
    setMovies(movies.Search);
    setMoviesLength(movies.totalResults);
  }

  const fetchMoreMovies = async () => {
    console.log(page);
    const newMovies = await searchMovies(searchTerm, page);
    console.log([...movies, ...newMovies.Search]);
    setMovies([...movies, ...newMovies.Search]);
  }

  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Search movies</h1>
        <div className="flex justify-center px-8">
          <SearchForm onSubmit={onSearch} />
        </div>

        <section id="movies">
          {movies.length > 0 &&
          <InfiniteScroll
            dataLength={movies.length}
            next={() => setPage(page + 1)}
            hasMore={page * 10 < moviesLength}>
            <ul className="flex flex-wrap justify-evenly items-end">
              {movies.map(movie => (
                <li key={movie.imdbID}>
                  <MoviePreview movie={movie} />
                </li>
              ))}
            </ul>
          </InfiniteScroll>
          }
          
        </section>
      </main>

    </Layout>
  )
}
