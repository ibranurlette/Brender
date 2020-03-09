import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Modal, Form } from 'react-bootstrap';
import { FiCamera } from "react-icons/fi";

// component Modal_add_pet_premium, akan tampil saat tombol premium pet diklik
class Modal_add_pet_premium extends Component {
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
				<Modal show={this.state.show} handleClose={this.hideModal} className="modal_box_add_pet_premium">
				<form class="add-pet-form">
        <h1>Premium</h1>
        <div>
        	<h6 className="text-center">Upgrade Breednder mu dan nikmati<br/> fitur-fitur <b>PRO</b></h6>
        	<h6 className="text-center mt-3"><b>breder : 084324324329</b></h6>
        </div>
        <div class="add_pet">
          <input type="text" placeholder="no rek kamu" />
        </div>
        <div class="custom-file mb-5">
		    <input type="file" class="custom-file-input" id="inputGroupFile02"/>
		    <label class="custom-file-label" for="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Upload bukti transfer</label>
		  </div>
        <input type="submit" class="logbtn_add_premium" value="Send"/>
        <input type="submit" class="logclose_add_premium" value="Close" onClick={this.hideModalLogin}/>
      </form>
				</Modal>
				<Button variant="outline-danger" onClick={this.showModal} className="tombol_add_pet_premium">premium</Button>
			</main>
		)
	}
}
export default Modal_add_pet_premium;