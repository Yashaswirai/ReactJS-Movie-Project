import React from 'react'
import { Link } from 'react-router-dom'
function Card({Shows}) {
  return (
    <Link to={`/details/${Shows.id}`} className='w-44 h-56 mr-4 bg-zinc-800 rounded-md overflow-hidden hover:text-red-500 '>
      <img src={`https://image.tmdb.org/t/p/w500${Shows.poster_path}`} alt={Shows.title} className='w-full h-[85%] object-cover' />
      <h1 className='text-sm mt-2 text-center leading-none tracking-tighter'>{Shows.title ||Shows.original_title || Shows.name }</h1> 
    </Link>
  )
}

export default Card
