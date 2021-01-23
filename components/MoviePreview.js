import React from 'react'

export default function MoviePreview({ movie }) {
  return (
    <div className="flex flex-col cursor-pointer items-center p-2 transform transition durantion-500 ease-in-out hover:bg-gray-200 hover:scale-105">
      <img src={movie.Poster} />
      <span>{movie.Title}</span>
    </div>
  )
}
