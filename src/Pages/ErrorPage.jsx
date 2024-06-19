import React from 'react'
import { useRouteError } from 'react-router-dom'
import GoBack from '../Components/GoBack';

const ErrorPage = () => {
   const error = useRouteError();
  return (
    <div>
    <h1>Something went wrong</h1>
    <p>{error.data || error.message}</p>

    <GoBack />
  </div>
  )
}

export default ErrorPage