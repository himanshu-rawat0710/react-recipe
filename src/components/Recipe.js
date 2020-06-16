import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Recipe extends Component {
    render() {
        // console.log(this.props)
        const {image_url, title, publisher, recipe_id} = this.props.recipe;
        return (
            <div className="card col-10 mx-auto col-md-6 col-lg-4 my-3" style={{width: '14rem', height:'100%'}}>
                <img src={image_url} className="card-img-top" alt={`${title} recipe`} />
                <div className="card-body">
                <h5 className="card-title text-capitalize py-3">{title}</h5>
                        <p className="card-text text-warning text-slanted">
                        provided by : {publisher}</p>
                        <Link to={`/recipes/${recipe_id}`}  className="btn btn-primary text-capitalize">Details</Link>
                </div>
            </div>
            
        )
    }
}
