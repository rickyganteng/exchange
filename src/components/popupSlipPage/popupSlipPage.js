import React, { Component } from "react";
import { Button, Col, Container, Form, Modal } from "react-bootstrap";
import styles from "./popupSlipPage.module.css";


class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLanding: true,
      navSet: false,
      navOrder: false,
      popSet: true,
      popOrder: false,
      show: true,
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
  }
  handleClose = (event) => {
    this.setState({
      navSet: false,
      show: false,
    });
  };
  render() {

    const { from, } = this.state.form
    const { show } = this.state
    return (
      <>
        <Modal show={show} onHide={this.handleClose}>
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
