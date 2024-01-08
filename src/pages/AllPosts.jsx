import React, { useState, useEffect } from 'react';
import { Container, PostCard, PostsSkeleton } from '../components';
import blogService from "../appwrite/blog-service";
import { Link } from 'react-router-dom';
import { skeletonItems } from '../constant';

function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        blogService.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents);
                }
            })
            .finally(() => setLoading(false));
    }, []);

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

    return posts ? (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {loading ? (
                        skeletonItems.map((item, index) => (
                            <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                                <PostsSkeleton />
                            </div>
                        ))
                    ) : (
                        <>
                            {posts.map((post) => (
                                <div key={post.$id} className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
                                    <PostCard {...post} />
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </Container>
        </div>
    ) : null
}

export default AllPosts;