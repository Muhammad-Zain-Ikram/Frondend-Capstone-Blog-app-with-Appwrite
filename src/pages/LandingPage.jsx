import React from 'react'
import { Footer, Navbar, PrimaryBtn, ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import { ArrowBigLeftIcon, ArrowRightIcon } from 'lucide-react'
import { useSelector } from 'react-redux';
import postServices from '../services/config';

const LandingPage = () => {
  const authStatus = useSelector(state => state.auth.authStatus);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    postServices.getAllPost().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (authStatus) {
    retrun(<div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>)
  }

  return (<ScreenSplit
    image={HeroImage}
    badge="Free to use ✦"
    heading="Write Your Thoughts"
    subText="A modern blogging platform built for creators."
    actions={<PrimaryBtn icon={<ArrowRightIcon size={18} />}>Write Blog</PrimaryBtn>}
  />)
  }
  export default LandingPage;