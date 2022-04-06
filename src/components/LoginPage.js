import React from 'react'
import { connect } from 'react-redux';
import { startLogin, facebookLogin, githubLogin, twitterLogin } from '../actions/auth'

export const LoginPage = ({startLogin, githubLogin}) => (
    <div className="box-layout">
    <div className="box-layout__box">
    <h1 className="box-layout__title">Expensify</h1>
    <p>It's time to get your expenses under control.</p>
    <button className="button"onClick={startLogin}>Login with Google</button>
    <button className="button button-cb"onClick={githubLogin}>Login with Github</button>
  
    </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    facebookLogin: () => dispatch(facebookLogin()),
    githubLogin: () => dispatch(githubLogin()),
    twitterLogin: () => dispatch(twitterLogin())
    // microsoftLogin: () => dispatch(microsoftLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);