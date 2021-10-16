import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Alert } from "react-bootstrap";
import styles from "./addLiq.module.css";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import NavbarComponent from "../../../components/Navbar/Navbar";
import iconSet from "../../../assets/decorations/nut.svg"
import iconQuest from "../../../assets/decorations/question-circle.svg"
import iconArrowPlus from "../../../assets/decorations/plus-circle.svg"
import IconLeft from "../../../assets/decorations/arrow-left.svg"
import NavbarComponent from "../../../components/Navbar/Navbar";

//
import FooterComponent from "../../../components/Footer/Footer";

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
      navSet: true,
      navOrder: false,
      form: {
        user: "",
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
  goback = () => {
    this.props.history.goBack();
  }
  changeTextForm = (event) => {
    console.log(event.target.value);
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const { user } = this.state.form
    const { navSet, navOrder } = this.state
    return (
      <>
        <NavbarComponent />
        <Container className={styles.main} fluid>

          <div className={`${styles.bgDiv} p-3`}>
            {/* <div className="d-flex flex-row"> */}
            <Button
              className={`${styles.info} ${navSet ? styles.selectedNavMenu : styles.unselectedNavMenu
                }`}
              variant="light"
              name="navSet navOrder"
              onClick={(event) => this.handeNav(event)}
            >
              Swap
            </Button>
            <Button
              className={`${styles.info} ${navOrder
                ? styles.selectedNavMenu
                : styles.unselectedNavMenu
                } ml-5`}
              variant="light"
              name="navOrder navSet"
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
              <h1 className={styles.login}>
                <Row>
                  <Col xs={2}>
                    <span className={styles.iconQuest} onClick={() => this.goback()}>
                      <img src={IconLeft} alt="map-pin" />
                    </span>
                  </Col>
                  <Col>
                    <div className={styles.textCenter}>
                      <p >Add Liquidity</p>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <span className={styles.iconQuest}>
                      <img src={iconQuest} alt="map-pin" />
                    </span>
                  </Col>
                </Row>
              </h1>
              <p className={styles.subLogin}>Trade tokens in an instant</p>
              <hr />
              <Form>
                <Card className={styles.cardForm}>
                  <Row>
                    <Col >
                      <Form.Group className="mb-3">
                        <Form.Label className={styles.everyLabel}>From</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="0.0"
                          name="userEmail"
                          value={user}
                          onChange={(event) => this.changeText(event)}
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
                        Unlock Wallet
                      </Button>
                    </Col>
                  </Row>
                </Card>
                <br />
                <div className={styles.iconArrowPlus}>
                  <span >
                    <img src={iconArrowPlus} alt="map-pin" />
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
                          value={user}
                          name="userPassword"
                          required
                          onChange={(event) => this.changeText(event)}
                        />


                      </Form.Group>
                    </Col>
                    <Col>
                      <Button
                        variant="primary"
                        type="submit"
                        className={styles.btnSubmit}
                      >
                        Unlock Wallet
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
