import React from 'react'
import { Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

function Home() {
  const texts = ["full_stack developer", "web designer", "software engineer"];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prevText) => {
        // If all characters are deleted, switch to the next text
        if (prevText === '') {
          setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          return texts[index];
        }
        // Otherwise, delete the last character
        return prevText.slice(0, -1);
      });
    }, 500);

    return () => clearInterval(interval);
  }, [index, texts]);


  return (
    <>
      <div className='md:w-full  md:flex  mt-10'>
        <div className='lg:basis-[50%]    '>
          <img className='md:w-full    rounded-[25%] lg:h-[300px] md:h-[300px] md:backdrop-grayscale  md:h-9000px md:px-5 md:overflow-hidden md:rounded-[15%]   ' src="./myimg2.png" alt="myimage" />
        </div>
        <div className='md:basis-[40%] md:px-20 md:mt-1 md:items-center'>

          <h2 className='md:mt-8  md:text-2xl md:pl-4  px-6 mt-5 text-xl uppercase text-blue-400'>hello !!!</h2>
          <h1 className='mt-2 md:text-center w-full  px-4 text-2xl md:text-3xl  text-white'>i'm Shubash Dutta</h1>

          <h6 className=' md:text-3xl text-white     ml-2  md:text-center md:mt-1  text-xl  '> I am <span className=' text-[#f8ae86] font-simebold lg:font-bold font-normal lg:text-4lx  w-full'>{displayedText}</span></h6>
          <p className='px-2 mt-5 font-base text-white md:ml-[80px] md:font-base md:text-lg md:mt-4  md:w-full '>I am a proficient full-stack developer with expertise in Golang and React.js. Skilled in crafting robust web applications, I leverage Golang's efficiency and React.js's versatility to build dynamic, scalable solutions. With a keen eye for optimization, I ensure seamless functionality and exceptional user experiences in every project I undertake.</p>

          <hr className=' border-b-4   mt-2 md:ml-[85px]   md:block  md:mt-4'></hr>
        </div>
      </div>
      <hr className=' hidden md:block border-b-4 ml-[85px] mr-6  mt-4'></hr>

    </>
  )
}

export default Home
