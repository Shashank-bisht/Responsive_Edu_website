import React from 'react'
import about from '../../assets/About.jpg'
const About = () => {
  return (
    <div className='section' id='about'>
      <div className=' gap-8 place-items-center'>
        <div className='border-[3px] border-solid border-Teal rounded-lg'>
          <img src={about} alt="" />
        </div>
        <div className='font-bold sm:text-[1.8rem] text-[1.5rem] mb-5'>
        We provide the <br /> best <span className='text-Teal'>Online courses</span>
        <p className='text-sm text-gray leading-7 mb-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita dicta debitis. Ipsa beatae ab quibusdam delectus? Quis maxime officiis inventore. Beatae omnis quae repudiandae qui sint sapiente dolore placeat.
        </p>
        <button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold'>
        Know More
        </button>
        </div>
      </div>
    </div>
  )
}

export default About