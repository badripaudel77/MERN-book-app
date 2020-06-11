import React, { Component } from 'react'
import axios from 'axios'

export default class EditCategory extends Component {
      state = {
            name : "",
       }
      
       componentDidMount() {
        //console.log(' cdm working ? ', this.props.match.params._id) //YES
        this.props.getSingleCategory(this.props.match.params._id);
    }

      onInputChange = (e) => {
      this.setState({name: e.target.value }) //looks for name
     }

    onFormSubmit = (e) => {
        e.preventDefault();
        const category = {
          _id : this.props.match.params._id,
          name : this.state.name
        }

    axios.put(`http://localhost:5000/api/genres/${category._id}`, category)
    .catch( error => console.log("error occured ")) //set error to the state var and ...
   // console.log(category)
    window.location = "/categories"
    }

    render() {
      
      const { category, isLoading } = this.props;

      if(category) {console.log(category.name, " edit")}
      if(isLoading || !category ) {
          return <h3>Category is not loaded properly.</h3>
      }
        return (
        <div className="container">
            <h2>Update CATEGORY </h2>
            <form onSubmit = { this.onFormSubmit }>
              <div className="form-group">
                <label htmlFor="name">Category Name:</label>
                  <input type="text" required className="form-control" id="name" 
                  onChange={this.onInputChange}
                  //value={this.state.name }
                  value={category.name}
                  />
              </div>  
              <button type="submit" className="btn btn-primary">Update Category</button>
            </form>
          </div>  
     )
    }
}