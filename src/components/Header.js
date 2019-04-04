import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography,  withStyles, } from "@material-ui/core";

const styles = {flex:{flex: 1}};
const Header = ({ classes }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                DutchBrosTest
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/mocks">Mock Data</Button>
            <div className={classes.flex} />
        </Toolbar>
    </AppBar>
);
export default withStyles(styles)(Header);