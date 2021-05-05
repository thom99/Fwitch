import React from 'react'
import { getGames } from '../../api/twitch';


export default class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = [{ games: "" }]

  }

  getgames(evento) {
    getGames({ id: evento.target.id, name: evento.target.getAttribute("nome") })
      .then((response) => console.log(response))
    console.log(evento.target.getAttribute("nome"))
    console.log(evento.target.id)

  }

  render() {
    return (
      <div className="row">

        <div className="col-12">
          {
            this.props.passadati.map((el) => {
              return <a href="#"> <img id="topgames" src={el.box_art_url} ></img> </a>
            })
          }

        </div>

        <div className="categorie">
          {
            this.props.passacategorie.map(el => {
              return (
                <div>
                  <a href="#" onClick={this.getgames} ><img src={el.box_art_url} id={el.id} nome={el.name}></img> </a>
                </div>
              )
            })
          }

        </div>

      </div>

    )
  }

}