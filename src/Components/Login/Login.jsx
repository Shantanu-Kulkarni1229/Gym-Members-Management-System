import React from 'react'

const Login = () => {
    return (
        <div className="w-1/3 p-10 mt-20 ml-20 bg-gray-500 bg-opacity-80 h-fit ">
            <div className="font-sans text-Black text-center text-3xl">
                Login
            </div>
            <input type="text" className='w-full my-10 p-2 rounded-lg' placeholder='Enter User Name' />
            <input type="password" className='w-full mb-10 p-2 rounded-lg' placeholder='Enter Password' />
            <div className="p-2 w-[80%] border-w bg-slate-800 mx-auto rounded-lg text-white text-center text-lg hover:bg-white hover:text-slate-800 font-semibold curson-pointer ">Login</div>
        </div>
    )
}

export default Login