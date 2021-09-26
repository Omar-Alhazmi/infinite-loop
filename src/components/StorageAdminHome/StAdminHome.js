import React, { Component } from 'react'
import StAdminSideBar from './StAdminSideBar'
import Chart from './Chart'

export default class Home extends Component {
    render() {
        return (
            <div className="HomeContiner">
                <StAdminSideBar />
                <Chart />
            </div>
        )
    }
}
