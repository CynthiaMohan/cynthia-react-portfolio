import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Project1 from './project1';
import Project2 from './project2';
import Project3 from './project3.js';
import Project4 from './project4';
import Project5 from './project5';
import Project6 from './project6.js';


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: '40px',
        paddingRight: '40px'
    },
    header: {
        paddingLeft: '40px'
    }
});

const Work = () => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.header}>Portfolio</h1>
            <Grid container spacing={4} className={classes.gridContainer}>

                <Grid item xs={12} sm={6} md={4}><Project1 /></Grid>
                <Grid item xs={12} sm={6} md={4}><Project2 /></Grid>
                <Grid item xs={12} sm={6} md={4}><Project3 /></Grid>
                <Grid item xs={12} sm={6} md={4}><Project4 /></Grid>
                <Grid item xs={12} sm={6} md={4}><Project5 /></Grid>
                <Grid item xs={12} sm={6} md={4}><Project6 /></Grid>
            </Grid>
        </>

    );
}

export default Work;