import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Modal } from "react-bootstrap";
import styles from "./addLiq.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import NavbarComponent from "../../../components/Navbar/Navbar";
import iconQuest from "../../../assets/decorations/question-circle.svg"
import iconArrowPlus from "../../../assets/decorations/plus-circle.svg"
import IconLeft from "../../../assets/decorations/arrow-left.svg"
import NavbarComponent from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer"
import iconArrowBot from "../../../assets/decorations/arrow-down-circle.svg"

//
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
      navSet: true,
      showModal1: false,
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
  setCoin = () => {
    this.setState({
      showModal1: true,
    });
  };
  handleClose = () => {
    this.setState({
      showModal1: false,
    });
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

    const { user } = this.state.form
    const { navSet, navOrder, showModal1 } = this.state
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
        <Footer />
      </>
    );
  }
}

export default Landing;
