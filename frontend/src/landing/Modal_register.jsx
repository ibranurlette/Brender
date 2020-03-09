import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, Modal } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getSpecies } from '../client/_actions/species';
import { register } from '../client/_actions/authRegister';


// component modal_register untuk manampilkan modal saat tombol register di klik
class Modal_register extends Component {
  componentDidMount(){
    this.props.getSpecies();
  }

  state = { show: false };

  showModalRegister = () => {
    this.setState({ show: true });
  };

  hideModalRegister = () => {
    let ibra = this.setState({ show: false });
    setInterval(ibra, 100)
  };

  registner = e => {
    e.preventDefault();
    const data = {
      breder: this.state.breder,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      addres: this.state.addres,
      pet: {
        name: this.state.nama,
        gender: this.state.gender,
        spesies: {
          id: this.state.spesies,
          name: this.state.spesies
        },
        age:  this.state.age
      }
    };
    this.props.register(data)
  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    const {data} = this.props.spesies;
     const {authenticated, loading, error} = this.props.auth;
    return (
      <main>
          <Modal show={this.state.show} handleClose={this.hideModalRegister} className="modal_box_regist">
        <form class="login-form_register" autocomplete="of">
        <h1 id="judul_register">Register</h1>
        <span className="error">{error}</span>

        <div class="txtb">
          <input type="text" placeholder="breder" name="breder"  onChange={this.onChange} autocomplete="of" required/>
        </div>

        <div class="txtb">
          <input type="email"  placeholder="email" name="email"  onChange={this.onChange} autocomplete="of" required/>
        </div>
        <div class="txtb">
          <input type="password"  placeholder="password" name="password" onChange={this.onChange} required/>
        </div>
        <div class="txtb">
          <input type="text" placeholder="phone" name="phone" onChange={this.onChange} autocomplete="of" required/>
        </div>
        <div class="txtb">
          <textarea placeholder="addres" name="addres" onChange={this.onChange} required></textarea>
        </div>
        <div class="txtb">
          <input type="text"  placeholder="name pet" name="nama" onChange={this.onChange}/>
        </div>
        <div class="txtb">
          <select name="gender" onChange={this.onChange}>
            <option >your pet gender</option>
            <option >male</option>
            <option >female</option>
          </select>
        </div>
        <div class="txtb">
          <select name="spesies" onChange={this.onChange}>
            <option>select your pet spesies</option>
            {data.map((item, index) => (
            <option key={index} value={item.id}>{item.name}</option>
              ))}
          </select>
        </div>
        <div class="txtb">
          <select name="age" onChange={this.onChange}>
            <option>your pet age</option>
            <option>child</option>
            <option>teneger</option>
            <option>adult</option>
          </select>
        </div>
        <Link to="/index">
        <input type="submit" class="logbtn_login" value="Register" onClick={this.registner}/>
        </Link>
        <input type="submit" class="logbtn_close" value="Close" onClick={this.hideModalRegister}/>
      </form>

      </Modal>


          <div className="right">
        { /* <p id="para">have account or not ?</p> */ }
              <Button variant="light" onClick={this.showModalRegister} className="mt-3 mr-3 tombol_register ">Sign up</Button>
          </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    spesies: state.spesies,
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies()),
    register: (data) => dispatch(register(data))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal_register);