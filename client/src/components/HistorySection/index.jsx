import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Paper, Typography, Box } from '@material-ui/core';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import HistoryIcon from '@material-ui/icons/History';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MadeHistoryCard from '../MadeHistoryCard';
import AttendedCard from '../AttendedCard';
import CurrentEventCard from '../CurrentEventCard';
import NoHistoryCard from '../NoHistoryCard';
import './style.css';

// Future Development: give TabPanel its own component
// Then restructure the props drilling
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

// Props for the TabPanel functionality
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

// Assists TabPanel in matching indexes for Tabs/TabPanels
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Page Styling
const useStyles = makeStyles({
    section: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
    },
});

//  Main function
function HistorySection(props) {
    // Styles
    const classes = useStyles();
    // State
    const [value, setValue] = React.useState(0);

    // Handle change of tabs
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Toggles card content for Current Events tab
    const currentEventCardToggler = (props) => {
        if (props.currentEvent.length === 0) {
            return (
                <NoHistoryCard
                    eventType="Current Events"
                    background="linear-gradient(0.85turn,  rgba(19, 34, 119, 0.9), rgba(231, 51, 156, 0.9), rgba(253, 160, 0, 0.9))"
                />
            )
        } else {
            return (
                <CurrentEventCard
                    category={props.currentEvent.category}
                    name={props.currentEvent.name}
                    location={props.currentEvent.location}
                    duration={props.currentEvent.duration}
                />
            )
        }
    }

    // Toggles card content for Previously Created tab
    function madeEventsCardToggler(props) {
        if (props.madeEvents.length === 0) {
            return (
                <NoHistoryCard
                    eventType="Created Events"
                    background="linear-gradient(to right bottom, #051937, #2b275a, #5d2e77, #972d88, #d3208b);"
                />
            )
        } else {
            return (
                props.madeEvents.map(event => {
                    return (
                        <MadeHistoryCard
                            category={event.category}
                            name={event.name}
                            location={event.location}
                            duration={event.duration}
                        />
                    )

                })
            )
        }
    }

    // Toggles card content for Previously Attended tab
    function attendedEventsCardToggler(props) {
        if (props.attendedEvents.length === 0) {
            return <NoHistoryCard
                eventType="Attended Events"
                background="linear-gradient(to left top, #051937, #2b275a, #5d2e77, #972d88, #d3208b);"
            />
        } else {
            return (
                props.attendedEvents.map(event => {
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
            )
        }
    }


    return (
        <div className={classes.section}>
            <Paper square>
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
            <TabPanel className={classes.tabPanel} value={value} index={0} currentEvent={props.currentEvent}>
                {currentEventCardToggler(props)}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={1} madeEvents={props.madeEvents} >
                {madeEventsCardToggler(props)}
            </TabPanel>
            <TabPanel className={classes.tabPanel} value={value} index={2} attendedEvents={props.attendedEvents}>
                {attendedEventsCardToggler(props)}
            </TabPanel>
        </div>
    )
}

export default HistorySection;