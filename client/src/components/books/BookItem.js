import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export const BookItem = (props) => {
    const { book, isLoading } = props;
      // console.log(book, 'bookitem.js')
      
 const deleteItem = () => {
    axios.delete(`http://localhost:5000/api/books/${book._id}`)
    .then(() => console.log("book deleted "))

    window.location = "/books/"
        
     } 

    return (
        <div>  
            <div className="container">            
                <table border="border" className="table table-striped">
                    <thead>
                            <tr>
                                <th>Book Name</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th> <strong> ACTION  </strong></th>
                            </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <td>{ book.name }</td>
                                <td>{ book.author }</td>
                                <td>{book.genres}</td>
                                <td> 
                                        <Link to={`/books/${book._id}`} > Details  </Link> {` |||  `} 
                                        <Link to={`/edit/books/${book._id}`} > Edit </Link> {` |||  `} 
                                        <Link to="" onClick={deleteItem}> Delete </Link> 
                                 </td>

                              </tr>
                        </tbody>
                 </table> 
            </div>
            </div>        
    )
}


