import React from 'react'
import {Link} from 'react-scroll'
const MobileNavlink = ({href, link, setToggle, toggle}) => {
  return (
    <li className='list-none cursor-pointer mr-8'>
   <Link to={href} smooth={true} duration={500} offset={-50} className='font-bold transition-all duration-300' onClick={() => setToggle(!toggle)}>{link}</Link>
    </li>
  )
}

export default MobileNavlink