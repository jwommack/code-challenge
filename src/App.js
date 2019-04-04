import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import {
  CssBaseline,
  withStyles,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
// Pages
import Header from "./components/Header";
import Home from "./pages/Home";
import Mocks from "./pages/Mocks";

const styles = theme => ({
  main: {
    padding: 3 * theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      padding: 2 * theme.spacing.unit,
    },
  },
});
const App = ({ classes }) => (
    <Fragment>
      <CssBaseline />
      <Header />
      <main className={classes.main}>
        <Route exact path="/" component={Home} />
        <Route path="/mocks" component={Mocks} />
        <Route path="/mock" component={Mocks} />
      </main>
    </Fragment>
);

export default  withStyles(styles)(App);