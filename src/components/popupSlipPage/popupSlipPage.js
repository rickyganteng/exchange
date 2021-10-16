import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Alert, Modal } from "react-bootstrap";
import styles from "./popupSlipPage.module.css";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavbarComponent from "../../components/Navbar/Navbar";

import iconSet from "../../assets/decorations/nut.svg"
import iconQuest from "../../assets/decorations/card-list.svg"
import iconArrowBot from "../../assets/decorations/arrow-down-circle.svg"
//
import Recruiter1 from "../../assets/images/394260100b438df48a885f4de8255d6c.jpg";
import Recruiter2 from "../../assets/images/52b72a55a079dca3c59ba0db0eb236aa.jpg";
import Recruiter3 from "../../assets/images/e0330952e672d8d40924c01d226e2f96.jpg";

import DotDecoration from "../../assets/decorations/dots.svg";
import HeroImage from "../../assets/images/hero-img.jpg";
import LandingImage1 from "../../assets/images/landing-img.jpg";
import LandingImage2 from "../../assets/images/landing-img2.jpg";
import TickPurple from "../../assets/icons/tick-purple.svg";
import TickOrange from "../../assets/icons/tick-orange.svg";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanding: true,
      navSet: false,
      navOrder: false,
      popSet: true,
      popOrder: false,
      form: {
        from: "",
        to: "",
      },
    };
  }
  handeNav = () => {
    this.props.history.push(`/`);
  };
  handeNav1 = () => {

    this.props.history.push(`/liq`);

  };
  changeText = (event) => {
    this.setState({ [event.target.name]: "%" + event.target.value + "%" });
  };

  changeTextForm = (event) => {
    console.log(event.target.value);
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };
  handleAddLiq = () => {
    this.props.history.push(`/addliq`);
  }
  setSlip = (event) => {
    this.setState({
      navSet: true,
    });
    console.log("tol");
  }
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const { from, to } = this.state.form
    const { navSet, navOrder, popSet, popOrder } = this.state
    return (
      <>
        <Modal show="true" onHide="true">
          <Container >
            <Modal.Title className={styles.title}>Setting</Modal.Title>
            <hr />
            <Form
              onSubmit={this.handleUpdateProfile}
              className={`${styles.form} mb-5`}
            >
              <p>Slippage tolerance :</p>

              <Form.Row xs={10}>
                <Col xs={2}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`${styles.btUpdate} mt-3`}
                  >
                    1%
                  </Button>
                </Col>
                <Col xs={2}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`${styles.btUpdate} mt-3`}
                  >
                    5%
                  </Button>
                </Col>
                <Col xs={2}>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`${styles.btUpdate} mt-3`}
                  >
                    13%
                  </Button>
                </Col>

                <Col className={styles.formbottom}>
                  <Form.Control
                    type="number"
                    name="firstName"
                    placeholder="number"
                    value={from}
                    onChange={(event) => this.changeText(event)}
                  />
                </Col>

              </Form.Row>
              <br />
              <Form.Row>
                <Form.Group as={Col} md="5">
                  <Form.Label>Trancsaction deadline :</Form.Label>
                  <Form.Control
                    type="number"
                    name="lastName"
                    placeholder="Minutes"
                    value={from}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>



              </Form.Row>

              <Button
                variant="primary"
                type="submit"
                className={`${styles.btUpdate} mt-3`}
              >
                Update Changes
              </Button>

            </Form>
            {/* {this.state.data.map((item, index) => {
              console.log(item);
              return (
                <Card key={index} className={styles.cardFriend}>
                  <Row>
                    <Col xs={2}>
                      <Card.Img
                        type="left"
                        src={`https://chatmui.herokuapp.com/backend3/api/${item.akun_image}`}
                        className={styles.imgFriend}
                      />
                    </Col>
                    <Col xs={7}>
                      <Card.Text className={styles.name}>
                        {item.akun_name}
                      </Card.Text>
                      <Card.Text className={styles.email}>
                        {item.akun_email}
                      </Card.Text>
                      <Card.Text className={styles.bio}>
                        {item.akun_bio}
                      </Card.Text>
                    </Col>
                    <Col xs={3}>
                      <Button
                        className={styles.btn}
                        onClick={() => this.handleDelete(item.contact_id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </Row>
                </Card>
              );
            })} */}
          </Container>
        </Modal>
      </>
    );
  }
}

export default Landing;
