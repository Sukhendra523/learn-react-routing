import React from 'react'
import { useLoaderData } from 'react-router-dom';
import PostCard from '../../Components/PostCard';
import GoBack from '../../Components/GoBack';

const Posts = () => {

    const posts = useLoaderData();

    return (
        <div>
            <GoBack />
            {
                posts.map(post => <PostCard key={post.id} post={post} />)
            }
        </div>
    )
}

export default Posts