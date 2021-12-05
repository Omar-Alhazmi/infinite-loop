import React, { Component } from 'react'
import * as StyledTable from '../SorageCustomer/styledTabled'
import { getAllStorages } from '../api_config/api';
// import { getInfo } from '../helperMethods';
export default class Storages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Storages: [],
        };
    }
    componentDidMount() {
        //API call 
        getAllStorages()
            .then((response) => {
                this.setState({
                    Storages: response.data,
                });
            })
            .catch((error) => {
            })

    }
    render() {
        let StoragesData = <div class="spinner">Loading...</div>
        if (this.state.Storages.length > 0) {
            StoragesData = this.state.Storages.map((Storage, index) => {
                return (
                    <StyledTable.TableBodyContainer id={Storage._id} key={index}>
                        <StyledTable.TableTr>
                            <StyledTable.TableTd>{Storage.BelongTo.CompanyName}</StyledTable.TableTd>
                            <StyledTable.TableTd>{Storage.Items.length}</StyledTable.TableTd>
                            <StyledTable.TableTd>{Storage.StorageArea}</StyledTable.TableTd>
                            <StyledTable.TableTd>{Storage.StorageType}</StyledTable.TableTd>
                        </StyledTable.TableTr>
                    </StyledTable.TableBodyContainer>
                )
            })
        }
        return (
            <StyledTable.TableWrapper>
                <StyledTable.IconContainer>
                </StyledTable.IconContainer>
                <StyledTable.TableContainer>
                    <StyledTable.TableHedContainer>
                        <tr>
                            <StyledTable.TableTh className="tableHeader">CompanyName</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">Storage Quantity</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">StorageArea</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">StorageType</StyledTable.TableTh>
                        </tr>
                    </StyledTable.TableHedContainer>
                    {StoragesData}
                </StyledTable.TableContainer>
            </StyledTable.TableWrapper>
        )
    }
}