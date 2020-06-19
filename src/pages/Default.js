import React, { Component } from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';
// import Footer from './components/Footer'

export default class Default extends Component {
    render() {
        return (
            <Header title='page not found sorry' styleClass='default-hero'>
            <h2 className='text-light text-uppercase'>
                You are in wrong place
            </h2>
            <Link to='/' className='text-uppercase btn btn-warning btn-lg mt-3'>
                Return Home
            </Link>
            </Header>
            
        )
    }
}
