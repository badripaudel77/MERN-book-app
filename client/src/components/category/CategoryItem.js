import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const CategoryItem = (props) => {
    const { category, isLoading } = props;
      // console.log(category, 'categoryitem.js')
      const deleteItem = () => {
        axios.delete(`http://localhost:5000/api/genres/${category._id}`)
        .then(() => console.log("category deleted "))
    
        window.location = "/categories/"
            
         }

 return (
      <div>        
            <div className="container">            
                <table border="border" className="table table-striped">
                            <tbody>
                            <tr>
                                <td>{ category.name }</td>
                                <td> <Link to = {`/cateogories/${category._id}`} > Edit </Link>  </td>
                                <td> <Link onClick={deleteItem} > Delete </Link>  </td>
                              </tr>
                            </tbody>
                </table>
            </div>
     </div>
       )
}
