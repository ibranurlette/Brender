import React, { Component, Fragment } from 'react';
import icon from './kucing5.jpg';
import { Button, Navbar, Col, Row, Container, Card, Carousel, Form  } from 'react-bootstrap';
import { FaArrowCircleLeft, FaArrowCircleRight, FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import data1 from '../data.json';
import Deck from './Deck';
import { connect } from 'react-redux';
import { getPets } from '../client/_actions/pets';
import { getUsers } from '../client/_actions/users';
import { getSpecies } from '../client/_actions/species';

// component homepage untuk menampilkan halaman index
class HomePage extends Component {
	 componentDidMount(){
    this.props.getPets();
    this.props.getUsers();
    this.props.getSpecies();
  }

	render() {
		 const data = this.props.pets.data;
		 const data2 = this.props.users.data;
		 const data3 = this.props.spesies.data;
		 if(this.props.data){


		return (
			<Fragment>
				<div className="body_homepage">
					<Row>
						<Col sm={4} className="col_kiri">
							<Navbar className="nav-kiri">
								<Navbar.Brand href="#home" className="header mt-3 ml-3">
									<Link to="/profile">
									<img className="icon_image" src={icon} />
									</Link>
								</Navbar.Brand>
								<Navbar.Toggle />
								<Navbar.Collapse className="justify-content-start">
									<Navbar.Text>
									  	{/*<h3 id="nama">breder<IoIosArrowDown id="icon_down"/></h3>*/}
									      <Form.Control as="select" className="select">
									        <option>Choose...</option>
									        {/*{data.map((item, index) => (
								            <option key={index} value={item.id}>{item.name}</option>
								              ))}*/}
									      </Form.Control>
									</Navbar.Text>
								</Navbar.Collapse>
							</Navbar>
							<Row>
								<Col>
									<p id="match">match</p>
									<hr id="hr" />
								</Col>
							</Row>
							<Row id="row-kiri">

							 {data1.map((pic, index) => (
								<Col sm={4}><img className="img_corousel" src={require(`../img/${pic.pics[0]}`)} key={index} 
								alt="profilePicture" 
								className="col_img"/></Col>
								 ))}

							</Row>
						</Col>
						<Col sm={8} id="col_kanan">
							<Row>
								<Col>
									<div className="swipe">
										<Deck />
									</div>
								</Col>
							</Row>
							<Row className="row_div">
							</Row>
							<Row>
								<Col>
									<footer className='footer mt-auto py-3 text-white mb-1 text-center footer_home'>
										<Row id="row_footer">
											<Col>
												<div className='container_profile' id="hide">Hide</div>
												<div className='container_profile' > <FaArrowCircleLeft id="no"/>No</div>
												<div className='container_profile'><FaArrowCircleRight id="yes"/>Yes</div>
												<div className='container_profile' ><FaArrowCircleUp id="open"/>Open</div>
												<div className='container_profile' ><FaArrowCircleDown id="close"/>Close</div>
												<div className='container_profile' id="photo">Photo</div>
											</Col>
										</Row>
									</footer>
								</Col>
							</Row>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
}
	}
}

const mapStateToProps = state => {
  return {
     pets: state.pets,
     users: state.users,
     spesies: state.spesies,
     data: {item:[]}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPets: () => dispatch(getPets()),
    getSpecies: () => dispatch(getSpecies()),
    getUsers: () => dispatch(getUsers())
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);