import React, { useEffect, useState } from 'react'
import { PostForm,Container } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import postServices from '../services/config'
const AddPost = () => {
    const [post , setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            postServices.getPost(slug).then((post)=>{
                setPost(post)
            })
        }
        else {
            navigate("/")
        }
    },[])


  return (
    <Container>
        {post ? <PostForm post={post}/> : "Post not found"}
    </Container>
  )
}

export default AddPost