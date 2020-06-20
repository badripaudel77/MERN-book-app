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
            addedMessage : null
       }

      async componentDidMount() {
         const genres = await axios.get('http://localhost:5000/api/genres')
          this.setState({ genres : genres.data})
       }

      onInputChange = (e) => {
      this.setState({[e.target.name] : e.target.value }) //looks for name
    }

    onFormSubmit = (e) => {
      e.preventDefault();
     // this.props.onSearchUser(this.state)
        const book = {
          name : this.state.name,
          author : this.state.author,
          publishers : this.state.publishers,
          pages : this.state.pages,
          genres : this.state.genre
        }

    axios.post('http://localhost:5000/api/books', book)
    .then(res => console.log(res))
    .catch(err => console.log("error occured while posting data ", err)) 
    console.log(book)
    //alert("book added successfully !!!")
    this.setState({addedMessage : 'Book added successfully'})
    window.location = "/books"
    }

    render() {
      const { name, author, publishers, pages, genres, addedMessage } = this.state;
        return (
        <div className="container">
            <h2>ADD BOOK </h2>
        { addedMessage && <h2 style={{textAlign : 'center'}} className="alert alert-info">{addedMessage}</h2> }

            <form onSubmit = { this.onFormSubmit }>
              <div className="form-group">
                <label htmlFor="name">BookName:</label>
                  <input type="text" required className="form-control" id="name" 
                  placeholder="Enter Book name" name="name" 
                  onChange={this.onInputChange}
                  value={name}
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
                <label htmlFor="genre">Category:</label>
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
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>  
     )
    }
}