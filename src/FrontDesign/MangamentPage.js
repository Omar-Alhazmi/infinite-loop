import React, { Component } from 'react'
import Mangament from './Managment'
import SideBar from '../components/StorageAdminHome/StAdminSideBar'

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
