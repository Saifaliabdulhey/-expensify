import React  from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
         <header className="header">
            <div className="content-container" >
                <div className="header__content">
                    <Link className="header_title" to="/home" >
                        <h1>Expensify</h1>
                     </Link> 
                  <button className="button button--link"onClick={startLogout}>Logout</button> 
               </div>
            </div>
          </header>
    )

    const mapDispatchToProps = (dispatch) => ({
        startLogout:() => dispatch(startLogout())
    })

export default connect(undefined, mapDispatchToProps)(Header);
// <NavLink to="/portfolio" activeClassName='is-active' exact>Portfolio</NavLink>
// <NavLink to="/contact" activeClassName='is-active'>Create Expense</NavLink>