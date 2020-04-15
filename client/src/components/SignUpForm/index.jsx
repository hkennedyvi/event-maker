import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Card, CardActions, CardContent, Typography, Box, Button } from '@material-ui/core';
import './SignUpForm.css'

// Styles
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(7),
            display: 'flex',
            flexDirection: 'column',
        },
    },
    cardRoot: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
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

// Main Function
function SignUpForm(props) {
    // Style
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <Box display="flex" >
                <Card className={classes.cardRoot}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Sign Up
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
                                    variant="outlined"
                                />
                                <TextField
                                    className={classes.textfield}
                                    required
                                    id="outlined-password-input"
                                    label="Confirm Password"
                                    type="password"
                                    name="confirm"
                                    variant="outlined"
                                />
                                <Button
                                    className={classes.submitBtn}
                                    type="submit"
                                    variant="contained"
                                    color="#051937"
                                >
                                    Sign Up
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
                        >
                            Login
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    );
};

export default SignUpForm;