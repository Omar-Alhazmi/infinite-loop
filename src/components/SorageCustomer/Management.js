import React, { Component } from 'react'
import * as StyledTable from '../../FrontDesign/styledTabled'
import { getStorageById, AddItemToStorage } from '../api_config/api';
import { getInfo } from '../helperMethods';
import { CgAdd } from "react-icons/cg";
import Swal from "sweetalert2";
import AddItem from '../addItemForm/AddItem'
export default class Management extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Storage: null,
            toggle: false,
            Item: [],
            ItemData: {
                ItemName: "",
                ItemSize: 0
            }
        };
    }

    componentDidMount() {
        //API call 
        getStorageById(getInfo().data.StorageId)
            .then((response) => {
                this.setState({
                    Storage: response.data,
                    Item: response.data.Items
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
    toggleHandler = (e) => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        let storageData = <div class="spinner">Loading...</div>
        if (this.state.Item.length > 0) {
            storageData = this.state.Item.map((item, index) => {
                return (
                    <StyledTable.TableBodyContainer id={item._id} key={index}>
                        <StyledTable.TableTr>
                            <StyledTable.TableTd>{item.ItemName}</StyledTable.TableTd>
                            <StyledTable.TableTd>{item.ItemSize}</StyledTable.TableTd>
                        </StyledTable.TableTr>
                    </StyledTable.TableBodyContainer>
                )
            })
        }
        const {toggle,ItemData}=this.state
        return (
            <StyledTable.TableWrapper>
                {toggle === true ?
                    <AddItem  toggle={toggle} data={ItemData} onNameChange={e => this.handleChange(e)} onFormSubmit={e => this.handelSubmit(e)} toggleHandler={this.toggleHandler} />
                    :
                    <>
                    <div><CgAdd onClick={e => this.toggleHandler(e)}size={50} color={"#5eba7e"} /></div>
                     <StyledTable.TableContainer>
                        <StyledTable.TableHedContainer>
                            <tr>
                                <StyledTable.TableTh className="tableHeader">Item Name</StyledTable.TableTh>
                                <StyledTable.TableTh className="tableHeader">Item Size</StyledTable.TableTh>
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