import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Recipe extends Component {
    render() {
        // console.log(this.props)
        const {id, title, servings, readyInMinutes, image, sourceUrl} = this.props.recipe;
        // console.log(results.id)
        return (
            <div className="card col-10 mx-auto col-md-6 col-lg-4 my-3" style={{width: '14rem', height:'100%'}}>
                <img src={`https://spoonacular.com/recipeImages/${image}`} className="card-img-top" alt={`${title} recipe`} />
                <div className="card-body">
                <h5 className="card-title text-capitalize py-3">{title}</h5>
                        <p className="card-text text-danger text-slanted">
                            
                        Ready in : <strong>{`${readyInMinutes} Minutes`}</strong></p>

                        <p className="card-text text-info text-slanted">
                            
                        Servings : <strong>{`${servings}`}</strong></p>


                        <Link to={`/recipes/${id}`}  className="btn btn-primary text-capitalize">Details</Link>


                        <a href={sourceUrl} target='_blank' rel='noopener noreferrer'
                        className="btn btn-outline-success mx-2 text-capitalization">Recipe Url</a>
                </div>
            </div>
            
        )
    }
}
