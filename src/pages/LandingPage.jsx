import React from 'react'
import {Container, PostCard, PrimaryBtn, ScreenSplit } from '../components'
import HeroImage from "../assets/heroImage.svg"
import { ArrowRightIcon } from 'lucide-react'
import { useSelector } from 'react-redux';
import postServices from '../services/config';

const LandingPage = () => {
  const authStatus = useSelector(state => state.auth.status);
  const [posts, setPosts] = React.useState([])
console.log(authStatus);

  React.useEffect(() => {
    postServices.getAllPost().then((posts) => {
      if (posts) {
        console.log("???",posts);
        
        setPosts(posts.rows)
        console.log("///", posts.rows);
      }
    })
  }, [])

  if (posts) {
    return (<div className='w-full py-8'>
      <Container>
        <div className='w-full'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-full'>
              <PostCard title={post.title} content={post.content} slug={post.$id}  featuredImage={post.featuredImage}/>
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