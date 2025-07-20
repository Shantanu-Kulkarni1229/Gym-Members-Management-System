import React,{useState , useEffect} from 'react'
import Home from './Pages/Home/Home'
import { Routes, Route , useNavigate } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Sidebar from './Components/Sidebar/Sidebar.jsx'



const App = () => {
const navigate = useNavigate()
const [isLogin, setIsLogin] = useState(false)

useEffect(()=> {
  let isLoggedIn = sessionStorage.getItem('isLogin')
  if(isLoggedIn) {
    setIsLogin(true)
    navigate('/dashboard')
  } 
}, [sessionStorage.getItem('isLogin')])


  return (
    <div className='flex'>
    
      {isLogin && <Sidebar />}
      
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
     
    </div>
  )
}

export default App