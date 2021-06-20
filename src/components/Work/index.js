import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Project1 from './project1';
import Project2 from './project2';

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
            <h1 className={classes.header}>Work/Project Page</h1>
            <Grid container spacing={4} className={classes.gridContainer}>

                <Grid item xs={12} sm={6} md={4}><Project1 /></Grid>
                <Grid item xs={12} sm={6} md={4}><Project2 /></Grid>
                <Grid item xs={12} sm={6} md={4}><Project2 /></Grid>
            </Grid>
        </>

    );
}

export default Work;