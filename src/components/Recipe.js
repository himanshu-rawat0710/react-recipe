import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Recipe extends Component {
    render() {
        // console.log(this.props)
        const {id, sourceName, dishTypes, diets, title, servings, readyInMinutes, image, sourceUrl, openLicense} = this.props.recipe;
        // console.log(this.props.recipe.image)
        return (
            <div className="card col-10 mx-auto col-md-6 col-lg-4 my-3" style={{width: '14rem', height:'100%'}}>
                {
                    openLicense === 0 ? (
                            
                            
                            <img src={`https://spoonacular.com/recipeImages/${image}`} className="card-img-top" alt={`${title} recipe`} />
                    ) : (
                        <img src={image} className="card-img-top" alt={`${title} recipe`} />
                    )
                }
                
                <div className="card-body">

                



                <h5 className="card-title text-capitalize py-3">{title}</h5>
                {
                    dishTypes ? (
                        dishTypes.map(el => {
                            return <span className='badge badge-pill badge-warning my-1 mx-1'>{el}</span>
                        })
                     ) : null

                }
                {/* dishtype  */}

                <div></div>


                {
                    diets ? (
                        diets.map(el => {
                            return <span className='badge  badge-dark mx-1 my-1'>{el}</span>
                        })
                     ) : null

                }
            


            

            {
                sourceName ? (
                    <p className="text-success text-capitalize mt-2">
                    provided by : <strong className='text-slanted'>{sourceName}</strong>
                </p>
                ) : null
            }


                        <p className="card-text text-danger  mt-3">
                            
                        Ready in : <strong className='text-slanted'>{`${readyInMinutes} Minutes`}</strong></p>

                        <p className="card-text text-info ">
                            
                        Servings : <strong className='text-slanted'>{`${servings}`}</strong></p>


                        <Link to={`/recipes/${id}`}  className="btn btn-primary text-capitalize">Details</Link>


                        <a href={sourceUrl} target='_blank' rel='noopener noreferrer'
                        className="btn btn-outline-success mx-2 text-capitalization">Recipe Url</a>
                </div>
            </div>
            
        )
    }
}
