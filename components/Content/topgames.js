import React, { useEffect, useState } from 'react'
import { getTopGames } from '../../api/twitch';
import {Link} from "react-router-dom";

const TopGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getTopGames({ after: '', before: '', first: 10, width: '188', height: '250', })
      .then(response => setGames(response.data))
  }, [])

  return (
      <div className="row">

        <div className="col-12">
          {
            games.map((el, index) => {
              return (
                <div>
                  <Link to={"/streams/" + el.id}>
                    <img id="topgames" key={index} src={el.box_art_url} ></img>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
  )
}

export default TopGames;




