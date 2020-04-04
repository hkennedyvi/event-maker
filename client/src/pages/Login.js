import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import SignUpForm from '../components/SignUpForm';
import axios from 'axios';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
function Login() {
    const [state, setState] = useState( {
        open: true
    });
    const Slide = require('../components/Carousel/Slide').default;
    const { red, blue, green } = require('@material-ui/core/colors');
    const Button = require('@material-ui/core/Button').default;
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
<div style={{ position: 'relative', width: '100%', height: 500 }}>
        <SignUpForm handleSubmit={handleSubmit} />
  <Button onClick={() => setState({ open: true })}>Open carousel</Button>
  <AutoRotatingCarousel
    label='Get started'
    open={state.open}
    onClose={() => setState({ open: false })}
    onStart={() => setState({ open: false })}
    style={{ position: 'absolute' }}
  >
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_79394/youtube.png' />}
      mediaBackgroundStyle={{ backgroundColor: red[400] }}
      style={{ backgroundColor: red[600] }}
      title='This is a very cool feature'
      subtitle='Just using this will blow your mind.'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png' />}
      mediaBackgroundStyle={{ backgroundColor: blue[400] }}
      style={{ backgroundColor: blue[600] }}
      title='Ever wanted to be popular?'
      subtitle='Well just mix two colors and your are good to go!'
    />
    <Slide
      media={<img src='http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png' />}
      mediaBackgroundStyle={{ backgroundColor: green[400] }}
      style={{ backgroundColor: green[600] }}
      title='May the force be with you'
      subtitle='The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe.'
    />
  </AutoRotatingCarousel>
</div>
    )
}
export default Login;