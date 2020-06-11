import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

export default class BookDetails extends Component {
    componentDidMount() {
        this.props.getSingleBook(this.props.match.params._id);
    }
    render() {
        const { book, isLoading } = this.props;
        //console.log(book, isLoading , " from bookdetails ")

        if(isLoading || !this.props.book) {
            return <div>Book is Loading, Please wait. </div>
        }
        return (
          <div>
                 <h3> Details </h3>
                <div style={bookDetailsStyle}>
                    Book name : { book.name } <br /> 
                    Author : { book.author } < br />
                    Pages : { book.pages } <br />
                </div>
                 <div style={backStyle}>
                    <Link to="/books"  > Back To Books</Link>
                 </div>
          </div> 
        )
    }
}

const backStyle = {
    backgroundColor : 'black',
    padding : '10px',
    marginLeft : '28px',
    width : '30%',
    textAlign : 'center',
    dispplay : 'block'
 }

const bookDetailsStyle = {
    backgroundColor : 'gray',
    color : 'white',
    padding : '35px',
    margin : '25px'
}

