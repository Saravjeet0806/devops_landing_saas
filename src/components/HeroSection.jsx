import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className=' text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide' >
            Faster Builds, 
            <span className='bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text'> Smarter Deployments</span>   
        </h1>
        <p className='mt-10 text-lg text-neutral-500 max-w-4xl text-center'>Empower your workflow and streamline your DevOps process with our powerful automation tools. Get started today and transform your projects into seamless deployments!</p>
    </div>
  );
}

export default HeroSection