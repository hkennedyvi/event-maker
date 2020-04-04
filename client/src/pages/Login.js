import React, { useState } from 'react';
// import { Route, Redirect } from "react-router-dom";
import SignUpForm from '../components/SignUpForm';
import axios from 'axios';

function Login() {

    const [user, setUser] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.password)
        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirm.value
        };

        setUser(userData);
        if (userData.password !== userData.confirmPassword) {
            alert("passwords don't match");
        } else {
            // console.log("BEFORE POST", userData)
            axios
                .post("/api/auth/register_login", userData)
                .then(res => {
                    if (res.data.success === true) {
                        //    console.log("YIPEE")
                        window.location = '/home';
                    }
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.response);
                });
        }
    };

    return (
        <SignUpForm handleSubmit={handleSubmit} />
    )
}

export default Login;