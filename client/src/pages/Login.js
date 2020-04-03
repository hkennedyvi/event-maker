import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        console.log("BEFORE POST", userData)
        axios
            .post("/api/auth/register_login", userData)
            .then(res => {
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