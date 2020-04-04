import React from 'react';
import FacebookBtn from '../FacebookBtn';

function SignUpForm(props) {
    return (
        <div>

            <form onSubmit={(e) => { props.handleSubmit(e) }} action="POST">
                <label for="email">EMAIL:</label><br />
                <input type="email" id="email" name="email" placeholder="Email here" /><br />
                <label for="password">PASSWORD:</label><br />
                <input type="password" id="password" name="password" placeholder="Password here" /><br /><br />
                <input type="submit" value="Submit" />
            </form>
            {/* <FacebookBtn /> */}
        </div>
    )
}

export default SignUpForm;