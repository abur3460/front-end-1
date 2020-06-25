import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const EditUser = () => {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    })

    return (
        <LoginForm />
    )
}