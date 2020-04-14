import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";

const useStyles = makeStyles((theme) => ({
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
  root2: {
    background: 'rgba(255, 255, 255, 0.3)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function FormDialog(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [participants, setParticipants] = React.useState('');
  const [duration, setDuration] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    props.handleChange(event);
  };

  const handleParticipantsChange = (event) => {
    setParticipants(event.target.value);
    props.handleChange(event);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
    props.handleChange(event);
  }

  const handleChange = (event) => {
    props.handleChange(event);
  };

  const handleClose = (event) => {
    setOpen(false);
    props.handlePost(event);
    window.location.reload();
  };

  const handleCancel = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button id="event-btn" className={classes.root} onClick={handleClickOpen}>Curate Event</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">What's the haps?</DialogTitle>
        <DialogContent>
        <FormControl required variant="outlined" id="select" className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">Category*</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-required"
                    name="category"
                    value={category}
                    onChange={handleCategoryChange}
                    label="Category"
                >
                    <MenuItem value="Sports">Sports</MenuItem>
                    <MenuItem value="Entertainment">Entertainment</MenuItem>
                    <MenuItem value="Music">Music</MenuItem>
                    <MenuItem value="Outdoors">Outdoors</MenuItem>
                    <MenuItem value="Errands">Errands</MenuItem>
                    <MenuItem value="Just Hanging">Just Hanging</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                    <MenuItem value="None">
                        <em>None</em>
                    </MenuItem>
                </Select>
            </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Event Name*"
            type="text"
            fullWidth
            onChange={(event) => props.handleChange(event)}
          />
          <TextField
            margin="dense"
            id="location"
            label="Location (if same as current location leave blank)"
            type="text"
            fullWidth
            onChange={(event) => props.handleChange(event)}
          />
           <FormControl required variant="outlined" id="select" className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">Participants</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-required"
                    name="participants"
                    value={participants}
                    onChange={handleParticipantsChange}
                    label="Participants"
                >
                    <MenuItem value="Any">
                        <em>Any</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value="12+">12+</MenuItem>
                </Select>
            </FormControl>
            <br></br>
            <FormControl required variant="outlined" id="select" className={classes.formControl}>
                <InputLabel id="demo-simple-select-required-label">Duration</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-required"
                    name="duration"
                    value={duration}
                    onChange={handleDurationChange}
                    label="Duration"
                >
                    <MenuItem value="Any">
                        <em>Any</em>
                    </MenuItem>
                    <MenuItem value={"30 min"}>30 min</MenuItem>
                    <MenuItem value={"45 min"}>45 min</MenuItem>
                    <MenuItem value={"1 hour"}>1 hour</MenuItem>
                    <MenuItem value={"1.5 hours"}>1.5 hours</MenuItem>
                    <MenuItem value={"2 hours"}>2 hours</MenuItem>
                    <MenuItem value={"2.5 hours"}>2.5 hours</MenuItem>
                    <MenuItem value={"3 hours"}>3 hours</MenuItem>
                    <MenuItem value={"3.5 hours"}>3.5 hours</MenuItem>
                    <MenuItem value={"4 hours"}>4 hours</MenuItem>
                    <MenuItem value={"4.5 hours"}>4.5 hours</MenuItem>
                    <MenuItem value={"5 hours"}>5 hours</MenuItem>
                    <MenuItem value={"5+ hours"}>5 + hours</MenuItem>
                </Select>
            </FormControl>
          <TextField
            margin="dense"
            id="notes"
            label="Notes"
            type="text"
            fullWidth
            onChange={(event) => props.handleChange(event)}
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.root2} type="submit" onClick={handleCancel}>Cancel</Button>
          <Button className={classes.root1} type="submit" onClick={handleClose}>Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}