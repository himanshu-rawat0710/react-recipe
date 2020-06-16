import React, { Component } from 'react';

import Recipe from './Recipe';
import Footer from '../components/Footer'

export default class RecipeList extends Component {
    render() {
        const { recipes } = this.props;
        // const { id } = this.props;
        console.log(recipes)
        // console.log(this.props)
        return (
            <>
                <div className='container py-5'>
                    {/* title */}
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
                            <h1 className='text-slanted' style={{fontSize:'2.5rem'}}>
                                recipe list
                            </h1>

                        </div>
                    </div>
                    {/* end of title  */}
                    <div className='row'>
                        {recipes.map(recipe => (
                            <Recipe key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                {/* <Recipe /> */}

            
                
            </div>
            <Footer />
            </>
        )
    }
}
