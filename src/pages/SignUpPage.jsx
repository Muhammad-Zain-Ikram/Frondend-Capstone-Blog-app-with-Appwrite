import React from 'react'
import { Footer, Navbar, PrimaryBtn, ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import { ArrowBigLeftIcon, ArrowRightIcon } from 'lucide-react'
import Login from '../components/auth/Login'
import Signup from '../components/auth/SignUp'

const SignUpPage = () => {
  return (
    <>
        <Navbar/>
        <ScreenSplit
        image={HeroImage}
  //   heading="Share your thoughts with the world"
  // subText="Create an account and start writing today."
    form={<Signup/>}
    />
<Footer/>
    </>
  )
}

export default SignUpPage