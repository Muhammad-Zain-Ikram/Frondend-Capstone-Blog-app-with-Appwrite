import { Container, PostCard, PrimaryBtn, ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import { ArrowRightIcon } from 'lucide-react'
import { useSelector } from 'react-redux';


const LandingPage = () => {
  const posts = useSelector(state => state.post.posts)


  if (posts) {
    return (<div className='w-full py-8'>
      <Container>
        <div className='w-full'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-full'>
              <PostCard title={post.title} content={post.content} slug={post.$id} featuredImage={post.featuredImage} />
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