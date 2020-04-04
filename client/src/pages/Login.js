import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import SignUpForm from '../components/SignUpForm';
import axios from 'axios';

function Login() {

    const [user, setUser] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        setUser(userData);
        
        console.log("BEFORE POST", userData)
        axios
            .post("/api/auth/register_login", userData)
            .then(res => {
                console.log("USER= ", user)
                console.log("RESULT DATA", res.config.data);
                console.log("AFTER POST", userData);
               
                
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    };

    return (
        <SignUpForm handleSubmit={handleSubmit} />
    )
}

export default Login;