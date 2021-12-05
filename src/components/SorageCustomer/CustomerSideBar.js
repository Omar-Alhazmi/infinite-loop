import React, { Component } from 'react'
import '../styles/sideBar.css'
 import {Link} from 'react-router-dom'
export default class CustomerSideBar extends Component {
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
              <li ><Link to={'/CustomerChart'}>Home Page</Link></li>
              <li><Link to={'/Management'}>Management</Link></li>
              <li onClick={e=>this.logout(e)}><Link  to={'/'}>Log out</Link></li>
            </ul>
          </nav>
        </aside>
      </div>
    )
  }
}
