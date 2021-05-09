import React, { useState } from 'react'
import { getStreams } from '../../api/twitch';


const Content = (props) => {
  const [streams, setStreams] = useState([])

  function getstreams(evento) {
    getStreams({ game_id: evento.target.id, width: '348', height: '196' })
      .then((response) => setStreams(response.data))

  }

  return (
    <div className="row">
      
      <div className="col-12">
        {
          props.passadati.map((el, index) => {
            return (
              <div>
                <a href="#"> <img id="topgames" key={index} src={el.box_art_url} ></img> </a>
              </div>
            )
          })
        }

      </div>
      
      <div className="categorie">
        {
          props.passacategorie.map((el, index) => {
            return (
              <div>
                <a href="#"><img key={index} id={el.id} onClick={getstreams} src={el.box_art_url} ></img> </a>
              </div>
            )
          })
        }
      </div>

      <div className="streams">
        {
          streams.map((el, index) => {
            return (
              <div>
                <br></br>
                <p>{el.title}</p>
                <br></br>
                <a href="#"> <img key={index} src={el.thumbnail_url} id={el.id}></img> </a>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Content;