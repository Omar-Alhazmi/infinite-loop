import React, { Component } from 'react'
import SideBar from './SideBar'
import TrackTable from './TrackTable'

export default class TrackPage extends Component {
    render() {
        return (
            <div className="HomeContiner">
                <SideBar />
                <TrackTable />
            </div>
        )
    }
}
