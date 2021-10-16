import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';
//import ViewClasses from '../pages/ViewClasses';
import authService from "../services/loginservice";
import SeeClasses from '../pages/SeeClasses';
import NotFound from '../pages/NotFound';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authService.isAuthenticated() ? (
                <Component {...props} />
            ) : (
                //Incluir qual página deve ser renderizada quando o usuário não estiver autenticado
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/search" component={Search} />
            <PrivateRoute exact path="/seeclasses" component={ SeeClasses } />     
            <Route component={ NotFound } />
            <Route path="*" component={ NotFound } />
        </Switch>
    </BrowserRouter>
);

export default Routes;