import React ,{useState} from 'react'
import './Signup.css'
import Modal from '../Modal/Modal.jsx'
import ForgotPassword from '../ForgotPassowrd/ForgotPassword.jsx'
const SignUp = () => {
    const [forgotPassword, setForgotPassword] = useState(false)

    const handleclose = () => {
        setForgotPassword(prev => !prev)
    }

  


    return (
        <div className="customsignup w-1/3 p-10 mt-20 ml-20 bg-gray-500 bg-opacity-80 h-[450px] overflow-y-auto">
            <div className="font-sans text-Black text-center text-3xl">
                Login
            </div>
            <input type="email" className='w-full my-10 p-2 rounded-lg' placeholder='Enter Email' />
            <input type="text" className='w-full mb-10 p-2 rounded-lg' placeholder='Enter Gym Name' />
            <input type="text" className='w-full mb-10 p-2 rounded-lg' placeholder='Enter User Name' />
            <input type="password" className='w-full mb-10 p-2 rounded-lg' placeholder='Enter Password' />
            <input type="file" className='w-full mb-10 p-2 rounded-lg' />
            <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltc3xlbnwwfHwwfHx8MA%3D%3D" alt="default image " className='h-[150px] w-[250px] mb-10' />
            <div className="p-2 w-[80%] border-w bg-slate-800 mx-auto rounded-lg text-white mb-10  text-center text-lg hover:bg-white hover:text-slate-800 font-semibold curson-pointer ">Register</div>
            <div className="p-2 w-[80%] border-w mb-10 bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-slate-800 font-semibold curson-pointer " onClick={() => handleclose() }>Forgot Password</div>
            {forgotPassword && <Modal header="Forgot Password" handleclose={handleclose} content={<ForgotPassword />} />}
            
        </div>
    )
}

export default SignUp