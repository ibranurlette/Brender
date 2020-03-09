import React, { Component, Fragment } from 'react';
import picture2 from './3.jpg';
import icon from './5.jpg';
import { Button, Navbar, Row, Col, Container, Card, Form } from 'react-bootstrap';
import { GoPerson, GoLocation } from "react-icons/go";
import { FaTransgender, FaPhone } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Inputrange from './Inputrange';

// componenent Profile untuk menampilkan halaman Profile kita
class Profile extends Component {
	render() {
		return (
			<Fragment>
				<div className="body-col-semua">
					<Row>
						<Col sm={4} className="col_profile">
							<Navbar className="nav-kiri">
								<Navbar.Brand href="#home" className="header mt-3 ml-3">
									<Link to="/back_profile">
										<span id="back"><IoIosArrowBack /></span>
									</Link>
									<img className="icon_image" src={icon} />
								</Navbar.Brand>
								<Navbar.Toggle />
								<Navbar.Collapse className="justify-content-start">
									<Navbar.Text>
										<h1 id="title_profile">profile</h1>
									</Navbar.Text>
								</Navbar.Collapse>
							</Navbar>
							<Row>
								<Col>
									<p id="match">acount setting</p>
								</Col>
							</Row>
							<Row className="row-kiri">
								<Col>
									<p id="acount">email <span id="acount2">ibraputra843@gmail.com</span></p>
									<p id="acount">phone<span id="acount2">082398138314</span></p>

									<p id="match">doscovery setting</p>
									<div id="form_kiri">
										<Form>
										<div>
										<span id="distance">maximum distance 10 km</span>
											<Inputrange/>
											</div>
											<Form.Group controlId="exampleForm.ControlSelect1">
												<Form.Label id="seting">age</Form.Label>
												<Form.Control as="select">
													<option>adult</option>
													<option>child</option>
													<option>teneger</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId="exampleForm.ControlSelect1">
												<Form.Label>species</Form.Label>
												<Form.Control as="select">
													<option>cat</option>
													<option>rabit</option>
													<option>dog</option>
													<option>capung</option>
													<option>dombo</option>
												</Form.Control>
											</Form.Group>
											<Link to="logout">
											<Button variant="primary" className="logout">logout</Button>
											</Link>
										</Form>
									</div>
								</Col>
							</Row>
						</Col>

						<Col sm={7} className="scrol">
							<Row className="col_edit_profile">
								<div id="div_profile">
									<Card className=" mt-5  card_edit_profile" >
										<div>
											<div id="img_add_pet">
												<img src={picture2} className="col_edit_img"></img>
												<img className="col_edit_img"></img>
												<img className="col_edit_img"></img>
												<img className="col_edit_img"></img>
												<img className="col_edit_img"></img>
												<img className="col_edit_img"></img>
												<img className="col_edit_img"></img>
												<img className="col_edit_img"></img>
												<img className="col_edit_img"></img>
											</div>
											<Form id="form_edit_profile">
											  <div class="txtb">
									          <input type="text" placeholder="name pet"/>
									        </div>

									        <div class="txtb">
									          <input type="text" placeholder="breder"/>
									        </div>
											<div class="txtb">
									          <select>
									            <option>your pet gender</option> 
									            <option>male</option>
									            <option>female</option>
									          </select>
									        </div>
											 <div class="txtb">
									          <select>
									            <option>your pet age</option>
									            <option>kucing</option>
									            <option>singa</option>
									            <option>rubah</option>
									          </select>
									        </div>
											<div class="txtb">
									          <textarea placeholder="description"></textarea>
									        </div>
											
										</Form>

											<div>
											<Link to="/profile">
												<input type="submit" class="btn_Update" value="update" />
											</Link>
											</div>
										</div>
									</Card>
								</div>
							</Row>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}
export default Profile;