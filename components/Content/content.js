import React, { useState } from 'react'
import Streams from './streams';
import TopGames from './topgames'
import Categories from './categories'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Content = () => {

  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route path="/topgames" component={TopGames}></Route>
      <Route path="/categories" component={Categories}></Route>
      <Route path={"/streams/:idstreams"} component={Streams}></Route>
    </Switch>
  )
}

export default Content;

