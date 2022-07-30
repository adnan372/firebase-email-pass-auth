import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        <center>
        <h1 className='font-bold text-center'>Home</h1>
        <h1 className='text-3xl text-green-600 mt-40'>Loggeg in  successfully</h1>
        <button className='rounded-sm p-1 mt-16 bg-red-500 text-white  content-center' onClick={()=> {navigate('/')}}>Log Out</button>
        </center>
    </div>
  )
}

export default Home