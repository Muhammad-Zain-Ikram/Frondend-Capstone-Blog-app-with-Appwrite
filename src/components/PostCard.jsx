import Container from './container/container'
import PrimaryBtn from './buttons/PrimaryBtn'
import { Link } from 'react-router-dom'
import fileService from '../services/file';
import parse from "html-react-parser"
const PostCard = ({title, content,slug,featuredImage}) => {
  const imgSrc = featuredImage ? `${fileService.FilePreview(featuredImage)}&mode=admin` : null;
  // Extract first 20 characters from HTML content
  const plainText = content ? content.replace(/<[^>]*>/g, '').substring(0, 20) : '';

  return (
    <Container>
        <div className='w-full p-4 my-4 rounded-lg border border-gray-300 bg-white shadow-sm'>
            <div className="flex gap-4 items-start flex-row">
            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0">
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={title || 'post image'}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 rounded-md flex items-center justify-center text-gray-500 text-xs">No image</div>
              )}
            </div>
            <div className="flex-1 flex flex-col">
                <h2 className='text-xl text-[#1f1e1e] font-bold font-mono line-clamp-2'>{title}</h2>
                <p className='text-sm my-7 text-gray-700'>{plainText}...</p>
                <Link to={`/post/${slug}`}>
                  <PrimaryBtn size='md' className='my-2'>Read More</PrimaryBtn>
                </Link>
            </div>
        </div>
    </div>
    </Container>
  )
}

export default PostCard