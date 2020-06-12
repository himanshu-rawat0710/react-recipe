import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default class Search extends Component {
    render() {
        const {handleChange, handleSubmit, search} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h1 className='text-slanted text-capitalize'>
                            Search recipes with <strong className='text-orange'>Tasty Recipe</strong>
                        </h1>
                        <form  className="mt-4">
                            <label htmlFor="search" className='text-capitalize'>Types recipes separated by commas
                            </label>
                            <div className="input-group">
                                <input type='text' name='search' className="form-control" placeholder='onion,tomato,carrot'
                                value={search}
                                onChange={handleChange}/>

                                <div className="input-group-append">
                                    <button type='submit' className='input-group-text bg-primary text-white' onClick={handleSubmit}>
                                        <FontAwesomeIcon icon={faSearch} />
                                        
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
