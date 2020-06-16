import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import {recipeDataTwo} from '../data/tempListTwo';
// import {recipeDataTwo} from '../data/tempListTwo';
export default class Recipes extends Component {
    constructor(props) {
        super(props);
    }
    state={
        recipes:recipeDataTwo,
        search:''

    };

    handleChange= (event) => {
        this.setState({
            search: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault()
    }
    render() {
        return (
            <>
                
                <Search search={this.state.search} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} />
                

                <RecipeList recipes={this.state.recipes} />
            </>
        )
    }
}
