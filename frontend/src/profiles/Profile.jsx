import React, { Component, Fragment } from 'react';
import picture from './1.jpg';
import icon from './5.jpg';
import { Button, Navbar, Row, Container, Card, Col, Carousel, Form } from 'react-bootstrap';
import { GoPerson, GoLocation } from "react-icons/go";
import { FaTransgender, FaPhone } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Modal_add_pet_premium from './Modal_add_pet_premium';
import Modal_add_pet from './Modal_add_pet';
import Inputrange from './Inputrange';
import { connect } from 'react-redux';
import { getUsers } from '../client/_actions/users';
// component Profile untuk nampilkan halaman profile saaat foto diklik
class Profile extends Component {
	 componentDidMount(){
    this.props.getUsers();
  }
	render() {
		 const {data} = this.props.users;
		return (
			<Fragment>
				<div className="body-col-semua">
					<Row>
						<Col sm={4} className="col_profile">
							<Navbar className="nav-kiri">
								<Navbar.Brand href="#home" className="header mt-3 ml-3">
									<Link to="/back_profile">
										<span id="back"><IoIosArrowBack/></span>
									</Link>
									<img className="icon_image" src={icon} />
								</Navbar.Brand>
								<Navbar.Toggle />
								<Navbar.Collapse className="justify-content-start">
									<Navbar.Text>
										<h1 id="title_profile">Profile</h1>
									</Navbar.Text>
								</Navbar.Collapse>
							</Navbar>
							<Row>
								<Col>
									<p id="match">Account setting</p>
								</Col>
							</Row>
							<Row className="row_kiri">
								<Col>
									<p id="acount">Email : <span id="acount2">{data.email}</span></p>
									<p id="acount">Phone :<span id="acount2">{data.phone}</span></p>

									<p id="match">Discovery setting</p>
									<div id="form_kiri">
										<Form>
										<span id="distance">maximum distance 10 km</span>
											<span ><Inputrange/></span>

											<Form.Group controlId="exampleForm.ControlSelect1">
												<Form.Label id="seting">Age</Form.Label>
												<Form.Control as="select">
													<option>adult</option>
													<option>child</option>
													<option>teneger</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId="exampleForm.ControlSelect1">
												<Form.Label id="seting">Species</Form.Label>
												<Form.Control as="select">
													<option>cat</option>
													<option>rabit</option>
													<option>dog</option>
													<option>dragon</option>
													<option>lion</option>
												</Form.Control>
											</Form.Group>
											<Link to="/Logout">
											<Button className="logout">Logout</Button>
											</Link>
										</Form>
									</div>
								</Col>
							</Row>
						</Col>


						<Col sm={6}>
							<Row className="col_profile2">
								<div id="div_profile">
										<Card className=" mt-5  card_profile" >
									<Card.Img variant="top" src={picture} className="card_img" />
										<Card.Body>
											<Card.Title>Garry <span id="singa">Singa</span></Card.Title>
											<Card.Text>
												<GoPerson id="person"/>Breder : Ibra nurlette<br/>
												<GoLocation id="miles"/>jarak : 10 Km dari sini<br/>
												<FaTransgender id="gender" />gender : Male<br/>
												<FaPhone id="phone_number"/>Phone number : 088347349340<br/>
												<h3 id="about">About pet</h3>
												<p>I am the king of the jungle, I am in charge of the forest, the enemy, my great is the heyna</p>
											</Card.Text>
											<Link to="./edit_profile">
												<Button id="btn_edit">edit</Button>
											</Link>
										</Card.Body>
									</Card>
								</div>
							</Row>
						</Col>

						<Col>
						<div>
							<Modal_add_pet_premium />
							<Modal_add_pet />
						</div>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}
const mapStateToProps = state => {
  return {
    users: state.users,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
