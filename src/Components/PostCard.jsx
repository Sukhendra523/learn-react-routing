import React from 'react'
import { Link } from 'react-router-dom'

const PostCard = ({ post }) => {
    return (
        <div className='post-card'>
            <h2 className="text-wrap">{post.title}</h2>
            <p className="text-wrap">{post.body}</p>
            <Link to={`/posts/${post.id}`}> view post Comment </Link>
        </div>
    )
}

export default PostCard