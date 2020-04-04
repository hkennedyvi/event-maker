import React from 'react';
<<<<<<< HEAD
import FacebookBtn from '../FacebookBtn';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormHelperText, Card, CardActions, CardContent, Typography, Box } from '@material-ui/core';
import './SignUpForm.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: 'flex',
            flexDirection: 'column',

        },
        
    },

    textfield: {
        marginBottom: 15,
    }


    
}));
=======
// import FacebookBtn from '../FacebookBtn';
>>>>>>> master

function SignUpForm(props) {
    const classes = useStyles();
    return (
        <div className={classes.root} >
            <Box display="flex" >
            <Card className={classes.cardRoot}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Sign In
                    </Typography>
                    <CardActions>
            <form className={classes.formRoot}>
                <TextField
                    className={classes.textfield}
                    required
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    className={classes.textfield}
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </form>
            </CardActions>
            </CardContent>
            </Card>
            </Box>
            <form onSubmit={(e) => { props.handleSubmit(e) }} action="POST">
                <label htmlFor="email">EMAIL:</label><br />
                <input type="email" id="email" name="email" placeholder="Email here" /><br />
                <label htmlFor="password">PASSWORD:</label><br />
                <input type="password" id="password" name="password" placeholder="Password here" /><br />
                <label htmlFor="password">CONFIRM PASSWORD:</label><br />
                <input type="password" id="confirm" name="confirm" placeholder="Confirm password here" /><br /><br />
                <input type="submit" value="Submit" />
            </form>
            {/* <FacebookBtn /> */}
        </div>
    )
}

export default SignUpForm;