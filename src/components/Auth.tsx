import React from 'react'
import { Landing } from './Landing'
import Home from './Home'

function Auth() {
  return (
    <div>

        <div className='h-[100vh] bg-[#040A20]   p-8'>
        <div className=' bg-[#1A1E39]   rounded-lg p-1'>
        <Home></Home>

        </div> 
        <h1 className=' mt-[2rem] text-white text-center font-bold text-xl'>Welcome to Live chat! </h1>
        <div className='flex justify-center items-center  h-[90%]'>
        <Landing></Landing>
        </div>
        
        </div>
    </div>
  )
}

export default Auth