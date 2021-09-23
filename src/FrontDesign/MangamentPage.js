import React, { Component } from 'react'
import Mangament from './Managment'
import SideBar from './SideBar'

export default class MangamentPage extends Component {
    render() {
        return (
            <div className="HomeContiner">

                <SideBar />
                <Mangament />

            </div>
        )
    }
}
