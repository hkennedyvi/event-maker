import React from 'react';
// import FacebookBtn from '../FacebookBtn';

function LoginForm(props) {
    return (
        <div>

            <form onSubmit={(e) => { props.handleSubmit(e) }} action="POST">
                <label htmlFor="email">EMAIL:</label><br />
                <input type="email" id="email" name="email" placeholder="Email here" /><br />
                <label htmlFor="password">PASSWORD:</label><br />
                <input type="password" id="password" name="password" placeholder="Password here" /><br />
                <input type="submit" value="Login" />
            </form>
            {/* <FacebookBtn /> */}
        </div>
    )
}

export default LoginForm;