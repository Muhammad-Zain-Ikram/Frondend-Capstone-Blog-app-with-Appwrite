import { ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import Signup from '../components/auth/SignUp'

const SignUpPage = () => {
  return (
    <>
      <ScreenSplit
        image={HeroImage}
        form={<Signup />}
      />
    </>
  )
}

export default SignUpPage