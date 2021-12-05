import React, { Component } from 'react'
import SideBar from './AdminSideBar'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import StorageAnalysis from './StorageAnalysis'
import CustomerStatuses from './CustomerStatuses';
import Storages from './Storages';
export default class RouteHandling extends Component {
  render() {
    return (
      <div className="HomeContiner">
        <Router>
          <SideBar />
          <Switch>
            <Route exact path="/StorageAnalysis">
              <StorageAnalysis />
            </Route>
            <Route exact path='/Storages' >
              <Storages />
            </Route>
            <Route exact path='/CustomerStatuses' >
              <CustomerStatuses />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
