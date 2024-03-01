import React from 'react'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faHtml5,} from '@fortawesome/free-brands-svg-icons';

import { faCode,faCog } from '@fortawesome/free-solid-svg-icons';

function Myskill() {
  return (
    <div>
     <div className=' w-full    h-96 '>
        <h1 className='text-center text-3xl font-bold md: mt-8'>My Skill's</h1>

    
     <div className='  md:flex md:base[70%]  mt-5 md:h-[400px] md:shadow-2xl shadow-2xl md:justify-center md:gap-3  '>
      <div className='hover:bg-gray-800 border-4 justify-center  md:basis-[25%]   ml-6  rounded-3xl  w-[90%] text-white capitalize  md:h-[320px]  h-72 mb-8'>
        <div className='md:bg-blue-300 bg-indigo-400 rounded-2xl  h-16 md:h-20  '>
       <p className='text-center text-white text-2xl md:pt-2 md:text-3xl'> <FontAwesomeIcon icon={faHtml5} className='animate-bounce'  /><h1 className='capitalize'>front end</h1></p>
         <ul className='text-center md:text-center mt-7 text-2xl capitalize md:mt-8'>
          <li>HTML</li>
          <li>css</li>
          <li>javascript</li>
          <li>React</li>
          <li>tailwind css</li>
          <li>bootstrap</li>
         </ul>
          </div>
        
      </div>
      <div className='hover:bg-gray-800 border-4 justify-center  md:basis-[25%]   ml-6  rounded-3xl  w-[90%] text-white capitalize  md:h-[320px]  h-72 mb-8'> 
       <div className='md:bg-blue-300 bg-indigo-400 rounded-2xl  h-16 md:h-20 '>
       <p className='text-center text-white text-2xl md:pt-2 md:text-3xl '> <FontAwesomeIcon icon={faCode} className='animate-bounce'  /><h1 className='capitalize'>Back end</h1></p>
       <ul className='text-center md:text-center capitalize mt-7 text-2xl  md:mt-8'>
          <li>golang</li>
          <li>mysql</li>
          <li>mongodb</li>
          <li>restfull api's</li>
         
         </ul>
          </div></div>
          <div className=' hover:bg-gray-800  border-4 justify-center  md:basis-[25%]   ml-6  rounded-3xl  w-[90%] text-white capitalize  md:h-[320px]  h-72 mb-8'> 
       <div className='md:bg-blue-300 bg-indigo-400 rounded-2xl  h-16 md:h-20 '>
       <p className='text-center text-white text-2xl md:pt-2 md:text-3xl'> <FontAwesomeIcon icon={faCog} className='animate-bounce'   /><h1 className='capitalize'>other</h1></p>
       <ul className='text-center md:text-center capitalize mt-7 text-2xl  md:mt-8'>
          <li>git</li>
          <li>github</li>
          <li>render</li>
          <li>vercel</li>
          <li>type script</li>
          <li>vs_code</li>
         
         </ul>
          </div></div>
      </div>
     </div>
    </div>
  )
}

export default Myskill
