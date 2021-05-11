import React, { useEffect } from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';
import { useState } from 'react'

import {Link} from "react-router-dom";


const Navbar = (props) => {
  const { loading, error, user } = useProfile();
  const [data, setData] = useState([]);
  const [cat, setCat] = useState([])


  useEffect(() => {
    getTopGames({ after: '', before: '', first: 10, width: '188', height: '250', })
      .then(response => setData(response.data))
  }, [])

  function getTopgames() {
    props.setTopGames(data)
  }

  useEffect(() => {
    searchCategories({ query: '/' })
      .then(response => setCat(response.data))
  }, [])


  function getCategories() {
    props.setCategories(cat)
  }

  return (
      <nav className={classes.navbar}>
        <div className={classes.navbar__item}>
          <div>
            <Link to="/topgames" onClick={getTopgames} >Top Games</Link>
            <Link to="/categories" onClick={getCategories}>Sfoglia Categorie</Link>
          </div>
        </div>

        <div className={classes.navbar__item}>
          {!loading ? (
            <img
              src={user.profile_image_url}
              className={classes.avatar}
              alt="Profile"
              width={60}
            />
          ) : (
            <div className={classes.avatar} style={{ width: 60, height: 60 }} />
          )}
        </div>
      </nav>

  );
};

export default Navbar;
