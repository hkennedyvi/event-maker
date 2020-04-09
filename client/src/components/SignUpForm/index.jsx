import React from 'react';
// import FacebookBtn from '../FacebookBtn';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormHelperText, Card, CardActions, CardContent, Typography, Box, Button } from '@material-ui/core';
import './SignUpForm.css'
// import { red } from '@material-ui/core/colors';

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
        marginTop: '15%',
    },

    textfield: {
        marginBottom: 15,
    },

    formRoot: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    submitBtn: {
        backgroundColor: '#051937',
        color: 'ffffff',
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
                onSubmit={(e) => { props.handleSubmit(e) }} action="POST"
            >
                
                <TextField
                    className={classes.textfield}
                    required
                    id="outlined-required"
                    type="email"
                    label="Email"
                    name="email"
                    variant="outlined"
                    
                />
                <TextField
                    className={classes.textfield}
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    // autoComplete="current-password"
                    variant="outlined"
                />
                <TextField
                    className={classes.textfield}
                    required
                    id="outlined-password-input"
                    label="Confirm Password"
                    type="password"
                    name="confirm"
                    // autoComplete="current-password"
                    variant="outlined"
                />
                <Button 
                    className={classes.submitBtn}
                    type="submit"
                    variant="contained"
                    color="#051937"
                >Sign Up
                </Button>

            </form>
            </CardActions>
            </CardContent>
            <CardActions>
                <Typography variant="p">
                    Already a member?
                </Typography>
            <Button 
                    className={classes.submitBtn}
                    type="submit"
                    variant="contained"
                    color="#051937"
                    href="/login"
                >Login
                </Button>
      </CardActions>
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