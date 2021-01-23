import React from 'react'

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-blue-600 h-80 flex items-center">
        <span className="text-white text-xl font-semibold">Movie searcher</span>
      </header>
      <div className="container px-8 mx-auto">
        {children}
      </div>
    </div>
  )
}
