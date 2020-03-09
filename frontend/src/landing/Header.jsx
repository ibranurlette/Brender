import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar } from 'react-bootstrap';
import Icon from './cat.png';

// component Header untuk menampikan halaman header di langi page
class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Navbar.Brand href="#home" className="header mt-3 ml-3">
            <img className="gambar" alt="ibra nurlette" src={Icon} />
            <p className="title_gambar">CatMatch</p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    )
  }
}
export default Header;