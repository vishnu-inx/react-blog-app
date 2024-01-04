import React, { useEffect, useState } from 'react';
import { Container, PostForm } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import blogService from "../appwrite/blog-service";

function EditPost() {

    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            blogService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            })
        } else {
            navigate('/');
        }
    }, [slug, navigate]);

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost;