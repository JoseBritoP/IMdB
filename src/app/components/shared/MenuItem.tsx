import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface MenuItemsProps {
  title:string,
  andress:string,
  Icon:IconType,
  size:number
}

export default function MenuItem({title,andress,Icon,size}:MenuItemsProps) {
  return (
    <Link href={andress} className='hover:text-amber-500 transition-colors duration-200 ease-in-out text-center'>
      <p className='uppercase hidden sm:inline text-sm font-semibold'>{title}</p>
      <Icon size={size}/>
    </Link>
  )
}
