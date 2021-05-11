import React from 'react';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';
import {Link} from "react-router-dom";


const Navbar = () => {
  const { loading, error, user } = useProfile();

  return (
      <nav className={classes.navbar}>
        <div className={classes.navbar__item}>
          <div>
            <Link to="/topgames">Top Games</Link>
            <Link to="/categories">Sfoglia Categorie</Link>
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
