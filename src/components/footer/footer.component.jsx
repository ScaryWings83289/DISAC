import React from 'react';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#000000",
    },
    typography: {
        display: "flex",
        justifyContent: "center",
    }
});
 
const Footer = () => {    
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Container maxWidth="md">
                <Toolbar className={classes.typography}>
                    <Typography variant="body1" color="inherit">
                        &copy; 2021 Sifoz Clothing Pvt. Ltd.
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
 
export default Footer;