import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2';
import {ChartContainer} from './styleChart'
import { getAllStorageCapacity } from '../api_config/api';

export default class StorageAnalysis extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Storage: null,
        };
    }

    componentDidMount() {
        //API call 
        getAllStorageCapacity()
            .then((response) => {
                this.setState({
                    Storage: response.data
                });
            })
            .catch((error) => {
            })

    }GeneralCapacity
        render() {
            const {Storage}  = this.state
            let InStorage = 0
            let EmptySpace = 6000
            if(Storage != null){
                InStorage = Storage[0].TotalCapacity 
            }
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