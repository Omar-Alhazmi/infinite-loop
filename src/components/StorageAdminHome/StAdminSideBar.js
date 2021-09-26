import React, { Component } from 'react'
import './sideBar.css'
import {Link} from 'react-router-dom'
export default class StAdminSideBar extends Component {
logout=(e)=>{ 
    localStorage.clear();
    window.location.reload(false);
    }
  render() {
    return (
      <div>
        <aside className="sidebar">
          <nav className="nav">
            <ul>
              <li className="active"><Link to={'/'}>Home Page</Link></li>
              <li><Link to={'/'}>Tracking Packages</Link></li>
              <li><Link to={'/'}>Management</Link></li>
              <li onClick={e=>this.logout(e)}><Link  to={'/'}>Log out</Link></li>
            </ul>
          </nav>
        </aside>
      </div>
    )
  }
}
