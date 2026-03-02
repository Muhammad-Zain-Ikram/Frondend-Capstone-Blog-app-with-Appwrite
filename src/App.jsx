import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import authService from "./services/auth" 
import {login, logout} from "./store/features/auth.slice"
import  conf from "./conf/index"
import { Navbar,Footer } from './components'
import { Outlet } from 'react-router-dom'

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
console.log(conf);

  return (
   <>
      <Navbar/>
          <Outlet/>
      <Footer/>
   </>
  )
}

export default App
