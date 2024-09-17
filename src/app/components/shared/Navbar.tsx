import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <nav className='flex gap-x-10 justify-center dark:bg-amber-600 bg-gray-800 px-1 py-2 '>
      <NavbarItem title="Trending" param="fetchTrending"/>
      <NavbarItem title="Top Rated" param="fetchTopRated"/>
    </nav>
  )
}
