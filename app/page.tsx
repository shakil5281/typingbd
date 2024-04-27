import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center m-auto'>
      <div>
        <h1 className='lg:text-5xl font-semibold text-3xl'>Learn Touch Typing for free!</h1>
        <div className='flex justify-center lg:justify-start'>
          <Link href='/play'><Button className='shadow-[0_4px_0_green] p-6 mt-6'>Get Started</Button></Link>
        </div>
      </div>
    </div>
  )
}
