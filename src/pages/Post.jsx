import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container, EditPostSkeleton } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import blogService from "../appwrite/blog-service";

function Post() {

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [isAuthor, setIsAuthor] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (slug) {
            blogService.getPost(slug)
                .then((post) => {
                    if (post) {
                        setPost(post)

                        const isAuthor = post && userData ? post.userId === userData.$id : false;
                        setIsAuthor(isAuthor);
                    }
                    else {
                        navigate("/")
                    };
                })
                .finally(() => setLoading(false));
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

    return (
        <div className="py-8">
            <Container>
                {loading ? (
                    <EditPostSkeleton />
                ) : (
                    <div className="w-full flex flex-col justify-center relative">

                        <div className="relative">
                            <img
                                src={blogService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="rounded-xl bg-cover h-80 w-full object-center object-cover post-image"
                            />
                        </div>

                        {showConfirmation && (
                            <div className="confirm-dialog fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 bg-gray-800 bg-opacity-75">
                                <div className="bg-white p-4 rounded shadow-md">
                                    <p className="text-lg font-semibold mb-4">Are you sure you want to delete?</p>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={deletePost}
                                            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                        >
                                            Confirm
                                        </button>
                                        <button
                                            onClick={() => setShowConfirmation(false)}
                                            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="w-full mb-6 mt-10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">{post.title}</h1>
                        </div>

                        <div className="browser-css text-left max-w-screen-md mx-auto">
                            {parse(post.content)}
                        </div>

                        <div className='flex justify-end m-auto gap-5 w-3/6 mt-5'>
                            {isAuthor && (
                                <>
                                    <div className="w-full">
                                        <Link to={`/edit-post/${post.$id}`} className="w-full">
                                            <Button bgColor="bg-gray-700" className="w-full font-semibold">
                                                UPDATE
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className='w-full'>
                                        <Button bgColor="bg-red-500" className='w-full' onClick={() => setShowConfirmation(true)}>
                                            DELETE
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Post;