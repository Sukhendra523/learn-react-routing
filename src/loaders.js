import axios from 'axios';

export const postLoader = async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return response.data;
};

export const postCommentLoader = async ({ params }) => {
  const { postId } = params;

  const [postResponse, commentsResponse] = await Promise.all([
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  ]);

  return {
    post: postResponse.data,
    comments: commentsResponse.data
  };
};
