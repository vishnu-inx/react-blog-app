import React, { useEffect, useState } from 'react';
import { Container, PostCard, PostsSkeleton } from '../components';
import blogService from "../appwrite/blog-service";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { blogData } from '../constant';
import { skeletonItems } from '../constant';
import { mainBannerImage } from '../constant';

function Home() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const isLoggedInUser = useSelector((state) => state.auth.status);

    useEffect(() => {
        if (isLoggedInUser) {
            blogService.getPosts()
                .then((posts) => {
                    if (posts) {
                        setPosts(posts.documents);
                    }
                })
                .finally(() => setLoading(false));
        }
    }, []);

    if (isLoggedInUser == false) {
        return (
            <div className="w-full py-12 text-center">
                <Container>
                    <main className="container mx-auto mt-4">
                        <div className="mb-8">
                            <img
                                src={mainBannerImage}
                                alt="Featured Post"
                                className="w-full h-64 object-cover rounded"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogData && blogData.map((blog) => (
                                <div key={blog.id} className="bg-gray-100 p-4 rounded shadow">
                                    <img
                                        src={blog.image}
                                        alt="Post 1"
                                        className="w-full h-40 object-cover rounded mb-4"
                                    />
                                    <h3 className="text-xl font-bold">{blog.title}</h3>
                                </div>
                            ))}
                        </div>

                        <div className='login-btn-wrapper mt-16' >
                            <Link to={"/login"}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 login-btn">
                                    Login to Read Blogs
                                </button>
                            </Link>
                        </div>
                    </main>
                </Container>
            </div>
        )
    };

    if (posts.length === 0 && !loading) {
        return (
            <div className="w-full py-56 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">
                                Posts not found! <Link to={'/add-post'}><button className="bg-blue-500 ml-5 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full">Add Post</button></Link>
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    };

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {loading ? (
                        skeletonItems.map((item, index) => (
                            <div key={index} className="p-4 w-1/4">
                                <PostsSkeleton />
                            </div>
                        ))
                    ) : (
                        posts.map((post) => (
                            <div key={post.$id} className='p-4 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    )}
                </div>
            </Container>
        </div>
    )
}

export default Home;