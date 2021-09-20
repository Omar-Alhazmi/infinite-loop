import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import {LabelContainer,LabelCard,CardHeadLine,ChartContainer} from './styleChart'
export default class Chart extends Component {
    render() {

           let EmptySpace = 10
           let InStorage = 112 
        
        const StorageData = {
            labels: [`In Storage : ${InStorage}`
                , `Empty Space: ${EmptySpace}`],
            datasets: [
                {
                    data: [InStorage, EmptySpace],
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.6)',
                        'rgba(0, 0, 255, 0.6)',

                    ],

                    borderColor: [
                        'rgba(255, 0, 0, 0.9)',
                        'rgba(0, 0, 255, 0.9)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
        return (

                <div className="chartBar">                 
                    <ChartContainer>
                        <div>
                            {InStorage === 0 && EmptySpace === 0 ? <div class="spinner">Loading...</div> : 
                            <Doughnut data={StorageData} />}
                        </div>
                    </ChartContainer>
            </div>
            
        )
    }
}
