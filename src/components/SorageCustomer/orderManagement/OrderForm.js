import React, { Component } from 'react'
import '../../styles/AddItem.css'
import { CgArrowLeftO } from "react-icons/cg";
import { NewOrder } from '../../api_config/api';
import { getInfo } from '../../helperMethods';
import Swal from "sweetalert2";
import Shipping from '../../../image/Shipping.svg'

export default class OrderForm extends Component {

    addOrder = (newOrder) => {
        console.log(newOrder);
        if (newOrder.Quantity.length > 0) {
            NewOrder(newOrder,getInfo().data.StorageId)
            .then(response => {
                console.log(response);
                Swal.fire({ icon: 'success', title: "Item has been added successfully" });
            })
            .catch(error => {
                Swal.fire({ icon: 'error', title: `Some think went wrong` });
            });
    }else{
        Swal.fire({ icon: 'error', title: `Please You need To add At Least One Item` });

    }
        }
       
    handelOrderSubmit = e => {
        const newOrder = this.props.data;
        e.preventDefault();
        this.addOrder(newOrder);
    };
    render() {
        const {CustomerName,ShippedBy}=this.props.data
        return (
            <div>
                <CgArrowLeftO onClick={this.props.toggleHandler} size={50} color={"#F9A826"} />

                <div class="container">
                    <div class="addItemCard">
                        <div class="addItemCard-image">
                            <h2 class="addItemCard-heading">
                                Let's Add Item
                                <small>To Your Storage</small>
                            </h2>
                        </div>
                        <div className="imageContainer">
                            <img src={Shipping} alt="lo" />
                        </div>
                        <form class="addItemCard-form">
                            <div class="input">
                                <input
                                    class="input-field"
                                    type="text"
                                    required
                                    name="CustomerName"
                                    onChange={this.props.onNameChange}
                                    value={CustomerName} />
                                <label class="input-label">Customer Name</label>
                            </div>
                            <label class="input-label">Shipping Co</label>

                            <div class="input">
                                <select
                                    class="selectItem"
                                    type="select"
                                    required
                                    name="ShippedBy"
                                    onChange={this.props.onNameChange}
                                    value={ShippedBy}
                                >
                               <option value="" disabled>Shipping Co</option>
                                <option value="SPL">SPL</option>
                                <option value="Aramex">Aramex</option>
                                <option value="SMSA">SMSA</option>
                                <option value="DHL">DHL</option>
                                    </select>
                            </div>
                            <div class="action">
                                <button className="action-button" onClick={e =>this.handelOrderSubmit(e)} >Add Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
