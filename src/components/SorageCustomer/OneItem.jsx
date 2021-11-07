import React, { Component } from 'react'
import * as StyledTable from './styledTabled'
import Swal from "sweetalert2";
import { MdAddShoppingCart } from "react-icons/md";

export default class OneItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderItem: {
                ids: [],
                CustomerName: "",
                OrderStatus: "",
                ShippedBy: "",
                Quantity: []
            },
            Quantity: 0,
        };
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }
    handleQuantityChange = e => {
        let value = e.target.value;
        this.setState({ Quantity: value })
    }
    addToCartHandle = (id, ItemName) => {
        const { Quantity, ids } = this.props.orderItem
        if (this.state.Quantity !== 0) {
            if (this.props.Quantity >= this.state.Quantity) {
                if (!ids.includes(id)) {
                    Quantity.push(this.state.Quantity)
                    ids.push(id)
                    Swal.fire({
                        icon: 'success',
                        title: `${ItemName} Have been added successfully`,
                        showConfirmButton: false, timer: 1500
                    });
                    this.setState({ Quantity: 0 })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: `${ItemName} Alary exist`,
                        showConfirmButton: false, timer: 1500
                    });
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `Order Quantity is more than you have from ${ItemName} in your storage`,
                    showConfirmButton: false, timer: 3500
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: `You need to add At least One Item from ${ItemName}`,
                showConfirmButton: false, timer: 3500
            });
        }

    }
    render() {
        const { ItemName, ItemSize, Quantity, id } = this.props
        return (
            <>
                <StyledTable.TableTd>{id.slice(-6, -1).toUpperCase()}</StyledTable.TableTd>
                <StyledTable.TableTd>{ItemName}</StyledTable.TableTd>
                <StyledTable.TableTd>{ItemSize}</StyledTable.TableTd>
                <StyledTable.TableTd>{Quantity}</StyledTable.TableTd>
                <StyledTable.TableTd>
                    <StyledTable.ShippingQuantity
                        type='number'
                        max={Quantity}
                        onChange={e => this.handleQuantityChange(e)}
                    />
                </StyledTable.TableTd>
                <StyledTable.TableTd>
                <MdAddShoppingCart size={25} color={"#5eba7e"} className={"onHover"} onClick={() => this.addToCartHandle(id, ItemName)} />
                </StyledTable.TableTd>
            </>
        )

    }
}
