import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        };
        console.log("hi, worked")
        console.log(userData)
        console.log(e.target.email.value, e.target.password.value)
    };

    return (
        <SignUpForm handleSubmit={handleSubmit} />
    )
}

export default Login;