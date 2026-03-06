import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, PrimaryBtn } from "../components";
import parse from "html-react-parser";
import {  useSelector } from "react-redux";
import postServices from "../services/config";
import fileService from "../services/file";

export default function Post() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const userData = useSelector((state) => state.auth.userData);


    const allPost = useSelector(state => state.post.posts)
    const post = allPost.find(post => post.$id == slug)

    useEffect(() => {

        if (!post) {
            setLoading(false)
        } else {
            setLoading(false)

        }

    }, [post, navigate])

    const isAuthor = post && userData ? post.userID === userData.$id : false;
    const deletePost = () => {

        postServices.DeletePost({ slug: post.$id }).then((status) => {
            if (status) {
                fileService.DeleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return loading ? (
        <div>Loading...</div>
    ) : !post ? (<div>
        <p>Post not found</p>
        <PrimaryBtn onClick={() => navigate("/")}>Go to Home Page</PrimaryBtn>
    </div>) : (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={`${fileService.FilePreview(post.featuredImage)}&mode=admin`}
                        alt={post.title}
                        className="rounded-xl"
                    />
                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex ">
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