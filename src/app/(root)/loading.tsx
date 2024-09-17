import React from 'react'
import spinner from '../../../public/spinner.svg'
import Image from 'next/image'
export default function loading() {
  return (
    <div className='flex justify-center'>
      <Image src={spinner} alt="loading..." height={36} width={36} />
    </div>
  )
}
