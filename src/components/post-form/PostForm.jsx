import React from 'react'
import { useForm } from 'react-hook-form'
import fileService from '../../services/file'
import postServices from '../../services/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PostForm = ({post}) => {
    const {register, handleSubmit, setValue, control, watch,getValues,setError} = useForm()
   const navigate = useNavigate()
   const authUser = useSelector(state => state.auth.userData)

    const submit = async (data)=>{
        if(post){
            const file = data.image[0]?await fileService.fileUpload(data.image[0]):setError("file Error", "Issue in uploading file")
            
            if(file){
                await fileService.DeleteFile(post.featuredImage)
            }
            
            const updatedPost =  await postServices.UpdatePost(post.$id,{
                ...data,
                featuredImage: file ? file.$id : undefined
            })
            
            if(updatedPost) navigate(`/post/${updatedPost.$id}`)
                
            }
            else{
                const file = data.image[0]?await fileService.fileUpload(data.image[0]):setError("file Error", "Issue in uploading file")
                
                if(file) {
                    const post = await postServices.createPost({
                        ...data,
                        featuredImage: file.$id,
                        UserID: authUser.$id
                    })
                    if(post){
                        navigate(`/post/${post.$id}`)
                    }
                }
            }
    }
  return (
    <div>

    </div>
  )
}

export default PostForm