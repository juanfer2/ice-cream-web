import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../components/home/Home'
import Purchase from '../components/purchase/Purchase'
function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exaxt path="/purchase" component={Purchase} />
    </Switch>
  )
}

export default Routes
