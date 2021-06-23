import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import projectImg from '../../assets/images/4.jpg';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Java-Script-Coding Quiz "
                    height="140"
                    image={projectImg}
                    title="Java-Script-Coding Quiz"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        JavaScript Coding Quiz
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        To generate a quiz on the concepts of java script.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" >
                    <a href="https://github.com/CynthiaMohan/Java-Script-Coding-Quiz">
                        Github
                    </a>
                </Button>
                <Button size="small" color="primary">
                    <a href="https://cynthiamohan.github.io/Java-Script-Coding-Quiz/">
                        Deployed App
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}
