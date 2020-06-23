import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const [credentials2, setCredentials2] = useState({
        email: '',
        password: '',
    })

    const history = useHistory();

    const handleChanges = e => {
        setCredentials2({
            ...credentials2,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = e => {
        e.preventDefault();
        axiosWithAuth()
          .post('/user/login', credentials2)
          .then(res => {
              localStorage.setItem('token', res.data.token)
              history.push('/hub');
              console.log(res)
          })
          .catch(err => console.log('look!', err.response))
    }

    return (
        <form onSubmit={loginUser}>

            <input
             type='email'
             name='email'
             value={credentials2.email}
             placeholder='Email here'
             onChange={handleChanges}
            />

            <input
             type='password'
             name='password'
             placeholder='Password here'
             value={credentials2.password}
             onChange={handleChanges}
            />

            <button>Login!</button>


        </form>
    )
}

export default LoginForm