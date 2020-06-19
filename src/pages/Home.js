import React, { Component } from 'react';
import Header from '../components/Header';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <Header className = 'header-hero' title='Tasty Recipes' style={{color:'white', fontSize:'50px'}}>
                <h1 className='text-uppercase text-slanted' style={{color:'white', fontSize:'40px'}}>with</h1>
                <h2 className='display-3 text-uppercase my-5' style={{color:'white', fontWeight:'bold'}}>Food<strong className='text-orange'>gasm</strong></h2>
            <Link to='recipes' className='text-uppercase btn btn-secondary btn-lg mt-3'>
                Search Recipe
            </Link>
            </Header>
        )
    }
}
