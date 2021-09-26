import React, {Component}from 'react';
import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import SignIn from './components/SignPages/SignIn'
import SignUp from './components/SignPages/SignUp'
import PrivateRoute from './components/SignPages/PrivateRoute'
import StorageAdminHome from './components/StorageAdminHome/StAdminHome'
import MangamentPage from './FrontDesign/MangamentPage'
export default class App extends Component {
 
render() {
  return (
    <Router basename="infinite-loop">
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/SignIn' component={SignIn} exact />
      <Route exact path='/SignUp'>
            <SignUp />
          </Route>
      <PrivateRoute>
      <StorageAdminHome />
      <MangamentPage />
      </PrivateRoute>
    </Switch>
    </Router>
  )
}
};
