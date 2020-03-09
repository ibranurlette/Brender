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


// component modal_register untuk manampilkan modal saat tombol register di klik
class Modal_register extends Component {
   constructor(props){
      super(props);
      this.state = {
        bredner: '',
        email: '',
        password: '',
        hp: '',
        addres: '',
        gender: '',
        spesies: '',
        age: ''

      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e){
      e.preventDefault();
      console.log(this.state)
    }



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



  render() {
    const {data} = this.props.spesies;
    return (
      <main>
          <Modal show={this.state.show} handleClose={this.hideModalRegister} className="modal_box_regist">
        <form class="login-form_register" onSubmit={this.onSubmit}>
        <h1 id="judul_register">Register</h1>

        <div class="txtb">
          <input type="text" placeholder="bredner" name="bredner" value={this.state.bredner} onChange={this.onChange}/>
        </div>

        <div class="txtb">
          <input type="email"  placeholder="email" name="email" value={this.state.email} onChange={this.onChange}/>
        </div>
        <div class="txtb">
          <input type="password"  placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
        </div>
        <div class="txtb">
          <input type="text"  placeholder="hp" name="hp" value={this.state.hp} onChange={this.onChange}/>
        </div>
        <div class="txtb">
          <textarea placeholder="addres" name="addres" value={this.state.addres} onChange={this.onChange}></textarea>
        </div>
        {/*<div class="txtb">
          <input type="text"  placeholder="nama" name="nama"/>
        </div>*/}
        <div class="txtb">
          <select name="gender" value={this.state.gender} onChange={this.onChange}>
            <option>your pet gender</option> 
            <option >male</option>
            <option >female</option>
          </select>
        </div>
        <div class="txtb">
          <select name="spesies" value={this.state.spesies} onChange={this.onChange}>
            <option>select your pet spesies</option>
            {data.map((item, index) => (
            <option key={index}>{item.name}</option>
              ))}
          </select>
        </div>
        <div class="txtb">
          <select name="age" value={this.state.age} onChange={this.onChange}>
            <option>your pet age</option>
            <option>child</option>
            <option>teneger</option>
            <option>adult</option>
          </select>
        </div>
        {/*<Link to="/index">*/}
        <input type="submit" class="logbtn_login" value="Register" />
        {/*</Link>*/}
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
    spesies: state.spesies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal_register);