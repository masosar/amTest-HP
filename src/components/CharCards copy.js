import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    //Typography,
    Box,
    // Card,
    // CardActions,
    // CardContent,
    // CardMedia,
    // Button,
    // Link,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL + '/images/hogwarts.jpg'})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
        [theme.breakpoints.down("sm")]: {
          height: "100vh",
          fontSize: "3em"
        }
      },
  })
);

const CharCards = () => {
    const classes = useStyles();
    return (
        <div>
            <Box component="div" className={classes.hero}>
                Hello
            </Box>
        </div>
    )
}

export default CharCards
