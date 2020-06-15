import React, { Component } from 'react'
import axios from 'axios'
export default class AddCategory extends Component {
    state = {
      name : '',
      addedMessage : ''
    }

    onInputChange = (e) => {
      this.setState({[e.target.name] : e.target.value }) //looks for name
    }

    onFormSubmit = (e) => {
      e.preventDefault();
     // this.props.onSearchUser(this.state)
        const genre = {
          name : this.state.name,
        }

    axios.post('http://localhost:5000/api/genres', genre)
    .then(this.setState({addedMessage : 'category has been added !'}))
    .then(res => console.log(res))
    .catch(err => console.log("error occured while posting data ", err)) 

    console.log(genre)
    window.location = "/categories"
    }

    render() {
      const { name , addedMessage } = this.state;
        return (
        <div className="container">
            <h2>ADD Category </h2>
            { addedMessage && <h2 style={{textAlign : 'center'}} className="alert alert-info">{addedMessage}</h2> }

            <form onSubmit = { this.onFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Category Name:</label>
                  <input type="text" required className="form-control" id="name" 
                  placeholder="Enter Category name" name="name" 
                  onChange={this.onInputChange}
                  value={name}
                  />
              </div>
              
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>  
     )
    }
}
