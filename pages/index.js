import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Layout from "../components/Layout";
import MoviePreview from "../components/MoviePreview";
import SearchForm from "../components/SearchForm";
import { searchMovies } from "../lib/movies";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [moviesLength, setMoviesLength] = useState(0);

  useEffect(() => {
    if (page > 1) {
      fetchMoreMovies();
    }
  }, [page]);

  const onSearch = async (title) => {
    setSearchTerm(title);
    setPage(1);
    const movies = await searchMovies(title);
    setMovies(movies.Search);
    setMoviesLength(movies.totalResults);
  };

  const fetchMoreMovies = async () => {
    const newMovies = await searchMovies(searchTerm, page);
    setMovies([...movies, ...newMovies.Search]);
  };

  const onMoviePreviewclick = (id) => {
    Router.push(`movies/${id}`);
  };

  return (
    <Layout>
      <Head>
        <title>Movie searcher</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="flex justify-center px-8">
          <SearchForm onSubmit={onSearch} />
        </section>

        <section id="movies">
          {movies.length > 0 && (
            <InfiniteScroll
              dataLength={movies.length}
              next={() => setPage(page + 1)}
              hasMore={page * 10 < moviesLength}
            >
              <ul className="flex flex-wrap justify-evenly items-end w-full">
                {movies.map((movie) => (
                  <li key={movie.imdbID}>
                    <MoviePreview movie={movie} onClick={onMoviePreviewclick} />
                  </li>
                ))}
              </ul>
            </InfiniteScroll>
          )}
        </section>
      </main>
    </Layout>
  );
}

export async function getInitialProps() {}
