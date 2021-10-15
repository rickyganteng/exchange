import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Alert } from "react-bootstrap";
import styles from "./CardSwap.module.css";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import NavbarComponent from "../../../components/Navbar/Navbar";
// import FooterComponent from "../../../components/Footer/Footer";

// import Recruiter1 from "../../../assets/images/394260100b438df48a885f4de8255d6c.jpg";
// import Recruiter2 from "../../../assets/images/52b72a55a079dca3c59ba0db0eb236aa.jpg";
// import Recruiter3 from "../../../assets/images/e0330952e672d8d40924c01d226e2f96.jpg";

// import DotDecoration from "../../../assets/decorations/dots.svg";
// import HeroImage from "../../../assets/images/hero-img.jpg";
// import LandingImage1 from "../../../assets/images/landing-img.jpg";
// import LandingImage2 from "../../../assets/images/landing-img2.jpg";
// import TickPurple from "../../../assets/icons/tick-purple.svg";
// import TickOrange from "../../../assets/icons/tick-orange.svg";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanding: true,
      form: {
        user: "",
      }
    };
  }
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
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    const { user } = this.state.form
    return (
      <>
        {/* <NavbarComponent isLanding={this.state.isLanding} /> */}
        <Container className={styles.main} fluid>
          <Card          >
            <Card.Body>
              <h1 className={styles.login}>Exchange</h1>
              <p className={styles.subLogin}>Trade tokens in an instant</p>
              <hr />
              <Form>
                <Row>
                  <Col>
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
