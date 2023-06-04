import React from 'react'
import Image from "next/image";

const Banner = () => {
  return (
    // <div className='container'>
    //   <div className='left'>
    //     <div className='content'>
    //     <p>Launch your career with our Full Stack Development course and 100% placement guarantee</p>
    //     </div>
    //     {/* <div className='en_button'> */}
    //   <button
    //     type="button"
    //     className={`flex w-full justify-center bg-blue-800 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait`}
    //   >Enroll Now</button>
    //   {/* </div> */}
    //   </div>
    //   <div className='right'>
    //     <div className='h-200 w-200 '>
    //   <Image 
    //     // className='banner_img'
    //     className="banner_img rounded-3xl"
    //     alt="TSC Logo"
    //     src="/images/img_right.png"
    //     width="400"
    //     height="100"
    //   />
    //   </div>
    //   </div>
    // </div>

     <div className='h-screen flex items-center gap-10 flex-wrap max-w-7xl mx-auto'>
      <div className='flex flex-col justify-center flex-1 basis-[300px]'>
        
        <h2>Launch your career with our <strong> Full Stack Development</strong> course and <strong>100% placement guarantee</strong></h2>
  
      <button
        type="button"
        className={`flex w-full justify-center bg-blue-800 px-4 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait`}
      >Enroll Now</button>
      </div>
      <div className='flex flex-1 relative aspect-[3/4] basis-[300px] rounded-3xl overflow-hidden '>
      <Image 
        alt="TSC Logo"
        src="/images/img_right.png"
        fill
      />
      </div>
    </div>
  )
}

export default Banner
