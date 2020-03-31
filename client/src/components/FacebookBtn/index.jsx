import React from 'react';
import FacebookLogin from 'react-facebook-login';

class FacebookBtn extends React.Component {
    responseFacebook(response) {
        console.log(response);
    }

    render() {
        return (
            <FacebookLogin
                appId="213985600016832"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                icon="fa-facebook"
            />
        )
    }
}

export default FacebookBtn;