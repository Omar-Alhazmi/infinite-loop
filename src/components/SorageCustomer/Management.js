import React, { Component } from 'react'
import * as StyledTable from './styledTabled'
import { getStorageById, AddItemToStorage } from '../api_config/api';
import { getInfo } from '../helperMethods';
import { CgAdd } from "react-icons/cg";
// import { FcShipped } from "react-icons/fc";

import Swal from "sweetalert2";
import AddItem from '../addItemForm/AddItem'
export default class Management extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Storage: null,
            addItem: false,
            Item: [],
            ItemData: {
                ItemName: "",
                ItemSize: 0,
                Quantity:0
            }
        };
    }

    componentDidMount() {
        //API call 
        getStorageById(getInfo().data.StorageId)
            .then((response) => {
                console.log(response.data.Storage.Items);
                this.setState({
                    Storage: response.data,
                    Item: response.data.Storage.Items
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
        let storageData = <div class="spinner">Loading...</div>
        if (this.state.Item) {
        if (this.state.Item.length > 0) {
            storageData = this.state.Item.map((item, index) => {
                return (
                    <StyledTable.TableBodyContainer id={item._id} key={index}>
                        <StyledTable.TableTr> 
                            <StyledTable.TableTd>{item._id.slice(-6,-1).toUpperCase()}</StyledTable.TableTd>
                            <StyledTable.TableTd>{item.ItemName}</StyledTable.TableTd>
                            <StyledTable.TableTd>{item.ItemSize}</StyledTable.TableTd>
                            <StyledTable.TableTd>{item.Quantity}</StyledTable.TableTd>
                        </StyledTable.TableTr>
                    </StyledTable.TableBodyContainer>
                )
            })
        }
    }
        const {addItem,ItemData}=this.state
        return (
            <StyledTable.TableWrapper>
               
                {addItem === true ? 
                    <AddItem  addItem={addItem} data={ItemData} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} addItemHandler={this.addItemHandler} />
                    :
                    <>
                    <StyledTable.IconContainer>
                        <CgAdd onClick={e => this.addItemHandler(e)}size={50} color={"#5eba7e"} />
                        {/* <FcShipped size={50}/> */}
                        </StyledTable.IconContainer>
                     <StyledTable.TableContainer>
                        <StyledTable.TableHedContainer>
                            <tr>
                                <StyledTable.TableTh className="tableHeader">SKU</StyledTable.TableTh>
                                <StyledTable.TableTh className="tableHeader">Item Name</StyledTable.TableTh>
                                <StyledTable.TableTh className="tableHeader">Item Size</StyledTable.TableTh>
                                <StyledTable.TableTh className="tableHeader">Item Quantity</StyledTable.TableTh>

                            </tr>
                        </StyledTable.TableHedContainer>
                        {storageData}
                    </StyledTable.TableContainer>
                    </>
                }
            </StyledTable.TableWrapper>
        )
    }
}