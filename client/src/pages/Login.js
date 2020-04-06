import React, { useState } from 'react';
// import { Route, Redirect } from "react-router-dom";
import LoginForm from '../components/LoginForm';
import axios from 'axios';

function Login() {

    const [user, setUser] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        setUser(userData);
        axios
            .post("/api/auth/login", userData)
            .then(res => {
                if (res.data.success === true) {

                    window.location = '/home';
                }
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    }
    return (

        <LoginForm handleSubmit={handleSubmit} />
        <div className="signUpForm" >
            <SignUpForm handleSubmit={handleSubmit} />
        </div>

    )
};

export default Login;