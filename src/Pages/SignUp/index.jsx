import React from 'react'
import {  useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const onSubmitHandler  = (e) => {
        e.preventDefault()
        if(e.target.email.value && e.target.password.value  && e.target.name.value ){
            localStorage.setItem('isUserLogedIn',true);
            navigate('/');

        }
    }

  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <input type="email" name="email"  />
            <input type="text" name="name"  />
            <input type="password" name="password" id="" />
            <button type="submit">SignUp</button>
        </form>
    </div>
  )
}

export default SignUp