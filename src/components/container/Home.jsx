import React from 'react'
import hero from '../../assets/hero.png'
import { logos } from '../../../Data'
import {motion} from 'framer-motion'
const Home = () => {
  const item={
    hidden:{
      y:20, opcaity:0
    },
    visible:{
      y:0, opcaity:1
    }
  }

  const container = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition:{
        delayChildren: 0.3,
        staggerChildren: 0.1,
      }
    }
  }
  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        {/* content */}
        <div>
          <div className='font-bold text-xs text-Teal mb-4'>
           {''}
           your e-learning partner
          </div>
          <div className='sm:text-[2.5rem] text-[1.5rem] font-bold'>
            This is <br /> the new way <br /> to learn online
          </div>
          <p className='text-sm leading-7 text-gray max-w-sm'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum harum voluptatum esse eius reiciendis, quo adipisci. Libero necessitatibus excepturi est.
          </p>
          <div className='mt-6'>
            <button className='py-3 px-6 font-bold text border border-solid rounded-lg bg-Teal text-white mr-4 '>Get Started</button>
            <button className='py-3 px-6 font-bold text border border-solid rounded-lg border-Teal'>Discover</button>
          </div>
        </div>
        {/* image */}
        <div className='md:w-[50%]'>
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className='text-center text-xl'>WE collaborate with{" "} <span className='text-Teal'>100+ leading universities and companies</span> </p>
        {/* companies */}
        <motion.div variants={container} initial="hidden" whileInView="visible" className='flex items-center justify-center flex-wrap gap-8 p-2'>
         {logos.map((logo, index)=>(
          <motion.div variants={item} className='w-28' key={index}>
            <img src={logo} alt="" className='w-full object-cover'/>
          </motion.div>
         ))} 
        </motion.div>
      </div>
    </div>
  )
}

export default Home