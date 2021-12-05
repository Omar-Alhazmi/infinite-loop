import React, { Component } from 'react'
import * as StyledTable from '../SorageCustomer/styledTabled'
import { getAllCustomer } from '../api_config/api';
export default class CustomerStatuses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Customers: [],
        };
    }

    componentDidMount() {
        //API call 
        getAllCustomer()
            .then((response) => {
                this.setState({
                    Customers: response.data,
                });
            })
            .catch((error) => {
            })
    }

    render() {
        let CustomersData = <div class="spinner">Loading...</div>
        if (this.state.Customers.length > 0) {
            CustomersData = this.state.Customers.map((Customer, index) => {
                return (
                    <StyledTable.TableBodyContainer id={Customer._id} key={index}>
                        <StyledTable.TableTr>
                            <StyledTable.TableTd>{Customer.FullName}</StyledTable.TableTd>
                            <StyledTable.TableTd>{Customer.CompanyName}</StyledTable.TableTd>
                            <StyledTable.TableTd>{Customer.Email}</StyledTable.TableTd>
                            <StyledTable.TableTd>{Customer.Phone}</StyledTable.TableTd>
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
                            <StyledTable.TableTh className="tableHeader">Customer Name</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">CompanyName</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">Email</StyledTable.TableTh>
                            <StyledTable.TableTh className="tableHeader">Phone</StyledTable.TableTh>
                        </tr>
                    </StyledTable.TableHedContainer>
                    {CustomersData}
                </StyledTable.TableContainer>
            </StyledTable.TableWrapper>
        )
    }
}