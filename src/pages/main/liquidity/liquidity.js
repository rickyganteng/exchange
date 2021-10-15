import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Alert } from "react-bootstrap";
import styles from "./liquidity.module.css";
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import NavbarComponent from "../../../components/Navbar/Navbar";
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
  handeNav = (event) => {
    this.props.history.push(`/`);

  };
  handeNav1 = (event) => {
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
        {/* <NavbarComponent isLanding={this.state.isLanding} /> */}
        <Container className={styles.main} fluid>

          <div className={`${styles.bgDiv} p-4`}>
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
              <h1 className={styles.login}>Liquidity</h1>
              <p className={styles.subLogin}>Add liquidity to receive LP tokens</p>
              <Button
                variant="primary"
                type="submit"
                className={styles.btnSubmit}
                onClick={() => {
                  this.handleAddLiq();
                }}
              >
                Add Liquidity
              </Button>

              <hr />
              <Row>
                <Col>
                  <p>Your Liquidity</p>
                </Col>
                <Col>
                  <p>icon</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Don't see a pool you joined? <span
                    className={styles.resetBtn}
                    style={{ color: "#5F2EEA" }}
                    onClick={() => this.handleRegister()}
                  >
                    Import now.
                  </span></p>

                  <p>
                    Or, if you staked your LP tokens in a farm, unstake them to see them here.</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default Landing;
