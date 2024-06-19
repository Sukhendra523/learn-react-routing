import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const onSubmitHandler  = (e) => {
        e.preventDefault()
        if(e.target.email.value && e.target.password.value){
            localStorage.setItem('isUserLogedIn',true);
            navigate('/');
        }

    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input type="email" name="email"  />
            <input type="password" name="password" id="" />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login