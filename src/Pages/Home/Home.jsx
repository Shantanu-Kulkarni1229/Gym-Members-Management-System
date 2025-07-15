import React from 'react'
import Login from '../../Components/Login/Login'
import SignUp from '../../Components/Sign-Up/SignUp'

const Home = () => {
    return (
        <div className='w-full h-[100vh]'>
            <div className=" border-2 border-slate-800 bg-slate-800 text-white text-center p-4 shadow-lg font-bold text-2xl">
                Welcome to Gym Management System
            </div>
            <div className="w-full bg-cover flex justify-center  h-[100%] bg-[url('https://media.istockphoto.com/id/2152164282/photo/close-up-of-a-female-hand-picking-up-a-heavy-dumbbell.jpg?s=2048x2048&w=is&k=20&c=AVBrIbUGXEh3WjPoFlXphiT5xVhEfBEFzqSdp0lI7gs=')]  ">
                <div className="w-full lg:flex gap-20">
                    <Login />


                    <SignUp />
                </div>
            </div>
        </div>
    )
}

export default Home