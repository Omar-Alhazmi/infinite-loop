import React, { Component } from 'react'
import './AddItem.css'
export default class AddItem extends Component {
    render() {
        return (
            <div class="container">

	<div class="card">
		<div class="card-image">	
			<h2 class="card-heading">
				Let's Add Item
				<small>To Your Storage</small>
			</h2>
		</div>
		<form class="card-form">
			<div class="input">
				<input type="text" class="input-field" value="" required/>
				<label class="input-label">Product Name</label>
			</div>
			<div class="input">
				<input type="text" class="input-field" value="" required/>
				<label class="input-label">Height</label>
			</div>
			<div class="input">
				<input type="text" class="input-field" value="" required/>
				<label class="input-label">Width</label>
			</div>
			<div class="input">
				<input type="text" class="input-field" value="" required/>
				<label class="input-label">Length</label>
			</div>
      {/* <div class="input">
				<input type="text" class="input-field" value=""/>
				<label class="input-label">Note</label>
			</div> */}
			<div class="action">
				<button class="action-button">Add Item</button>
			</div>
		</form>
		<div class="card-info">
			<p><a href="#">If you want to modify your item click here</a></p>
		</div>
	</div>
</div>

        )
    }
}
