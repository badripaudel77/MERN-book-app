import React, {Fragment} from 'react'
import {BrowserRouter as Router,  Link } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div>
             
            <nav className="navbar navbar-expand-sm bg-dark">
               <ul className="navbar-nav">
                     <React.Fragment>
                            <li className="nav-item">
                               <Link to ="/" className="nav-link" >Home</Link>
                            </li>
                            
                            <li className="nav-item">
                              <Link to="/books" className="nav-link">Books</Link>
                            </li>
                            <li className="nav-item">
                             <Link to="/categories" className="nav-link">Categories</Link>
                            </li>
                        </React.Fragment> 
                  </ul>
            </nav>
            <div className="jumbotron center" >
                    <h2>MERN Stack App</h2>
                    <p>Now perform operations you need.</p>     
                </div> 
    </div>
    )
}
