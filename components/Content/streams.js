import React, { useEffect, useState } from 'react'
import { getStreams } from '../../api/twitch';

const Streams = (props) => {
    const [streams, setStreams] = useState([])

    const streamsid = props.match.params.idstreams

  useEffect(() =>{
    getStreams({ game_id: streamsid, width: '348', height: '196' })
    .then((response) => setStreams(response.data))
  },[])

    return (
        <div>
            <div className="streams">
                {
                    streams.map((el, index) => {
                        return (
                            <div>
                                <br></br>
                                <p>{el.title}</p>
                                <br></br>
                                <a href="#"><img key={index} src={el.thumbnail_url} id={el.id}></img></a>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Streams