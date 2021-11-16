import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Weekly from './component/Weekly'
import WeeklyBattle from './component/WeeklyBattle'
import Popular from './component/Popular'
import PopularBattle from './component/PopulareBattle/PopularBattle'
import Favorites from './component/Favorites'
import Error from './component/Error'
import Home from './component/Home'
import Nav from './component/Nav/Nav'


export class App extends Component {
  render() {
    return (
      <BrowserRouter>

          <Nav/>
          
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/weekly" component={Weekly} />
          <Route exact path="/weekly-battle" component={WeeklyBattle} />
          <Route exact path="/popular" component={Popular} />
          <Route exact path="/popular-battle" component={PopularBattle} />
          <Route exact path="/favorites" component={Favorites} />
          <Route path='*' component={Error} />

        </Switch>
      </BrowserRouter>    
    )}
}

export default App
