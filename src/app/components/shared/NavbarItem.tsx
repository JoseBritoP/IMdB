"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
interface NavbarItemProps {
  title:string,
  param:string
}

export default function NavbarItem({title,param}:NavbarItemProps) {

  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  return (
    <Link href={`/?genre=${param}`} className={`font-semibold text-lg lg:text-xl
    hover:text-amber-600 dark:hover:text-amber-400
    ${genre === param ? "underline underline-offset-4 decoration-4 decoration-amber-500 dark:decoration-amber-300 rounded-lg" : "" }
    `}>
     {title} 
    </Link>
  )
}
