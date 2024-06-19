import { Navigate } from 'react-router-dom';

const AuthRoute = ({children}) => {


    const isUserLogedIn = localStorage.getItem('isUserLogedIn');

    if (!isUserLogedIn) {
     return <Navigate to={'/login'} />
    }


  return (
    <>
    {children}
    </>
  )
}

export default AuthRoute