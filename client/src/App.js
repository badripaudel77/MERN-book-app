import React, { Component } from 'react'
import './App.css';
import { Navbar } from './layouts/Navbar';
import { PageNotFound } from './layouts/PageNotFound'

import { Book } from './components/books/Book'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Category from './components/category/Category';
import { Home } from './components/Home';
import AddBook from './components/books/AddBook';
import AddCategory from './components/category/AddCategory';
import EditBook from './components/books/EditBook';
import EditCategory from './components/category/EditCategory';
import BookDetails from './components/books/BookDetails'

class App extends Component {

      state = {
             books : [],
             categories : [],

             book : {},
             category : {},

             isLoading : false,
      }

      async componentDidMount() {
         const bookResponse = await axios.get('http://localhost:5000/api/books');
         const categoryResponse = await axios.get('http://localhost:5000/api/genres');
         // console.log(response.data)
         this.setState({books : bookResponse.data, categories : categoryResponse.data, isLoading : false })
          //console.log(this.state.categories)
    } 

  //only id is unique
  getSingleBook = async (bookId) => {
    //console.log("app.js book id " , bookId) 
    this.setState({isLoading : true})
    const res = await axios.get(`http://localhost:5000/api/books/${bookId}`)
    // console.log(res.data)
    this.setState({ book : res.data, isLoading : false})
  }

         //only id is unique
      getSingleCategory = async (categoryId) => {
      //console.log("app.js book id " , bookId) 
      this.setState({isLoading : true})
      await axios.get(`http://localhost:5000/api/genres/${categoryId}`)
      .then( (res ) => this.setState({ category : res.data, isLoading : false}))

      //console.log(this.state.category, " app.js")
   }

  render() {
    const { books, categories, book, isLoading } = this.state; 
    return (  
  <div>
       <div className="container">
            <Router>
                        <Navbar />
                  <Switch>
                     
                     <Route exact path= {"/"} component={Home} />
                     <Route exact path= {"/add/books"} component ={AddBook} />
                     <Route exact path={"/add/categories"} component ={AddCategory} />

                      <Route exact path= {"/books"} render={ props => (
                                 <Book {...props } books={books} isLoading={isLoading} />
                        )
                        } 
                        />
                        <Route exact path= {"/categories"} render={ props => (
                                <Category {...props } categories ={ categories} isLoading={isLoading} />
                              )
                        }  
                         />
                              <Route
                                           exact path={ "/edit/books/:_id/" }
                                            render={ (props) => (
                                                        <EditBook {...props } 
                                                        book={book}
                                                        key={book._id}
                                                        loadiing = {isLoading}
                                                        getSingleBook ={ this.getSingleBook }
                                                        />
                                                  )      
                                         }
                               />
                                <Route
                                           exact path={ "/books/:_id/" }
                                            render={ (props) => (
                                                        <BookDetails {...props } 
                                                        book={book}
                                                        loadiing = {isLoading}
                                                        getSingleBook ={ this.getSingleBook }
                                                        />
                                                  )      
                                         }
                               />

                         <Route
                              exact path={ "/cateogories/:_id/" }
                              render={ (props) => (
                                          <EditCategory {...props } 
                                          category={this.state.category}
                                          loadiing = {isLoading}
                                          getSingleCategory ={this.getSingleCategory}
                                          />
                                    )      
                        }
                        />              
                        <Route path="*" component={PageNotFound} />
                  </Switch>
            </Router>
       </div>
  </div>
    )
  }
}

export default App;
