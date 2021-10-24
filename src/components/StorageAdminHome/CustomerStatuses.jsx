import React, { Component } from 'react'
import * as StyledTable from '../SorageCustomer/styledTabled'
import {  AddItemToStorage,getAllCustomer } from '../api_config/api';
import { getInfo } from '../helperMethods';
import { CgAdd } from "react-icons/cg";

import Swal from "sweetalert2";
import AddItem from '../addItemForm/AddItem'
export default class CustomerStatuses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Customers: [],
            addItem: false,
            Item: [],
            ItemData: {
                ItemName: "",
                ItemSize: 0
            }
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
    addItem = (newItem) => {
        AddItemToStorage(newItem,getInfo().data.StorageId)
            .then(response => {
                console.log(response);
                Swal.fire({ icon: 'success', title: "Item has been added successfully" });
            })
            .catch(error => {
                Swal.fire({ icon: 'error', title: `Some think went wrong` });
            });
    }
    handleChange = e => {
        const ItemData = { ...this.state.ItemData, [e.target.name]: e.target.value }
        this.setState(() => ({ ItemData }))
    }
    handelSubmit = e => {
        const newItem = this.state.ItemData;
        e.preventDefault();
        this.addItem(newItem);
    };
    addItemHandler = (e) => {
        this.setState({ addItem: !this.state.addItem })
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
        const {addItem,ItemData}=this.state
        return (
            <StyledTable.TableWrapper>
               
                {addItem === true ? 
                    <AddItem  addItem={addItem} data={ItemData} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} addItemHandler={this.addItemHandler} />
                    :
                    <>
                    <StyledTable.IconContainer>
                        <CgAdd 
                        // onClick={e => this.addItemHandler(e)}
                        size={50} color={"#5eba7e"} />
                        {/* <FcShipped size={50}/> */}
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
                    </>
                }
            </StyledTable.TableWrapper>
        )
    }
}