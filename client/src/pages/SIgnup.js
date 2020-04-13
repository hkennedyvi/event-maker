import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';
import axios from 'axios';

function Signup() {

    const [user, setUser] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
       
        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,
            confirmPassword: e.target.confirm.value
        };

        setUser(userData);
       
        if (userData.password !== userData.confirmPassword) {
            alert("passwords don't match");
        } else {
           
            axios
                .post("api/auth/register", userData)
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
    };

    return (
        <SignUpForm handleSubmit={handleSubmit} />
    )
}

export default Signup;