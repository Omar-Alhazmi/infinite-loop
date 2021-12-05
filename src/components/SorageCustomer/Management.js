import React, { Component } from 'react'
import * as StyledTable from './styledTabled'
import { getStorageById, AddItemToStorage } from '../api_config/api';
import { getInfo } from '../helperMethods';
import { CgAdd } from "react-icons/cg";
import { FcShipped } from "react-icons/fc";
import OrderForm from './orderManagement/OrderForm'
import Swal from "sweetalert2";
import AddItem from '../addItemForm/AddItem'
import OneItem from './OneItem';
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
                Quantity: 0
            },
            orderItem: {
                ids: [],
                CustomerName: "",
                OrderStatus: "Shipping",
                ShippedBy: "",
                Quantity: []
            },
            Quantity: 0,
            order: false,

        };
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
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

        AddItemToStorage(newItem, getInfo().data.StorageId)
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
    handleOrderChange = e => {
        const orderItem = { ...this.state.orderItem, [e.target.name]: e.target.value }
        this.setState(() => ({ orderItem }))
    }
    handleQuantityChange = e => {
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }

    handelSubmit = e => {
        const newItem = this.state.ItemData;
        e.preventDefault();
        this.addItem(newItem);
    };
    addItemHandler = (e) => {
        this.setState({ addItem: !this.state.addItem })
    }
    orderHandler = (e) => {
        this.setState({ order: !this.state.order })
    }

    render() {
        let storageData = <div class="spinner">Loading...</div>
        if (this.state.Item) {
            if (this.state.Item.length > 0) {
                storageData = this.state.Item.map((item, index) => {
                    return (
                        <StyledTable.TableBodyContainer key={index}>
                            <StyledTable.TableTr>
                                <OneItem
                                    id={item._id}
                                    ItemName={item.ItemName}
                                    ItemSize={item.ItemSize}
                                    Quantity={item.Quantity}
                                    index={index}
                                    orderItem={this.state.orderItem}
                                />
                            </StyledTable.TableTr>
                        </StyledTable.TableBodyContainer>
                    )
                })
            }
        }
        const { addItem, ItemData, order, orderItem } = this.state
        return (
            <StyledTable.TableWrapper>
                {addItem === true ?
                    <AddItem addItem={addItem} data={ItemData} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} addItemHandler={this.addItemHandler} />
                    : order === true ?
                        <OrderForm data={orderItem} onNameChange={e => this.handleOrderChange(e)} toggleHandler={this.orderHandler} /> :
                        <>
                            <StyledTable.IconContainer>
                                <CgAdd className={"onHover"} onClick={e => this.addItemHandler(e)} size={50} color={"#5eba7e"} />
                                <FcShipped className={"onHover"} size={50} onClick={e => this.orderHandler(e)} />
                            </StyledTable.IconContainer>
                            <StyledTable.TableContainer>
                                <StyledTable.TableHedContainer>
                                    <tr>
                                        <StyledTable.TableTh className="tableHeader">SKU</StyledTable.TableTh>
                                        <StyledTable.TableTh className="tableHeader">Item Name</StyledTable.TableTh>
                                        <StyledTable.TableTh className="tableHeader">Item Size</StyledTable.TableTh>
                                        <StyledTable.TableTh className="tableHeader">Item Quantity</StyledTable.TableTh>
                                        <StyledTable.TableTh className="tableHeader">Shipping Quantity</StyledTable.TableTh>
                                        <StyledTable.TableTh className="tableHeader">Add To Cart</StyledTable.TableTh>
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