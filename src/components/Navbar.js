
import React from 'react';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';
// import Header from './Header'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light">
        {/* nav-brand  */}
        <Link to='/' className='navbar-brand'>
                <img src={logo} alt='logo' />
        </Link>
      
        {/* <!-- Toggler/collapsibe Button --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse show ml-sm-5" id="collapsibleNavbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className='nav-link' to='/'>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className='nav-link' to='/recipes'>
                            Recipes
                        </Link>
                    </li>
                </ul>
            </div>
      </nav> 
    )
}
