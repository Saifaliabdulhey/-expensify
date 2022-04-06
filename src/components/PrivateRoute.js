import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
            <Header />
            <Component {...props}/>
            </div>
        ) : (
            <Redirect to="/" />
        )
    )}/>
);


const mapStateToProps = (state) => ({
    //we put execlimation marks here to return Boleam value> if not it's gonna return undefined.
    isAuthenticated: !!state.auth.uid 
})

export default connect(mapStateToProps)(PrivateRoute) 