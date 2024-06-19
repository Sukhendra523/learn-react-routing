import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from '../Layout';
import AuthRoute from '../HOC/AuthRoute';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';
import Posts from '../Pages/Post';
import PostDetails from '../Pages/PostDetails';
import { postCommentLoader, postLoader } from '../loaders';
import ErrorPage from '../Pages/ErrorPage';
import Product from '../Pages/Product';
import FilterPage from '../Pages/FilterPage';

const Router = () => {
    const router = createBrowserRouter([
        {
        path:'/',
          element: <AppLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              element: <AuthRoute><Home /></AuthRoute>,
              path: "/",
              children:[
                {
                    element: <Product />,
                    path:'/product'
                    
                },
                {
                    element: <FilterPage />,
                    path:'/filter'
                    
                },

              ]
            },
            {
              element: <Login />,
              path: "/login",
            },
            {
              element: <SignUp />,
              path: "/signup",
            },
            {
              element: <AuthRoute><Posts /></AuthRoute>,
              path: "/posts",
              loader: postLoader,
            },
            {
              element: <AuthRoute><PostDetails /></AuthRoute>,
              path: "/posts/:postId",
              loader: postCommentLoader,
            },
          ],
        },
      ]);
  return (
    <RouterProvider router={router} />
  )
}


// Traditional routing
// {/* <BrowserRouter>
// <AppLayout>
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/posts" element={<Posts />}  />
//     <Route path="/posts/:postId" element={<PostDetails />} />
//   </Routes>
// </AppLayout>
// </BrowserRouter> */}

export default Router