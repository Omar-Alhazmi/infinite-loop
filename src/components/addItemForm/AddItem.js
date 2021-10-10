import React, { Component } from 'react'
import './AddItem.css'
import { CgArrowLeftO } from "react-icons/cg";
import add2 from '../../image/add2.svg'
export default class AddItem extends Component {
	render() {
		const { ItemSize,ItemName } = this.props.data
		return (
			<>
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
							<img src={add2} alt="lo"/>
						</div>
						<form class="addItemCard-form">
							<div class="input">
								<input
									class="input-field"
									type="text"
									required
									name="ItemName"
									onChange={this.props.onNameChange}
									value={ItemName} />
								<label class="input-label">Product Name</label>
							</div>
							<div class="input">
								<input
									class="input-field"
									type="number"
									required
									name="ItemSize"
									onChange={this.props.onNameChange}
									value={ItemSize}
									 />
								<label class="input-label">Size</label>
							</div>
							<div class="action">
								<button className="action-button" onClick={this.props.onFormSubmit} >Add Item</button>
							</div>
						</form>
					</div>
				</div>
			</>
		)
	}
}
