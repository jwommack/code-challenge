import React, { Component, Fragment } from "react";
import { withRouter, Route, Redirect, Link } from "react-router-dom";
import {
    withStyles, Typography, Button, IconButton, Paper, List, ListItem,
    ListItemText, ListItemSecondaryAction, Table, TableBody, TableHead,
    TableCell, TablePagination, TableRow, TableSortLabel, Tooltip
} from "@material-ui/core";
import { compose } from "recompose";
import { find, orderBy } from "lodash";
import MockEditor from "../components/MockEditor";

const styles = theme => ({
    posts: {
        marginTop: 2 * theme.spacing.unit,
    },
    fab: {
        position: "absolute",
        bottom: 3 * theme.spacing.unit,
        right: 3 * theme.spacing.unit,
        [theme.breakpoints.down("xs")]: {
            bottom: 2 * theme.spacing.unit,
            right: 2 * theme.spacing.unit,
        },
    },
});

const API = "http://localhost:3001";

class Mocks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            mocks: [],
        };
    }

    componentDidMount() {
        this.getMocks();
    }

    async fetch(method, endpoint, body) {
        try {
            let path = API+endpoint;
            const response = await fetch(path, {
                method,
                body: body && JSON.stringify(body),
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json",
                },
            });
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    async getMocks() {
        this.setState({loading: false, mocks: await this.fetch("get", "/mocks")});
    }

    saveMock = async (mock) => {
        let action = "post";
        let updateId = "";
        if (mock.id) {
            action = "put";
            updateId = `/${mock.id}`;
        }
        await this.fetch(action, `/mocks${updateId}`, mock);
        this.props.history.goBack();
        this.getMocks();
    };

    async deleteMock(mock) {
        if (window.confirm(`You are about to permanently delete record ${mock.id}?`)) {
            await this.fetch("delete", `/mocks/${mock.id}`);
            this.getMocks();
        }
    }

    renderMockEditor = ({match:{params:{id}}}) => {
        if (this.state.loading) {
            return null;
        }
        const mock = find(this.state.mocks, {id: Number(id)});
        if (!mock && id !== "new") {
            return <Redirect to="/mocks"/>;
        }
        return <MockEditor mock={mock} onSave={this.saveMock} />;
    };

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="display1">Mocks</Typography>
                {this.state.mocks.length > 0 ? (
                    <Paper elevation={1} className={classes.mocks}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Message</TableCell>
                                    <TableCell>Foo</TableCell>
                                    <TableCell>Bar</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orderBy(this.state.mocks, ["id"], ["asc"]).map(mock => (
                                    <TableRow key={mock.id} button component={Link} to={`/mocks/${mock.id}`}>
                                        <TableCell>{mock.id}</TableCell>
                                        <TableCell>{mock.email}</TableCell>
                                        <TableCell>{mock.message}</TableCell>
                                        <TableCell>{mock.foo}</TableCell>
                                        <TableCell>{mock.bar}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={() => this.deleteMock(mock)} color="inherit">
                                                X
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {/*<List columns={5}>*/}
                            {/*{orderBy(this.state.mocks, ["id"], ["asc"]).map(mock => (*/}
                                {/*<ListItem key={mock.id} xs={23} button component={Link} dense={true} to={`/mocks/${mock.id}`}>*/}
                                    {/*<ListItemText xs={1} primary={mock.id} />*/}
                                    {/*<ListItemText xs={4} secondary={mock.email} />*/}
                                    {/*<ListItemText xs={6} secondary={mock.message} />*/}
                                    {/*<ListItemText xs={6} secondary={mock.foo} />*/}
                                    {/*<ListItemText xs={6} secondary={mock.bar} />*/}
                                    {/*<ListItemSecondaryAction>*/}
                                        {/*<IconButton onClick={() => this.deleteMock(mock)} color="inherit">*/}
                                            {/*X*/}
                                        {/*</IconButton>*/}
                                    {/*</ListItemSecondaryAction>*/}
                                {/*</ListItem>*/}
                            {/*))}*/}
                        {/*</List>*/}
                    </Paper>
                ) : (
                    !this.state.loading && <Typography variant="subheading">No mocks to display</Typography>
                )}
                <Button
                    variant="fab"
                    color="secondary"
                    aria-label="add"
                    className={classes.fab}
                    component={Link}
                    to="/mocks/new"
                >  +</Button>
                <Route exact path="/mocks/:id" render={this.renderMockEditor} />
            </Fragment>
        );
    }
}

export default compose(
    withRouter,
    withStyles(styles),
)(Mocks);