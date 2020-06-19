import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default class Search extends Component {
    render() {
        const {handleChange, handleSubmit, search , handlePageChange6, handlePageChange2, handlePageChange3, handlePageChange4, handlePageChange5} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                        <h4 className='text-slanted text-capitalize ' style={{fontSize:'3.5rem'}}>
                            Search recipes with <strong className='text-orange' style={{fontFamily: 'Open Sans', fontSize:'inherit', fontWeight:'bolder'}}>FOODGASM</strong>
                        </h4>
                        <form  className="mt-4">
                            <label htmlFor="search" className='text-capitalize'>Type recipes separated by commas
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
                        {/* Text  */}
                        {/* <button onClick={handlePageChange}>
                            second page
                        </button> */}

                        <nav  className='mt-3' aria-label="...">
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
                    </div>
                </div>
            </div>
        )
    }
}
