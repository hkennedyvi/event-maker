import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./style.css";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'rgba(46, 34, 68, 1)',
    height: 48,
    padding: '0 30px',
  },
  root1: {
    background: 'linear-gradient(45deg, #413691 30%, #e73387 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyles();

  const handleClose = () => {
    onClose(selectedValue);
  };

  console.log(props);
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">What's the haps?</DialogTitle>
      <List>
        <ListItem>
          <label for="category">Event Category:</label>
          <select id="category">
            <option value="Sports">Sports</option>
            <option value="Music">Music</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Food">Food</option>
            <option value="Just Hanging">Just Hanging</option>
            <option value="Other">Other</option>
          </select>
        </ListItem>
        <ListItem>
        <p>Name of Event:</p>
        <input className="event-title" type="text"></input>
        </ListItem>
        <ListItem>
        <p>Location:</p>
         <input className="event-title" type="text"></input>
        </ListItem>
        <ListItem>
        <label for="participants"># Participants Needed:</label>  
        <select id="participants">
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
           <option value="6">6</option>
           <option value="7">7</option>
           <option value="8">8</option>
           <option value="9">9</option>
           <option value="10">10</option>
           <option value="11">11</option>
           <option value="12">12</option>
           <option value="12+">12+</option>
         </select>
        </ListItem>
        <ListItem>
        <label for="duration">Duration of Event:</label>  
         <select id="duration">
           <option value="thirty">30 mins</option>
           <option value="fortyfive">45 mins</option>
           <option value="one">1 hour</option>
           <option value="one-point">1.5 hours</option>
           <option value="two">2 hours</option>
           <option value="two-point">2.5 hours</option>
           <option value="three">3 hours</option>
           <option value="three-point">3.5 hours</option>
           <option value="four">4 hours</option>
           <option value="four-point">4.5 hours</option>
           <option value="five">5 hours</option>
           <option value="five-plus">5+ hours</option>
         </select>
        </ListItem>
        <ListItem>
        <p>Notes for those who are in cahoots:</p>
         <input className="event-title" type="text"></input>
        </ListItem>
        <ListItem>
        <Button className={classes.root1} onClick={(event) => {props.handlePost(event)}}>Post</Button>
        </ListItem>
        <ListItem>
        <h4>Your Event Will Start NOW</h4>
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function EventDialog(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="event-btn-div">
      <br />
      <Button className={classes.root} onClick={handleClickOpen}>Curate Event</Button>
      <SimpleDialog open={open} onClose={handleClose} handlePost={props.handlePost}/>
    </div>
  );
}