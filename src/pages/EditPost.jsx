import { useEffect } from 'react'
import { PostForm, Container } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
const EditPost = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const allPost = useSelector(state => state.post.posts)
  const post = allPost.find(post => post.$id == slug)


  useEffect(() => {

    if (!slug && !post) {
      navigate("/");
    }

  }, [post, navigate])
  return (
    <Container>
      {post ? <PostForm post={post} /> : "Post not found"}
    </Container>
  )
}

export default EditPost