import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button,Container, Row, Col } from 'react-bootstrap';
import Modal_register from './Modal_register';
import Modal_login from './Modal_login';

// component jumbo untuk manmpikn jumbotron yang kita miliki
class Jumbo extends React.Component {
  render() {
    return (
      <Jumbotron className="text-center bg-transparent jumbo">
        <Row>
          <Col sm={6}><h1 className="judul_jumbo">welcome to catmatch</h1>
          <h1 className="jumbo_title">swipe right make your pet happy</h1>
            <p className="title">
              By clicking enter, you agree to our terms, learn how we process your data in
              our privacy policy and cookie police
            </p>
          </Col>
          <Col sm={3}>
            <Modal_register />
          </Col>
          <Col>
          <Modal_login id="modal-login" />
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}


export default Jumbo;