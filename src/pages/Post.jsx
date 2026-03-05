import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, PrimaryBtn } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import postServices from "../services/config";
import fileService from "../services/file";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const userData = useSelector((state) => state.auth.userData);
    // console.log( post.userID);
    
    useEffect(() => {
        setLoading(true);
    async function fetchPost() {
        try {
            console.log("Fetching post with slug:", slug); 
            const res = await postServices.getPost(slug);
            console.log("API Response:", res);            
            console.log("Response type:", typeof res);   
            
            if (!res) {
                console.log("res is falsy, navigating to /"); 
                navigate("/");
            } else {
                setPost(res);
            }
        } catch (error) {
            console.log("ERROR caught:", error);           
            console.log("Error message:", error.message);
            navigate("/");
        } finally {
            setLoading(false);
        }
    }
    fetchPost();
}, [slug]); 

const isAuthor = post && userData ? post.userID === userData.$id : false;
    const deletePost = () => {
        console.log("post", post.$id);
        
        postServices.DeletePost({slug:post.$id}).then((status) => {
            if (status) {
                console.log("notapp");
                fileService.DeleteFile(post.featuredImage); 
                navigate("/");
                console.log("app");
                
            }
        });
    };

    return loading ? (
        <div>Loading...</div>
    ) : !post ? <p>Post not found</p>:(
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={`${fileService.FilePreview(post.featuredImage)}&mode=admin`}
                        alt={post.title}
                        className="rounded-xl"
                    />
                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <PrimaryBtn bgColor="bg-green-500" className="mr-3">Edit</PrimaryBtn>
                            </Link>
                            <PrimaryBtn bgColor="bg-red-500" onClick={deletePost}>Delete</PrimaryBtn>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    );
}