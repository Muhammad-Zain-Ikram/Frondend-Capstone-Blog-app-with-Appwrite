import React from 'react'
import { Footer, Navbar, PrimaryBtn, ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import { ArrowBigLeftIcon, ArrowRightIcon } from 'lucide-react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/SignUp'

const LoginPage = () => {
  return (
    <>
        <Navbar/>
        <ScreenSplit
        image={HeroImage}
   
    form={<Login/>}
    />
<Footer/>
    </>
  )
}

export default LoginPage