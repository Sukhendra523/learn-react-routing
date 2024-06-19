import React from 'react'
import { useLoaderData } from 'react-router-dom'
import GoBack from '../../Components/GoBack';

const PostDetails = () => {

  const { post, comments } = useLoaderData();



  return (
    <div>
      <GoBack />
      <div>
          {post && (
            <div className="post-card">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )}
          <h2>Comments</h2>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}</strong>: {comment.body}
              </li>
            ))}
          </ul>
        </div>



    </div>
  )
}

export default PostDetails