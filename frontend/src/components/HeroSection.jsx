import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 pt-20">
      <h1 className=' text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide' >
        Faster Builds,
        <span className='bg-gradient-to-r from-orange-500 to-red-600 text-transparent bg-clip-text'> Smarter Deployments</span>
      </h1>
      <p className='mt-10 text-lg text-neutral-500 max-w-4xl text-center'>Empower your workflow and streamline your DevOps process with our powerful automation tools. Get started today and transform your projects into seamless deployments!</p>
      <div className="flex justify-center my-10">
        <div className="flex flex-wrap justify-center sm:justify-start items-center">
          <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 sm:py-3 sm:px-4 mx-2 sm:mx-3 rounded-md text-sm sm:text-base whitespace-nowrap ">
            Start for free
          </a>
          <a href="#" className="py-2 px-3 sm:py-3 sm:px-4 mx-2 sm:mx-3 rounded-md border text-sm sm:text-base whitespace-nowrap">
            Documentation
          </a>
        </div>

      </div>

      <div className="flex mt-10 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-blue-400 shadow-sm shadow-orange-400 mx-2 my-4">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 ">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
}

export default HeroSection