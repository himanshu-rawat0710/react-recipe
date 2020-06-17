import React, { Component } from 'react'
import './Footer.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithub ,faFacebookF} from "@fortawesome/free-brands-svg-icons"

export default class Footer extends Component {
    render() {
        return (
            <div>
                

                {/* <!-- Site footer --> */}
                <footer className="site-footer">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">
                            Hope this site helped you what you looking for. This site has all the basic elements that you need to start making your dish like summary, dish-types, meal-type, preparation-time, calories, serving, detail info of ingredients need and also full instructions how to make your favourite food or dish.
                            Also it provide the feature of searching what you looking for by ingredients name etc.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Some More of my work</h6>
                        <ul className="footer-links">
                        <li><a href="https://himanshu-rawat0710.github.io/Uttarakhand-Odyssey/">Uttarakhand Odyssey</a></li>
                        <li><a href="https://the-todo-list.netlify.app/">To-do List</a></li>
                        <li><a href="https://the-city-tour.netlify.app/">City-tour</a></li>
                        <li><a href="https://himanshu-rawat0710.github.io/search-image/">Image-Search</a></li>
                        
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                        <li><a href="https://www.linkedin.com/in/himanshu-rawat-0710/">About Me</a></li>
                        <li><a href="mailto:ryannair435@gmail.com">Contact</a></li>
                        <li><a href="https://github.com/himanshu-rawat0710">Contribute</a></li>
                        
                        
                        </ul>
                    </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
                    <a href="https://www.linkedin.com/in/himanshu-rawat-0710/"> Himanshu Rawat</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                        <li><a className="linkedin" href="https://www.linkedin.com/in/himanshu-rawat-0710/"><FontAwesomeIcon icon={faLinkedinIn} /> </a></li>
                        <li><a className="github" href="https://github.com/himanshu-rawat0710"><FontAwesomeIcon icon={faGithub} /> </a></li>
                        <li><a className="gmail" href="mailto:ryannair435@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> </a></li>
                        <li><a className="linkedin" href="https://www.facebook.com/himanshu.rawat.7777"><FontAwesomeIcon icon={faFacebookF} /> </a></li>   
                        </ul>
                    </div>
                    </div>
                </div>
            </footer>
            </div>
        )
    }
}
