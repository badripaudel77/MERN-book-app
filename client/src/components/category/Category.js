import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { CategoryItem } from './CategoryItem';

export default class Category extends Component {
    
 render() {
        const { categories, isLoading } = this.props;
      //  console.log(categories, isLoading)
         return (
            <div>
                <Link to="/add/categories/" className="btn btn-primary"> Add Category </Link> <br></br><br />

            <h2 style={{textAlign : 'center'}} className="alert alert-success"> All List of Categories of books </h2>
            <div className="container">            
                <table border="border" className="table table-striped">
                <thead>
                            <tr>
                                <th>Category Name</th>
                                <th> <strong> ACTION  </strong></th>
                            </tr>
                 </thead>
                </table> 
               </div>
               
                { categories.map( category => {
                    return <CategoryItem key={category._id} category={ category } isLoading={ isLoading }/>
                })}
                
            </div>
        )
    }
}
