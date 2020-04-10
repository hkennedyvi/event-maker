import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Paper, Typography, Box, Grid } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HistoryIcon from '@material-ui/icons/History';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MadeHistoryCard from '../MadeHistoryCard';
import AttendedCard from '../AttendedCard';
import './style.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles({
    section: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
    // root: {
    //     // marginTop: '2%',
    //     // display: 'flex',
    //     // flexDirection: 'row',
    //     // alignItems: 'space-around',
    // },
    tabPanel: {
        backgroundColor: 'red',
        
    },

});

function HistorySection(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.section}>
            {/* <Grid container spacing={5}> */}
            <Paper square 
            // className={classes.root}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<EventAvailableIcon />} label="Current Event" {...a11yProps(0)} />
                    <Tab icon={<HistoryIcon />} label="Previously Created" {...a11yProps(0)} />
                    <Tab icon={<PeopleOutlineIcon />} label="Previously Attended" {...a11yProps(0)} />
                </Tabs>
            </Paper>
            <TabPanel className={classes.tabPanel} value={value} index={0}>
                Current event (made or attending)
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1} madeEvents={ props.madeEvents } >
                {props.madeEvents.map(event => {
                    return (
                        <MadeHistoryCard
                            category={event.category}
                            name={event.name}
                            location={event.location}
                            duration={event.duration}
                        />
                    )
                })
                }
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2} attendedEvents={ props.attendedEvents }>
                {props.attendedEvents.map(event => {
                    return (
                        <AttendedCard
                            category={event.category}
                            name={event.name}
                            location={event.location}
                            duration={event.duration}
                            creator={event.creator}
                        />
                    )
                })
                }
            </TabPanel>
            {/* </Grid> */}
        </div>
    )
}

export default HistorySection;