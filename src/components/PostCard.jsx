import React from 'react';
import { Link } from 'react-router-dom';
import blogService from '../appwrite/blog-service';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 sm:h-64 md:h-52'>
                <div className='w-full justify-center mb-4'>
                    <img src={blogService.getFilePreview(featuredImage)} alt={title}
                        className='rounded-xl bg-cover w-full h-32 sm:h-48 md:h-32' />
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard;