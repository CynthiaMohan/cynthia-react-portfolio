import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { white } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: "#484B4C",
        color: "#FFFFFF",
        left: 0,
        justifyContent: "center"
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction
                label="Github"
                icon={<GitHubIcon style={{ color: "#ffffff" }} />}
                href={"https://github.com/CynthiaMohan"} />
            <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon style={{ color: "#ffffff" }} />} href={"https://www.linkedin.com/in/cynthia-mohan/"} />
            <BottomNavigationAction
                label="Phone"
                icon={<PhoneIphoneIcon style={{ color: "#ffffff" }}
                />} href={"tel:+12678442523"}
            />
        </BottomNavigation>
    );
}