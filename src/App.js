import React, { Component } from 'react'
import './App.css';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import Default from './pages/Default';
import Navbar from './components/Navbar';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';




export default class App extends Component {
  render() {
    return (
      <Router>
        <main>
          {/* navbar */}
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/recipes' exact component={Recipes}></Route>
            <Route path='/recipes/:id' component={SingleRecipe}></Route>
            <Route component={Default}></Route>

          </Switch>


        

        </main>
        


      </Router>
      
      
      
      
      
      
      
    )
  }
}
