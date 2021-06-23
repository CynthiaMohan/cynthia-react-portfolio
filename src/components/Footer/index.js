import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 50,
        backgroundColor: "#484B4C",
        color: "#FFFFFF",
        left: 0,
        justifyContent: "center"
    },
    root2: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: "#484B4C",
        color: "#FFFFFF",
        left: 0,
        justifyContent: "center"
    },
    label: {
        color: "#FFFFFF"
    }
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction
                    className={classes.label}
                    label="Github"
                    icon={<GitHubIcon style={{ color: "#ffffff" }} />}
                    href={"https://github.com/CynthiaMohan"} />
                <BottomNavigationAction className={classes.label} label="LinkedIn" icon={<LinkedInIcon style={{ color: "#ffffff" }} />} href={"https://www.linkedin.com/in/cynthia-mohan/"} />
                <Tooltip title="+1-267-844-2523">
                    <BottomNavigationAction
                        className={classes.label}
                        label="Phone"
                        icon={<PhoneIphoneIcon style={{ color: "#ffffff" }}
                        />} href={"tel:+12678442523"}
                    />
                </Tooltip>
                <Tooltip title="cynthiamohan1@gmail.com">
                    <BottomNavigationAction
                        className={classes.label}
                        label="Email"
                        icon={<EmailIcon style={{ color: "#ffffff" }}
                        />} href={"mailto:cynthiamohan1@gmail.com"}
                    />
                </Tooltip>
            </BottomNavigation>
            <BottomNavigation className={classes.root2}> <p>Made by Cynthia Mohan 2021</p></BottomNavigation>

        </>
    );
}