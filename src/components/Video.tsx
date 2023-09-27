'use client'
import { type MouseEvent } from 'react'

export default function Video () {
  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  return (
    <div className='absolute inset-0 overflow-hidden flex items-center -z-10'>
      <video
        className='w-full h-full object-cover relative'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
        onContextMenu={preventContextMenu}
      >
        <source src='/video/hero.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-[#333333]/30' />
    </div>
  )
}
