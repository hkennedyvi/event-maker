import React from 'react';
import FacebookBtn from '../FacebookBtn';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormHelperText, Card, CardActions, CardContent, Typography, Box } from '@material-ui/core';
import './SignUpForm.css'
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            // width: '25ch',
            display: 'flex',
            flexDirection: 'column',
            
        },
        
    },
    cardRoot: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: '10%',
    },

    textfield: {
        marginBottom: 15,
    },

    formRoot: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },


    
}));

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
            <form className={classes.formRoot} 
            // onSubmit={(e) => { props.handleSubmit(e) }} action="POST"
            >
                
                <TextField
                    className={classes.textfield}
                    required
                    id="outlined-required"
                    type="email"
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
                <TextField
                    className={classes.textfield}
                    required
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
            </form>
            </CardActions>
            </CardContent>
            </Card>
            </Box>
            {/* <form className={classes.formRoot} onSubmit={(e) => { props.handleSubmit(e) }} action="POST">
                <label htmlFor="email">EMAIL:</label><br />
                <input type="email" id="email" name="email" placeholder="Email here" /><br />
                <label htmlFor="password">PASSWORD:</label><br />
                <input type="password" id="password" name="password" placeholder="Password here" /><br />
                <label htmlFor="password">CONFIRM PASSWORD:</label><br />
                <input type="password" id="confirm" name="confirm" placeholder="Confirm password here" /><br /><br />

                <input type="submit" value="Sign Up" />
            </form> */}
            {/* <FacebookBtn /> */}
        </div>
    )
}

export default SignUpForm;