import React from 'react'

export default class Content extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return <div>

          {
            this.props.passadati.map((el)=>{
              return  <a href="#"> <img src={el.box_art_url}></img> </a>
            })
          }
      </div>
    }
    
}