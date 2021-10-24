import React, { Component } from 'react'
import SideBar from './CustomerSideBar'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import CustomerChart from './CustomerHome/CustomerChart'
import Management from './Management'
export default class MangamentPage extends Component {
  render() {
    return (
      <div className="HomeContiner">
        <Router>
          <SideBar />
          <Switch>
            <Route exact path="/CustomerChart">
              <CustomerChart />
            </Route>
            <Route exact path='/Management' >
              <Management />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
