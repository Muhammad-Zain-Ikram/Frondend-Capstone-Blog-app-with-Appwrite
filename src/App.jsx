import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import authService from "./services/auth" 
import {login, logout} from "./store/features/auth.slice"
import Logo from './components/Logo'
import Navbar from './components/header/Navbar'

import {LogOut, LogOutIcon, PenSquare} from "lucide-react" 
import { LandingPage } from './pages'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((data)=> {
      if (data) {
        dispatch(login({data}))
      } else {
        dispatch(logout())
      }
    })
    .catch((e)=>{
      console.error(e);
      
    })
    .finally(()=> setLoading(false))
  },[])
  return (
    <>
     {/* <LandingPage/> */}
     <SignUpPage/>
     <LoginPage/>
    </>
  )
}

export default App
