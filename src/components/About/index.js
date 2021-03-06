import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import profilepic from '../../assets/images/profile pic.jpg';
const About = () => {
    return (
        <>
            <h1>About</h1>
            <Grid container>
                <Grid item xs={8}>
                    <Typography paragraph>
                        Hi I'm Cynthia Mohan.<br />
                        I am a Full Stack Developer holding a Masters in Computer and Communication Engineering.<br />
                        I recently earned a certificate in Full Stack Developmentfrom UC Berkeley where I was trained in HTML CSS and Javascript, jQuery moment.js and other libraries associated with javascript Nodejs Vuejs and more.<br />
                        I have good communication skills and bring to the project the ability to work independantly and as within a team. I focus on writing clean and efficient code.<br />
                        I love Photography, gardening, watching Netflix and spending time with my family.
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <img src={profilepic} alt="Cynthia's Profile Picture" />
                </Grid>
            </Grid>
        </>
    );
}

export default About;