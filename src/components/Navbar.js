
import React from 'react';
import logo from '../images/brandicon.png';
import {Link} from 'react-router-dom';
// import Header from './Header'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-md bg-light navbar-light" role='navigation'>
        {/* nav-brand  */}
        <Link to='/' className='navbar-brand '>
                <img src={logo} alt='logo' />
        </Link>
      
        {/* <!-- Toggler/collapsibe Button --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        {/* <!-- Navbar links --> */}
        <div className="collapse navbar-collapse ml-sm-5" id="collapsibleNavbar">
                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <Link className='nav-link d-none d-sm-none d-md-block' to='/'>
                            Home
                        </Link>
                        
                        <Link to='/' className='nav-link d-block d-sm-block d-md-none'   >
                            Home
                        </Link>
                    </li>

                    <li className="nav-item" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <Link className='nav-link d-none d-sm-none d-md-block' to='/recipes'>
                            Recipes
                        </Link>
                        <Link className='nav-link d-block d-sm-block d-md-none' to='/recipes'>
                            Recipes
                        </Link>
                    </li>
                </ul>
            </div>
      </nav> 
    )
}
