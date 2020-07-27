import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'

import CarShoppingModal from './components/carShopping/CarShoppingModal'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navbar />
          <CarShoppingModal />
          <Routes />
        </Fragment>
      </Router>
    </div>
  )
}

export default App
