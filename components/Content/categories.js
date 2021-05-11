import React, { useState,useEffect } from 'react'
import { searchCategories } from '../../api/twitch';

import {Link} from "react-router-dom";

const Categories = () => {
  const [cat, setCat] = useState([])

  useEffect(() => {
    searchCategories({ query: '/' })
      .then(response => setCat(response.data))
  }, [])

  return (
    
      <div className="row">

        <div className="categorie">
          {
           cat.map((el, index) => {
              return (
                <div>
                  <Link to={"/streams/" + el.id}>
                    <img key={index} id={el.id} src={el.box_art_url}></img>
                  </Link>
                </div>
              )
            })
          }
        </div>

      </div>
  )
}

export default Categories;

