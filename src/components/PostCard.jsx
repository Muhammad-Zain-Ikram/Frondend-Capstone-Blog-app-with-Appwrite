import Container from './container/container'
import PrimaryBtn from './buttons/PrimaryBtn'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {

  return (
    <Container>
    <div className='w-full  p-4 my-4 rounded-lg border-2 border-black-950'>
        <div className="flex justify-around items-center flex-col md:flex-row">
        <div className="my-2 w-full lg:w-1/3"><img src={post.featuredImage} alt="" width={500}/></div>
        <div className="mx-4 w-full lg:w-1/2">
            <h2 className=' text-2xl text-[#1f1e1e] font-bold font-mono text-justify'>{post.title}</h2>
            <p className='text-base my-3 text-justify'>{post.content}</p>
            <Link to={`/blog/${post.slug}`}>
            <PrimaryBtn
            size='md'
            className='my-3 mx-1'
            >Read More</PrimaryBtn>
            </Link>
        </div>
        </div>
    </div>
    </Container>
  )
}

export default PostCard