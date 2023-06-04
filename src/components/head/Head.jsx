import React from 'react'
import Image from "next/image";
import Button from '../button';
// import "./Head.css"
const Head = () => {
  return (
    <div>
      <div className='header'>
        <nav className='navbar'>
            <ul className='list'>
                <li><Image 
                    className='img'
                    alt="TSC Logo"
                    src="/images/tsc_logo.png"
                    width="200"
                    height="50"
                /></li>
                <li>Boootcamps</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contact</li>
                {/* <li> <Button bgColor="bg-blue-500"> Hire out graduates button </Button></li> */}
                <li id='1'> <button
                        type="button"
                        className={`flex w-full justify-center rounded-3xl bg-blue-800 px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 hover:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait`}
                    >HIRE OUR GRADUATES</button></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Head
