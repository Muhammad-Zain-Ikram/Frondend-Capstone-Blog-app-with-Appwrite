import React from 'react'
import { Footer, Navbar, PrimaryBtn, ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import { ArrowBigLeftIcon, ArrowRightIcon } from 'lucide-react'
console.log(HeroImage);

const LandingPage = () => {
  return (
    <>
        <Navbar/>
        <ScreenSplit
    image={HeroImage}
    badge="Free to use ✦"
    heading="Write Your Thoughts"
    subText="A modern blogging platform built for creators."
    actions={<PrimaryBtn icon={<ArrowRightIcon size={18}/>}>Write Blog</PrimaryBtn>}

/>
<Footer/>
    </>
  )
}

export default LandingPage