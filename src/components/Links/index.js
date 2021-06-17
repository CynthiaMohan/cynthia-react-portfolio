import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GithubIcon from '../Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Github" value="github" icon={<GithubIcon />} />
            <BottomNavigationAction label="Linkedin" value="linkedin" icon={<LocationOnIcon />} />
            {/* <BottomNavigationAction label="Phone" value="phone" icon={<GithubIcon />} /> */}
        </BottomNavigation>
    );
}