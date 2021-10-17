import React, { Component } from "react";
import { Button, Card, Col, Row, Container, Form, Modal } from "react-bootstrap";
import styles from "./liquidity.module.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../../../components/Footer/Footer"
import NavbarComponent from "../../../components/Navbar/Navbar";
import iconQuest from "../../../assets/decorations/question-circle.svg"
import iconSet from "../../../assets/decorations/nut.svg"
import iconList from "../../../assets/decorations/card-list.svg"


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanding: true,
      navSet: true,
      navOrder: false,
      user: false,
      form: {
        user: "",
        from: "",
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
  setSlip = () => {
    this.setState({
      show: true,
    });
  }
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  render() {

    const { navSet, navOrder, show, from } = this.state
    return (
      <>
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
              <h1 className={styles.login}>Liquidity <span
                className={styles.iconSet}
                onClick={() => this.setSlip()}
              >
                <img src={iconSet} alt="map-pin" />
              </span>
                <span className={styles.iconQuest}>
                  <img src={iconList} alt="map-pin" />
                </span></h1>
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
                  <span className={styles.iconQuest}>
                    <img src={iconQuest} alt="map-pin" title="When you add liquidity, you are given pool tokens that represent your share.  /n If you don’t see a pool you joined in this list, try importing a pool below." />
                  </span>
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
        <Footer />
      </>
    );
  }
}

export default Landing;
