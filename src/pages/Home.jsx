import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import blogService from "../appwrite/blog-service";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

function Home() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const isLoggedInUser = useSelector((state) => state.auth.status);


    useEffect(() => {
        if (isLoggedInUser) {
            blogService.getPosts().then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                    setIsLoading(false);
                }
            });
        }
    }, []);

    if (isLoggedInUser == false) {
        return (
            <div className="w-full py-32 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    };

    if (posts.length === 0 && !isLoading) {
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
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home;