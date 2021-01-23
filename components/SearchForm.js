import React, { useState } from 'react'

export default function SearchForm({ onSubmit }) {
  const [title, setTitle] = useState('')
  const submit = e => {
    e.preventDefault()
    setTitle('')
    onSubmit(title)
  }
  return (
    <form onSubmit={submit} className="flex items-stretch w-full">
      <input
        className="border-solid border-gray-500 border-2 rounded-md mr-2 flex-grow"
        type="text"
        placeholder="Enter a title..."
        value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button type="submit" className="bg-green-500 rounded-md p-2">
        <i className="fas fa-search fa-2x"></i>
      </button>
    </form>
  )
}
