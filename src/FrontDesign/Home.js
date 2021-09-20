import React, { Component } from 'react'
import SideBar from './SideBar'
import TrackTable from './TrackTable'
import Chart from './Chart'

export default class Home extends Component {
    render() {
        return (
            <div className="HomeContiner">
                <SideBar />
                <Chart />
            </div>
        )
    }
}
