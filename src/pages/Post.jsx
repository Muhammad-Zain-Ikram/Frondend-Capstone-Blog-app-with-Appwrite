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
    cosnt 

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        async function fetchPost() {
            if (!slug) {
                navigate("/")
                return
            }

            const res = await postServices.getPost(slug)
            console.log(res, "kkkk");

            try {
                const res = await postServices.getPost(slug);

                if (!res) {
                    navigate("/");
                } else {
                    setPost(res);
                }
            } catch (error) {
                navigate("/");
            } finally {
                setLoading(false);
            }
        }
    

  fetchPost()
}, [slug, navigate])

console.log(post);


const deletePost = () => {
    postServices.DeletePost(post.$id).then((status) => {
        if (status) {
            appwriteService.deleteFile(post.featuredImage);
            navigate("/");
        }
    });
};

console.log("slgu found", post);
return post ? (
    <div className="py-8">
        <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                <img
                    src={fileService.FilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-xl"
                />

                {isAuthor && (
                    <div className="absolute right-6 top-6">
                        <Link to={`/edit-post/${post.$id}`}>
                            <PrimaryBtn bgColor="bg-green-500" className="mr-3">
                                Edit
                            </PrimaryBtn>
                        </Link>
                        <PrimaryBtn bgColor="bg-red-500" onClick={deletePost}>
                            Delete
                        </PrimaryBtn>
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
) : null;
}