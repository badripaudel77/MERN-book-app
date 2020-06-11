import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
           <h1 style={{margin : '25px', textAlign : 'center'}}>
               Welcome to this app.
           </h1>
          
           <div style= {linkContainer}>
                    <Link to="add/books" className="alert alert-success mr-15" style={{marginRight : '25px'}}> Add Books</Link> 
                    <Link to="add/categories" className="alert alert-primary mr-15" style={{marginRight : '25px'}} > Add Categories</Link>
           </div>
        </div>
    )
}
const linkContainer = {
    padding : '35px'
}