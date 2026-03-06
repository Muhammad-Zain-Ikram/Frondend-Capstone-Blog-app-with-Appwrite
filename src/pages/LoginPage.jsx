import { ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import Login from '../components/auth/Login'

const LoginPage = () => {
  return (
    <>
      <ScreenSplit
        image={HeroImage}
        form={<Login />}
      />
    </>
  )
}

export default LoginPage