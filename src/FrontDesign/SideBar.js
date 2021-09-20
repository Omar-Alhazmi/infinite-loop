import React, { Component } from 'react'

export default class SideBar extends Component {
    render() {
        return (
            <div>
                  <aside className="sidebar">
    <nav className="nav">
      <ul>
        <li className="active"><a href="Hrb.html">Home Page</a></li>
        <li><a href="TrackPage.js">Tracking Packages</a></li>
        <li><a href="#">Mangament</a></li>
        <li><a href="#">Log out</a></li>
      </ul>
    </nav>
  </aside>
            </div>
        )
    }
}
