import React from 'react'

function Myproject() {
  return (
    <>
    <div className='bg-[#623a92]  mt-14 w-full h-full'>
    <div className='text-3xl md:mt-4 mb-5 text-white text-center'>
      <h1>My Project</h1>
    </div>

    <div className='md:flex md:flex-wrap justify-center md:justify-center w-100%  md:h-100% md:w-full h-100%'>
        <div className=' w-[80%]  shadow-2xl   ml-12  items-center md:blur-[2px] hover:blur-none  h-[428px] md:w-[30%] rounded-xl  mb-5 md:h-[420px] border-2'>
            <img className=' rounded-lg  h-[200px] w-full' src="./Screenshot.png" alt="projectimg" />
            <div className='bg-white  mt-[3px]'>
                <h3 className='text-center text-lg capitalize  font-semibold'>saibaba || ngo web_site</h3>
                <p className='px-6 '>During my internship, I developed an NGO website with a dynamic, responsive UI using React.js. I utilized Golang in the backend for robust functionality, ensuring a seamless user experience.</p>
            </div>
            <a target='blank' href="https://github.com/shubashdutta"><button className=' md:text-2xl text-lg md:ml-20 mt-1 ml-20 hover:bg-green-800 rounded-lg bg-indigo-900 text-white  border-2'>socre code</button></a>
        </div>
        <div className='w-[80%] ml-12 shadow-lg  items-center md:blur-[2px] hover:blur-none mb-5    h-[428px] md:w-[30%] rounded-xl md:h-[450px] border-2 ' >
        <img className=' rounded-lg  h-[200px] w-full' src="./prime.png" alt="projectimg" />
            <div className='bg-white  mt-[3px]'>
                <h3 className='text-center text-lg capitalize  font-semibold'>Primestar || consulting</h3>
                <p className='px-6 '>I'm proud to present the consulting website I developed during my internship. Tailored for individualized services, it offers expertise honed during my time at [Company Name]. </p>
               
           
            </div>
            <a target='blank' href="https://github.com/shubashdutta"><button className=' md:text-2xl text-lg md:ml-[77px] mt-1 ml-20 hover:bg-green-800 rounded-lg bg-indigo-900 text-white   border-2'>socre code</button></a>
        </div>
        <div className='w-[80%] ml-12 shadow-lg md:blur-[2px] hover:blur-none  items-center  h-[428px] md:w-[30%] rounded-xl md:h-[420px] border-2'>
        <img className=' rounded-lg  h-[200px] w-full' src="./e-com.png" alt="projectimg" />
            <div className='bg-white  mt-[3px]'>
                <h3 className='text-center text-md capitalize  font-semibold'>Returngiftnow || E-commerce</h3>
                <p className='px-6 '>During my internship, I developed 40% of an e-commerce website, utilizing React.js and Golang. My tasks included building a full website before the internship concluded.</p>
                </div>
            <a target='blank' href="https://github.com/shubashdutta"><button className=' md:text-2xl text-lg md:ml-20 mt-1  ml-20 hover:bg-green-800 rounded-lg bg-indigo-900 text-white  border-2'>socre code</button></a>
        </div>
    </div>
    </div>
    </>
  )
}

export default Myproject
