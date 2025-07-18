import React, {useState,useEffect} from 'react'
import HomeIcon from '@mui/icons-material/Home';
import Groups2Icon from '@mui/icons-material/Groups2';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
    const [greeting, setGreeting] = useState('')

const greetingMessage = () => {
const currentHour = new Date().getHours();
if (currentHour < 12) {
  setGreeting('Good Morning ☀️');
} else if (currentHour < 18) {
  setGreeting('Good Afternoon ☀️');
} else if (currentHour < 22) {
  setGreeting('Good Evening ☀️');
}else {
  setGreeting('Good Night 🌙' );
}

}

useEffect(() => {
 
greetingMessage();
  
}, [])



return (
    <div className='w-1/4 border-2 bg-black text-white p-5 font-extralight h-[100vh] '>
        <div className="text-center font-sans text-4xl">
            powerZone 
        </div>
        <div className='flex gap-5 my-5 rounded-lg '>
            <div className='w-[100px] h-[100px] '>
                <img src="https://imgs.search.brave.com/oVGye9BEjtVcsVzP4tV0rERIR59vc4XD3PmI0mjEm4M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMw/MzA2NTQyMC9waG90/by9lbXB0eS1neW0u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWl2ZWxXdmFNSVVI/bHlTVDZEWWhQaHBf/aDd4U0s4cTRYbWRM/LTVUcWNYVEE9" alt="gym pic " className='w-full h-full rounded-md' />
            </div>
            <div>
                <div className='text-2xl '>
                    {greeting}
                </div>
                <div className='text-lg mt-1 font-bold'>
                    admin
                </div>
            </div>
        </div>
        <div className="mt-10 py-10  border-t-2 border-gray-700">
            <div className='flex gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover-text-black'>
                <div><HomeIcon /></div>
                <div>Dashboard</div>
            </div>
            <div className='flex mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover-text-black'>
                <div><Groups2Icon /></div>
                <div>Members</div>
            </div>
            <div className='flex mt-5 gap-8 font-semibold text-xl bg-slate-800 p-3 rounded-xl cursor-pointer hover:bg-blue-500 hover-text-black'>
                <div><LogoutIcon /></div>
                <div>Logout</div>
            </div>
        </div>

    </div>
  )
}

export default Sidebar