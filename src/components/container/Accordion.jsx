import React, { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import {motion, AnimatePresence} from 'framer-motion'
const Accordion = ({id,title}) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleclick = (id)=>{
   setActiveIndex(activeIndex === id ? null : id)
  }
  return (
    <div className='pb-8'>
        <div className='flex items-center justify-between'>
        <div className='sm:text-xl text-base font-bold'>
      {title}
        </div>
        <BsChevronDown className={`${activeIndex === id ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300`} onClick={()=>handleclick(id)}/>
        </div>
        <AnimatePresence>
        {activeIndex === id && (
          <motion.div initial={{height: 0}} animate={{height: '100%' }} exit={{height: 0}} transition={{duration: 0.1}} style={{overflow: 'hidden'}} className='pt-4'>
            <p className='text-sm leading-7 text-gray'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio provident fugiat repellat enim! Velit asperiores illum deleniti necessitatibus eligendi.
            </p>
          </motion.div>
        )}
        </AnimatePresence>
    </div>
  )
}

export default Accordion