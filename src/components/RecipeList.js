import React, { Component } from 'react';

import Recipe from './Recipe';
import Footer from '../components/Footer'

export default class RecipeList extends Component {
    render() {
        const { recipes, handlePageChange6, handlePageChange2, handlePageChange3, handlePageChange4, handlePageChange5 } = this.props;
        // const { id } = this.props;
        // console.log(recipes)
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
            {/* page navigation  */}

                <nav className='mb-5' aria-label="...">
                        <ul className="pagination pagination-lg justify-content-center">
                            <li className="page-item disabled">
                            <button className="page-link" tabIndex="-1">1</button>
                            </li>
                            <li className="page-item"><button className="page-link" onClick={handlePageChange2}>2</button></li>
                            <li className="page-item"><button className="page-link" onClick={handlePageChange3}>3</button></li>
                            <li className="page-item"><button className="page-link" onClick={handlePageChange4}>4</button></li>
                            <li className="page-item"><button className="page-link" onClick={handlePageChange5}>5</button></li>
                            <li className="page-item"><button className="page-link" onClick={handlePageChange6}>6</button></li>
                        </ul>
                </nav>

            <Footer />
            </>
        )
    }
}
