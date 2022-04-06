import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/home" />
          
        ) : (
            <Component {...props}/>
        )
    )}/>
);


const mapStateToProps = (state) => ({
    //we put execlimation marks here to return Boleam value> if not it's gonna return undefined.
    isAuthenticated: !!state.auth.uid 
})

export default connect(mapStateToProps)(PublicRoute) 