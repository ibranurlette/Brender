import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, Modal } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Modal_register from './Modal_register';
import {connect} from 'react-redux';
import {checkLogin} from '../client/_actions/auth';
// component modal_login untuk manampilkan modal saat tombol login di klik
class Modal_login extends Component {
  state = { show: false};

  showModalLogin = () => {
    this.setState({ show: true });
  };

  hideModalLogin = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 500)
  };
  loginner = e => {
    e.preventDefault();
    const data = this.state;
    this.props.checkLogin(data)
    const errors ={}
    if(data){
     console.log('selamat datang')
    }else{
      console.log('tunda dulu')
    }

  }
  handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value })
    }

  render() {
    const {authenticated, loading, error} = this.props.auth;
    return (
      <main>
      <Modal show={this.state.show} handleClose={this.hideModalLogin} id="modal_box_login" >
{/* halaman login dengan html dan css*/}
        <form class="login-form">
        <h1>Login</h1>
        <h4 className="error">{error}</h4>

        <div class="txtb">
          <input type="email" placeholder="email" onChange={this.handleChange} name="email"  required
          />
      
        </div>

        <div class="txtb">
          <input type="password" placeholder="password" onChange={this.handleChange} name="password"  required/>

        </div>
        <Link to="/index">
        <input type="submit" class="logbtn_login" value="Login" onClick={this.loginner}/>
        </Link>
        <input type="submit" class="logbtn_close" value="Close" onClick={this.hideModalLogin}/>
        <div class="bottom-text_add_pet">
          Don't have account?
          <a href="#" >Sign up</a>
        </div>
      </form>
        </Modal>
        <Button variant="light" onClick={this.showModalLogin} className="tombol-login" >
        Login</Button>

      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    checkLogin: (data) => dispatch(checkLogin(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal_login);



