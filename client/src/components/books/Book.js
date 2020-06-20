import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { BookItem } from './BookItem';

export class Book extends Component {

    render() {
        const { books, isLoading } = this.props;
         // console.log(books, isLoading)
         return (
            <div>
                <Link to="/add/books/" className="btn btn-primary"> Add Book </Link> <br></br><br />

                <h2 style={{textAlign : 'center'}} className="alert alert-success"> All List of Books </h2>
     
                { books.map( book => {
                    return(
                            <div key={book._id}>
                                    <BookItem book = {book} isLoading ={ isLoading} />                             
                            </div>
                         )
                })}
            </div>
        )
    }
}
