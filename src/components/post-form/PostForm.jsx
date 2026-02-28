import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import fileService from '../../services/file'
import postServices from '../../services/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Select from '../Select'
const PostForm = ({post}) => {
    const {register, handleSubmit, setValue, control, watch,getValues,setError} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });
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

    const slugTransform = useCallback(
      (val) => {
        if(val && typeof val == "string")
        return val.toLowerCase().trim().replace(/[^a-zA-Z\d]+/g, "-")
    return ""
      },
      [],
    )

    useEffect(() => {
      const subscription = watch((value,{name})=>{
            if(name == "title"){
                setValue("slug", slugTransform(value.title),{shouldValidate:true})
            }
      })
    
      return () => {
        subscription.unsubscribe()
      }
    }, [watch,slugTransform,setValue])
    
    
  return (
   <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm