import React, { Component } from 'react'
import axios from 'axios'

export default class AddBook extends Component {

      state = {
            name : '',
            author : '',
            publishers : '',
            pages :'',
            genres : [],
            genre : '',
            updatedMessage : ''
       }
       
        async componentDidMount() { 
        this.props.getSingleBook(this.props.match.params._id);

        const genres = await axios.get('http://localhost:5000/api/genres');
        this.setState({ genres : genres.data});

        console.log('am i working ? ', this.props.match.params._id);
      }

      componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
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
    this.setState({updatedMessage : "Book Updated Successfully."})
    window.location = "/books"
    }

    render() {
      const { name, author, publishers, pages, genres,genre, updatedMessage } = this.state;
      const { book, isLoading } = this.props;
    
        return (
        <div className="container">
            <h2>Update BOOK </h2>
            { updatedMessage && <h2 style={{textAlign : 'center'}} className="alert alert-info">{updatedMessage}</h2> }

            <form onSubmit = { this.onFormSubmit }>
              <div className="form-group">
                <label htmlFor="name">BookName:</label>
                  <input type="text" required className="form-control" id="name" 
                   name="name"
                  defaultValue = {book.name || '' } 
                  onChange={this.onNameInputChange}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author:</label>
                  <input type="text" required={ true } className="form-control" 
                  id="author" name="author" 
                  onChange={this.onInputChange}
                  defaultValue = {book.author || ''}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="publishers">Publishers:</label>
                  <input type="text" required className="form-control" 
                  id="publishers"
                  name="publishers" 
                  onChange={this.onInputChange}
                  defaultValue={book.publishers || ''}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="pages">Pages:</label>
                <input type="number" required className="form-control"
                 id="pages" name="pages" 
                 onChange={this.onInputChange}
                 defaultValue={book.pages || ''}
                 />
              </div>
              <div className="form-group">
                <label htmlFor="genres">Category:</label>
                <select type="select" className="form-control" 
                id="genre" 
                name="genre"
                onChange={this.onInputChange}
                > 
                 <option value="selectCategory">Select</option>
                  { 
                      genres.map( genre => (
                        <option key={genre._id} value={genre.name}>{genre.name }</option> 
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