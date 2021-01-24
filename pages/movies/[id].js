import Head from "next/head";
import React from "react";
import Layout from "../../components/Layout";
import { getMovieById } from "../../lib/movies";

export default function Movie({ movie }) {
  return (
    <Layout>
      <Head>
        <title>{movie.Title}</title>
      </Head>
      <div className="flex w-full mb-5">
        <img src={movie.Poster} className="mr-5" />
        <div>
          <p>
            <span className="font-bold">Title : </span>
            {movie.Title}
          </p>
          <p>
            <span className="font-bold">Director : </span>
            {movie.Director}
          </p>
          <p>
            <span className="font-bold">Genre : </span>
            {movie.Genre}
          </p>
          <div>
            <span className="font-bold">Actors : </span>
            <ul>
              {movie.Actors &&
                movie.Actors.split(", ").map((actor) => (
                  <li key={actor}>{actor}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <section className="mb-5">
        <h3 className="text-xl font-semibold mb-2">Plot</h3>
        <p>{movie.Plot}</p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-2">Ratings</h3>
        {movie.Ratings?.length > 0 && (
          <ul>
            {movie.Ratings.map((rating) => (
              <li key={rating.Source}>
                {rating.Source} : {rating.Value}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const movie = await getMovieById(params.id);
  return {
    props: {
      movie,
    },
  };
}
