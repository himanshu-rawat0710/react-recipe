import React, { Component } from 'react';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
// import {recipeDataTwo} from '../data/tempListTwo';
require('dotenv').config();
// import {recipeDataTwo} from '../data/tempListTwo';
export default class Recipes extends Component {
    constructor(props) {
        super(props);
        this.getRecipes = this.getRecipes.bind(this);
    }
    state={
        recipes:[],
        search:'',
        url:`https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_API_KEY}`,
        
        base_url:`https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=`,
        number: '&number=10',
        offset: '&offset=',
        offsetNumber: '1',
        error:''


    };

    async getRecipes(random=true){
        try{
            const data = await fetch(this.state.url);
            const jsonData = await data.json();
            // console.log(jsonData.results)
            if (random === false && jsonData.results.length === 0) {
                this.setState({
                    error: 'Sorry but your search did not return any recipe, Please try again with some different keyword'
                })
            }
            else {
                this.setState({
                    recipes: random ? jsonData.recipes : jsonData.results,
                    error: ''
                })
            }
            }

            
        catch(error){
            console.log(error)

        }
        // recipes: random ? jsonData.recipes : jsonData.result
    }

    // async getRecipes2(){
    //     try{
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         console.log(jsonData)
    //         this.setState({
    //             recipes: jsonData.results
    //         })
    //     }
    //     catch(error){
    //         console.log(error)

    //     }

    // }

    


componentDidMount(){
    this.getRecipes();
    // this.getRecipes2();
    

}


    

    handlePageChange2 = (event) => {
        const {base_url,search,number,offset,offsetNumber} = this.state;

            this.setState({
                
                url:`${base_url}${search}${number}${offset}${offsetNumber}2`,
                
            },() => this.getRecipes(false))
    }

    handlePageChange3 = (event) => {
        const {base_url,search,number,offset,offsetNumber} = this.state;

            this.setState({
                
                url:`${base_url}${search}${number}${offset}${offsetNumber}3`,
                
            },() => this.getRecipes(false))
    }

    handlePageChange4 = (event) => {
        const {base_url,search,number,offset,offsetNumber} = this.state;

            this.setState({
                
                url:`${base_url}${search}${number}${offset}${offsetNumber}4`,
                
            },() => this.getRecipes(false))
    }

    handlePageChange5 = (event) => {
        const {base_url,search,number,offset,offsetNumber} = this.state;

            this.setState({
                
                url:`${base_url}${search}${number}${offset}${offsetNumber}5`,
                
            },() => this.getRecipes(false))
    }

    handlePageChange6 = () => {
        const {base_url,search,number,offset,offsetNumber} = this.state;

            this.setState({
                
                url:`${base_url}${search}${number}${offset}${offsetNumber}6`,
                search:''
            },() => this.getRecipes(false))
    }

    handleChange= (event) => {
        this.setState({
            search: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {base_url,search,number,offsetNumber,offset} = this.state;

        this.setState({
            url:`${base_url}${search}${number}${offset}${offsetNumber}`
            // search:''
        },() => this.getRecipes(false))
    }
    render() {
        return (
            <>
                
                <Search search={this.state.search} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
                handlePageChange6={this.handlePageChange6}
                handlePageChange2={this.handlePageChange2}
                handlePageChange3={this.handlePageChange3}
                handlePageChange4={this.handlePageChange4}
                handlePageChange5={this.handlePageChange5}
                 />
                
                {this.state.error ? (<section>
                    <div className="row">
                        <div className="col">
                            <h2 className="text-orange text-center text-uppercase mt-5">
                                {this.state.error}
                            </h2>
                        </div>
                    </div>

                </section>) : (<RecipeList recipes={this.state.recipes}
                handlePageChange6={this.handlePageChange6}
                handlePageChange2={this.handlePageChange2}
                handlePageChange3={this.handlePageChange3}
                handlePageChange4={this.handlePageChange4}
                handlePageChange5={this.handlePageChange5} />)

                }
               
            </>
        )
    }
}
