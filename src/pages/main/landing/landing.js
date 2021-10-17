import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Modal } from "react-bootstrap";
import styles from "./landing.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer"

import iconSet from "../../../assets/decorations/nut.svg"
import iconList from "../../../assets/decorations/card-list.svg"
import iconQuest from "../../../assets/decorations/question-circle.svg"
import iconArrowBot from "../../../assets/decorations/arrow-down-circle.svg"






class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coin: [
        "BTCB",
        "BUSD",
        "Cake",
        "CMD",
        "DOGE",
        "ETH",
        "TRX",
        "USDT"
      ],
      isLanding: true,
      navSet: false,
      navOrder: false,
      popSet: true,
      popOrder: false,
      show: false,
      showModal1: false,
      form: {
        from: "",
        to: "",
        angka: 0,
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
  handleClose = () => {
    this.setState({
      show: false,
      showModal1: false,
    });
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
  setSlip = () => {
    this.setState({
      show: true,
    });
  }
  setCoin = () => {
    this.setState({
      showModal1: true,
    });
  }
  render() {
    const { from, to, angka } = this.state.form
    const { navSet, navOrder, show, showModal1 } = this.state
    return (
      <>
        <Modal className={styles.modalshow} show={showModal1} onHide={this.handleClose}>
          <Container >
            <Modal.Title className={styles.title}>Select a token  <img src={iconQuest} alt="map-pin" title="hehe" />
            </Modal.Title>
            <br />
            <Col >
              <Form className={styles.searchInput}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Search Tokens"
                    name="search"
                    onChange={(event) => this.changeTextForm(event)}
                  />
                </Form.Group>
              </Form>
            </Col>

            <Modal.Title className={styles.title}>Token Name
              <div className={styles.iconArrow}>
                <span >
                  <img src={iconArrowBot} alt="map-pin" />
                </span>
              </div>
            </Modal.Title>
            <hr />
            <div >
              {this.state.coin.map((item, index) => {
                console.log(item)
                return (
                  <p> {item}</p>
                );

              })}
            </div>
          </Container>
        </Modal>
        <Modal className={styles.modalshow} show={show} onHide={this.handleClose}>
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
                    name="angka"
                    placeholder="SlipPage"
                    value={angka}
                    onChange={(event) => this.changeTextForm(event)}
                  />
                </Col>

              </Form.Row>
              <br />
              <Form.Row>
                <Form.Group as={Col} md="5">
                  <Form.Label>Trancsaction deadline :</Form.Label>
                  <Form.Control
                    type="number"
                    name="angka"
                    placeholder="Minutes"
                    value={angka}
                    onChange={(event) => this.changeTextForm(event)}
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

          </Container>
        </Modal>
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
                  onClick={() => this.setSlip()}
                >
                  <img src={iconSet} alt="map-pin" title="Setting" />
                </span>
                <span className={styles.iconQuest}>
                  <img src={iconList} alt="map-pin" title="Recent Trancsaction" />
                </span>
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
                    <Col className={styles.buttonCoin}>
                      <Button
                        variant="primary"
                        type="submit"
                        className={styles.btnSubmit}
                        onClick={() => this.setCoin()}
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
                    <Col className={styles.buttonCoin}>
                      <Button
                        variant="primary"
                        type="submit"
                        className={styles.btnSubmit}
                        onClick={() => this.setCoin()}
                      >
                        Coin
                      </Button>
                    </Col>
                  </Row>
                </Card>
                <br />
                <Row>
                  <Col>
                    <p>SlipPage tolerance</p>
                  </Col>
                  <Col >
                    <p className={styles.textRight}>5%</p>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  type="submit"
                  className={styles.btnSubmitSlip}
                >
                  Unlock Wallet
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container >
        <Footer />
      </>
    );
  }
}

export default Landing;



