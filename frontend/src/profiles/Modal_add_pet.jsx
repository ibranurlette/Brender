import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Modal, Form } from 'react-bootstrap';
import { FiCamera } from "react-icons/fi";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

// component modal_add_pet, akan tampil saat tombol add pet diklik
class Modal_add_pet extends Component {
	state = { show: false };

	showModal = () => {
		this.setState({ show: true });
	};

	hideModal = () => {
		let ibra = this.setState({ show: false });
		setInterval(ibra, 500)
	};

	render() {
		return (
			<main>
				<Modal show={this.state.show} handleClose={this.hideModal} className="modal_box_add_pet">
					<form class="add_pet_form">
			        <h1>Add pet</h1>

			        <div class="add_pet">
			          <input type="text" placeholder="pet name"/>
			        </div>
			         <div class="custom-file">
					    <input type="file" class="custom-file-input" id="inputGroupFile02" />
					    <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
					  </div>
					  <div class="txtb">
				          <select>
				            <option>your pet age</option>
				            <option>child</option>
				            <option>adult</option>
				            <option>dll</option>
				          </select>
				        </div>
				        <div class="txtb">
				          <select>
				            <option>select your pet</option>
				            <option>cat</option>
				            <option>lion</option>
				            <option>tanuki</option>
				          </select>
				        </div>
				        <div class="txtb">
				          <textarea placeholder="description" ></textarea>
				        </div>
				        <Link to="./edit_profile">
				        	<input type="submit" class="logbtn_add_pet" value="save" />
				        </Link>
			        <input type="submit" class="logbtn_close_add_pet" value="Close" onClick={this.hideModalLogin}/>
			
			      </form>
      
				</Modal>
				<Button variant="outline-primary" onClick={this.showModal} className=" tombol_add_pet">add pet</Button>
			</main>
		)
	}
}
export default Modal_add_pet;