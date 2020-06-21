import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export const CategoryItem = (props) => {
    const { category } = props;
      // console.log(category, 'categoryitem.js')
     
      const deleteItem = () => {
        const toDelete = window.confirm('are you sure to delete this itme ? ');
       
        if(!toDelete) {
          return false;
        }

        else {
             axios.delete(`http://localhost:5000/api/genres/${category._id}`)
            // .then(() => console.log("category deleted "))
             window.location = "/categories/"
        }
            
         }
    return (
        <div> 
             <div className="container">            
                        <table border="border" className="table table-striped">
                                    <tbody>
                                    <tr>
                                        <td>{ category.name }</td>
                                        <td> <Link to = {`/edit/cateogories/${category._id}`} > Edit </Link>  </td>
                                        <td> <Link to={`/categories`} onClick={deleteItem} > Delete </Link>  </td>
                                      </tr>
                                    </tbody>
                        </table>
            </div>
     </div>
       )
}
