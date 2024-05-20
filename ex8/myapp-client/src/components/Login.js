import React, { useState } from 'react';
import axios from 'axios';
/*
const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const user = {
            username,
            password
        };

        try {
            const res = await axios.post('http://localhost:8084/api/users/login', user);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="username" value={username} onChange={onChange} required />
            <input type="password" name="password" value={password} onChange={onChange} required />
            <button type="submit">Login</button>
        </form>
    );
};
*/
import React from 'react';

const Login = () => {
  const googleLogin = () => {
    window.location.href = 'http://localhost:8084/api/users/oauth2/google';
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={googleLogin}>Login with Google</button>
    </div>
  );
};


export default Login;
