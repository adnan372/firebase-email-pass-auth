import React , {useState }  from 'react'
import { useNavigate } from 'react-router';
import {Link} from 'react-router-dom'
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from '../firebase';
import { Navigate } from 'react-router-dom';

const SignUp = () => {
    const [email,setEmail] = useState("");
    const [pass , setPass] = useState("");
    const [rightdata , setRightdata] = useState(true);
    const navigate = useNavigate();

    const singup = () => {
    const auth = getAuth();
        // e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            email,
            pass
        ).then((user) => {
            setRightdata(true)
            navigate('home')
            console.log(user)
        }).catch((error) => {
            setRightdata(false)
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
        })
    }


    return (
    
    <div>
        <center className="mt-52">

        <h1 className='text-center text-4xl font-bold mb-8 text-2xl'>LogIn</h1>
        <div className="container flex flex-col justify-center items-center">
            <input onChange={(e) => {setEmail(e.target.value)}} className='border my-1 rounded-md p-1'  type="text" placeholder='Enter your email' />
            <input onChange={(e) => {setPass(e.target.value)}} className='border my-1 rounded-md p-1'   type="password" placeholder='Enter your Password' />
            <p className='text-red-600'
            style={rightdata ? {display : 'none'} : {display : 'block'} }
            >
                *Please enter valid credential
                </p>
            <button onClick={singup} className='bg-green-600 text-white rounded-md px-2 mt-5'>Log In</button>
            <p className='mt-4'>Don't have account ? <Link to='signup'><span className='text-blue-700'>Sign Up</span></Link></p>
        </div>
        </center>

    </div>
  )
}

export default SignUp