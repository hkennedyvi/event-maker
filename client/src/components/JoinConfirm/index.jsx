import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'rgba(46, 34, 68, 1)',
        height: 48,
        // padding: '0 30px',
        
    }
});

export default function JoinConfirm(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button id="join-btn" className={classes.root} variant="outlined" color="primary" onClick={handleClickOpen} disabled={ props.allEvents[props.eventIndex].participants <= 0 ? true : "" }>
                Join
      </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to join this event?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Once you join, your neighbors are counting on you to show up!
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
          </Button>
                    <Button onClick={props.joinCount} color="primary" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}