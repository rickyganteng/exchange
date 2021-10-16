import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Alert } from "react-bootstrap";
import styles from "./landing.module.css";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavbarComponent from "../../../components/Navbar/Navbar";

import iconSet from "../../../assets/decorations/nut.svg"
import iconQuest from "../../../assets/decorations/card-list.svg"
import iconArrowBot from "../../../assets/decorations/arrow-down-circle.svg"
import PopUp from "../../../components/popupSlipPage/popupSlipPage"


//
import Recruiter1 from "../../../assets/images/394260100b438df48a885f4de8255d6c.jpg";
import Recruiter2 from "../../../assets/images/52b72a55a079dca3c59ba0db0eb236aa.jpg";
import Recruiter3 from "../../../assets/images/e0330952e672d8d40924c01d226e2f96.jpg";

import DotDecoration from "../../../assets/decorations/dots.svg";
import HeroImage from "../../../assets/images/hero-img.jpg";
import LandingImage1 from "../../../assets/images/landing-img.jpg";
import LandingImage2 from "../../../assets/images/landing-img2.jpg";
import TickPurple from "../../../assets/icons/tick-purple.svg";
import TickOrange from "../../../assets/icons/tick-orange.svg";

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
        <NavbarComponent />
        <Container className={styles.main} fluid>
          <div className={`${styles.bgDiv} p-3`}>
            {/* <div className="d-flex flex-row"> */}
            <Button
              className={`${styles.info} ${navSet ? styles.selectedNavMenu : styles.unselectedNavMenu
                }`}

              onClick={(event) => this.handeNav(event)}
            >
              Swap
            </Button>
            <Button
              className={`${styles.info} ${navOrder
                ? styles.selectedNavMenu
                : styles.unselectedNavMenu
                } ml-5`}

              onClick={(event) => this.handeNav1(event)}
            >
              Liquidity
            </Button>
            {/* </div> */}
          </div>
          <Card
            className={styles.mainCard1}
          >
            <Card.Body>
              <h1 className={styles.login}>Exchange
                <span
                  className={styles.iconSet}
                  onClick={(event) => this.setSlip(event)}
                >
                  <img src={iconSet} alt="map-pin" />
                </span>
                <span className={styles.iconQuest}>
                  <img src={iconQuest} alt="map-pin" />
                </span>
              </h1>
              <p className={styles.subLogin}>Trade tokens in an instant</p>
              <hr />
              {navSet ? (
                <PopUp />
              ) : ("")}


              {/* {navSet ? (
                <div>
                  <p className={`${styles.info}`}>Details Information</p>
                  <hr />
                  <Form
                    onSubmit={this.handleUpdateProfile}
                    className={`${styles.form} mb-5`}
                  >
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="your first name"
                          value={from}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          placeholder="your last name"
                          value={from}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="userEmail"
                          placeholder="your email"
                          value={from}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="userPhoneNumber"
                          placeholder="your phone number"
                          value={from}
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Group>
                      <Form.Label>Profile Picture</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(event) => this.handleImage(event)}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className={`${styles.btUpdate} mt-3`}
                    >
                      Update Changes
                    </Button>

                  </Form>
                  <p className={`${styles.info}`}>Account and Privacy</p>
                  <hr />
                  <Form
                    onSubmit={this.handleUpdatePassword}
                    className={styles.form}
                  >
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="userPassword"
                          placeholder="enter new password"
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmUserPassword"
                          placeholder="confirm your new password"
                          onChange={(event) => this.changeText(event)}
                        />
                      </Form.Group>
                    </Form.Row>

                    <Button
                      variant="primary"
                      type="submit"
                      className={`${styles.btUpdate} mt-3`}
                    >
                      Change Password
                    </Button>
                  </Form>
                </div>
              ) : (
                "")} */}










              <Form>
                <Card className={styles.cardForm}>
                  <Row>
                    <Col >
                      <Form.Group className="mb-3">
                        <Form.Label className={styles.everyLabel}>From</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="0.0"
                          name="from"
                          value={from}
                          onChange={(event) => this.changeTextForm(event)}
                          className={styles.everyControl}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        type="submit"
                        className={styles.btnSubmit}
                      >
                        Coin
                      </Button>
                    </Col>
                  </Row>
                </Card>
                <br />
                <div className={styles.iconArrowBot}>
                  <span >
                    <img src={iconArrowBot} alt="map-pin" />
                  </span>
                </div>
                <br />

                <Card className={styles.cardForm}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label className={styles.everyLabel}>To</Form.Label>
                        <Form.Control
                          // type={password ? "text" : "password"}
                          placeholder="0.0"
                          className={styles.everyControl}
                          value={to}
                          name="to"
                          required
                          onChange={(event) => this.changeTextForm(event)}
                        />


                      </Form.Group>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        type="submit"
                        className={styles.btnSubmit}
                      >
                        Coin
                      </Button>
                    </Col>
                  </Row>
                </Card>
                <Button
                  variant="primary"
                  type="submit"
                  className={styles.btnSubmit}
                >
                  Unlock Wallet
                </Button>
              </Form>

            </Card.Body>


          </Card>
        </Container>
      </>
    );
  }
}

export default Landing;
