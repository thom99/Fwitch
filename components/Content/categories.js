import React, { useState } from 'react'
// import { getStreams } from '../../api/twitch';
import Streams from '../Streams/streams';
import TopGames from '../Content/topgames'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Categories = (props) => {
  // const [streams, setStreams] = useState([])

  // function getstreams(evento) {
  //   getStreams({ game_id: evento.target.id, width: '348', height: '196' })
  //     .then((response) => setStreams(response.data))

  // }
  return (
    
      <div className="row">

        <div className="categorie">
          {
            props.passacategorie.map((el, index) => {
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

        <Switch>
          <Route exact path="/"></Route>
          <Route path="/topgames" component={TopGames}></Route>
          <Route path={"/streams/:idstreams"} component={Streams}></Route>
        </Switch>

      </div>
    
  )
}

export default Categories;

