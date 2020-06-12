import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import {recipeData} from '../data/tempList'
export default class Recipes extends Component {
    constructor(props) {
        super(props)
    }
    state={
        recipes:recipeData,
        search:''

    }

    handleChange= (event) => {
        this.setState({
            search:event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault()
    }
    render() {
        return (
            <>
                <h4>hello from recipeess.js</h4>
                <Search search={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <RecipeList />
            </>
        )
    }
}
