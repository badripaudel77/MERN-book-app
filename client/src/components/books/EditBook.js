import React, { Component } from 'react'
import axios from 'axios'

export default class AddBook extends Component {

      state = {
            name : '',
            author : '',
            publishers : '',
            pages :'',
            genres : []
       }
       async componentDidMount() { 
        this.props.getSingleBook(this.props.match.params._id)

        const genres = await axios.get('http://localhost:5000/api/genres')
        this.setState({ genres : genres.data})
        console.log('am i working ? ', this.props.match.params._id)
      }

      onInputChange = (e) => {
      this.setState({[e.target.name] : e.target.value }) //looks for name
    }

    onFormSubmit = (e) => {
      e.preventDefault();
     // this.props.onSearchUser(this.state)
        const book = {
          _id : this.props.match.params._id,
          name : this.state.name,
          author : this.state.author,
          publishers : this.state.publishers,
          pages : this.state.pages,
          genres : this.state.genres
        }

    axios.put('http://localhost:5000/api/books/'+book._id, book)
    .then(res => console.log(res))
    .catch(err => console.log("error occured while posting data ", err)) 
    console.log(book)
    window.location = "/books"
    }

    render() {
      const { name, author, publishers, pages, genres } = this.state;
      const { book, isLoading } = this.props;
        return (
        <div className="container">
            <h2>Update BOOK </h2>
            <form onSubmit = { this.onFormSubmit }>
              <div className="form-group">
                <label htmlFor="name">BookName:</label>
                  <input type="text" required className="form-control" id="name" 
                  placeholder="Enter Book name" name="name"
                  value={book.name} 
                  onChange={this.onInputChange}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                  <input type="text" required={ true } className="form-control" 
                  id="author" placeholder="Enter Author" name="author" 
                  onChange={this.onInputChange}
                  value={author}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="publishers">Publishers:</label>
                  <input type="text" required className="form-control" 
                  id="publishers" placeholder="Enter Publishers Name"
                  name="publishers" 
                  onChange={this.onInputChange}
                  value={publishers}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="pages">Pages:</label>
                <input type="number" required className="form-control"
                 id="pages" placeholder="Enter No of Page" name="pages" 
                 onChange={this.onInputChange}
                 value={pages}
                 />
              </div>
              <div className="form-group">
                <label htmlFor="genres">Category:</label>
                <select type="select" className="form-control" id="genres" 
                placeholder="Select genres" name="genres"
                value={genres}
                onChange={this.onInputChange}
                > 
                     { 
                      genres.map( genre => (
                        <option value={genre.name}>{genre.name }</option> 
                      ))
                  }
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Update</button>
            </form>
          </div>  
     )
    }
}