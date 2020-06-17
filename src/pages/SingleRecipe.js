// ComponentWillMount
// Render
// ComponentDidMount

import React, { Component } from 'react';
// import {recipeDataTwo} from '../data/tempDetailsTwo';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer'
// import {REACT_APP_API_kEY} from '.env.development'
require('dotenv').config();
// console.log(process.env)

export default class SingleRecipe extends Component {
    constructor(props) {
        super(props);
        
        const id =this.props.match.params.id
        this.state = {
            // recipe:recipeDataTwo,
            recipe:{},
            id,
            
            
            
            loading: true
        }
    }

    // async 
    async componentDidMount(){
        // console.log('Did Mount Called');
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=true`;

        try{
            const response = await fetch(url);
            const responseData = await response.json();
            // console.log(responseData)
            this.setState({
                recipe:responseData,
                loading: false
            })
        }
        catch(error){
            console.log(error)
        }
    }
   
    


    render() {
        // console.log('Render Called');
        const {sourceUrl,sourceName,title,servings,summary,image,preparationMinutes,cookingMinutes,readyInMinutes,extendedIngredients,dishTypes,analyzedInstructions,vegetarian,vegan,diets} =this.state.recipe;

        // if (this.state.recipe.dishTypes === undefined) return <p>LOADING</p>
        
        // {const {summaryCrop} = summary(/^(.{1}[^\s]*).*/, "$1")}
        

        
        if(this.state.loading){
            return(
                <div className="text-center mt-5">
                    <div className="spinner-border mt-5" style={{width: '10rem',height:'10rem'}} role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div>
                        <h1 className='display-4 mt-5'>Please wait...</h1>
                    </div>
                </div>
                
            );
        }
        return(
            

            <>
                <div className="container-fluid my-5">

                        
        <div className="row">
            <div className="col-10 col-md-6 mx-auto  my-3  px-sm-0 px-md-5 ">
                <Link to='/recipes' className='btn btn-warning mb-5 text-capitalize'>
                    Back to recipe List
                </Link>
            <img src={image} className='d-block w-100 img-fluid rounded-lg shadow-lg  mb-3 ' style={{maxHeight:'40rem'}} alt={`${title} click`}/>

            {/* dishtype  */}
            {dishTypes.map(el => {
                        return <span className='badge badge-pill badge-warning my-1 mx-1'>{el}</span>
                    })}
            <div>

            </div>


            {/* diettype  */}
            {diets.map(el => {
                        return <span className='badge  badge-dark mx-1 my-1'>{el}</span>
                    })}

            </div>
            {/* info */}
            <div className="col-10 mx-auto col-md-6  my-3  px-sm-0 px-md-5 ">
                <h4 className="text-uppercase text-slanted-two">
                    {title}
                </h4>
                <h5 className="text-warning text-capitalize ">
                    provided by <strong className='text-slanted'>{sourceName}</strong>
                </h5>
                <a href={sourceUrl} target='_blank' rel='noopener noreferrer' className='btn btn-primary mt-2 text-capitalize'>
                    Recipe Source


                    
                </a>


                
                
                

                <div className='my-4 shadow p-3 mb-5 bg-white rounded'>
                <h3>Summary :</h3>

                
                <div className='my-3 lead' dangerouslySetInnerHTML={{__html: summary}} />

                </div>
                
                

                

                


                </div>


                </div>
        

        

    




{/* row2 */}
        <div className="row my-5">
            

            <div className="col-md-6 px-5">
                
            
                <div className="card border border-danger">

                <div className="card-body">
                    <h3 className="card-title d-inline  display-5 d-flex py-2 justify-content-center">Time Required :  </h3>
                    
                </div>
                    
                <div className="card-body">
                    <h5 className="card-title d-inline font-weight-bold">Preparation Time :  </h5>
                    <h5 className='d-inline'> {preparationMinutes} min</h5>
                </div>

                <div className="card-body">
                    <h5 className="card-title d-inline font-weight-bold">Cooking Time :  </h5>
                    <h5 className='d-inline'> {cookingMinutes} min</h5>
                </div>

                <div className="card-body">
                    <h5 className="card-title d-inline font-weight-bold">Ready In (Approx) :  </h5>
                    <h5 className='d-inline'> {readyInMinutes} min</h5>
                </div>
                </div>

                
            </div>
            


            <div className="col-md-6 mt-sm-5 mt-md-0 px-5">
                <div className="card border border-info">
                <div className="card-body">
                    <h5 className="card-title d-inline font-weight-bold">Servings :  </h5>
                    <h5 className='d-inline'> {servings} </h5>
                </div>
            </div>

                <div className="card border border-info">
                    <div className="card-body">
                        <h5 className="card-title d-inline font-weight-bold">Veg/Non-veg :  </h5>
                        { (vegetarian)? <h5 className='d-inline'>vegetarian</h5>:<h5 className='d-inline'>Non-Vegetarian</h5>}
                    </div>                       
                </div>

                <div className="card border border-info">
                    <div className="card-body">
                        <h5 className="card-title d-inline font-weight-bold">Vegan :  </h5>
                        { (vegan)? <h5 className='d-inline'>Yes</h5>:<h5 className='d-inline'>No</h5>}
                    </div>                       
                </div>
            </div>
            </div>
    


{/* row3 */}


        <div className="row my-5">
            

            <div className="col-md-12 px-5 ">
                
            
                <div className="card border border-warning">

                <h2 className=" mx-auto mt-3 mb-4 d-flex justify-content-center">
                        Ingredients
                </h2>

                <dl className="row px-5" style={{width:'100%'}}>
                
                {extendedIngredients.map(el => {
                        return (
                        <>
                        <dt className="col-sm-4 pl-3  mb-3 text-slanted">{el.name}</dt>
                        <dd className="col-sm-8 px-3   mb-5 mb-lg-3">{`${el.amount} ${el.unit} ${el.name}`}</dd>
                        </>
                )})}



        </dl>



                </div>
            </div>
        </div>






        {/* row4 */}

        <div className="row my-5">
            

            <div className="col-md-12 px-5">
                
            
                <div className="card border border-success">

                <div className="card-body">
                    <h2 className="mt-3 mb-4 d-flex justify-content-center">
                        Instructions
                    </h2>
                    <ol className="list-group list-group-flush mt-4 list-style-number">
                        
                        {/* {analyzedInstructions.map(el => {
                            return <li className='list-group-item  text-slanted'>{el.number}</li>
                        })} */}
                        {analyzedInstructions.map((el) => {
                            return el.steps.map(st => {
                            
                            return <li className='list-group-item ' key={st.number}>{`${st.number}. ${st.step}`}</li>
                            })
                        })
                    }
                    </ol>
                    
                </div>
                    
                
                </div>

                
            </div>
            


            
            </div>




    </div>

                {/* footer  */}
            <Footer />
</>
            

            
            
            
        )
        
    }
}
