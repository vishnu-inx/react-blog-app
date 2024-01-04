import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import blogService from "../appwrite/blog-service";

function Post() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            blogService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        blogService.deletePost(post.$id).then((status) => {
            if (status) {
                blogService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex-col justify-center relative">
                    <img
                        src={blogService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl bg-cover h-80"
                    />

                    {isAuthor && (
                        <div className="absolute right-4 top-4">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-gray-700" className="mr-3 w-28 font-semibold">
                                    UPDATE
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" className='w-28 font-semibold' onClick={deletePost}>
                                DELETE
                            </Button>
                        </div>
                    )}

                    <div className="w-full mb-6 mt-10">
                        <h1 className="text-2xl font-bold text-left">{post.title}</h1>
                    </div>
                    <div className="browser-css text-left">
                        {parse(post.content)}
                    </div>
                </div>

            </Container>
        </div>
    ) : null;
}

export default Post;