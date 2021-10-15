import React, { Component } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import styles from "./CardList.module.css";
import logo1 from "../../assets/images/logo1.png"

class Cards extends Component {


  render() {

    return (
      <>
        <Card style={{ width: "280px", height: "380px" }}>
          <div >
            <br />
            <Image
              variant="center"
              src={logo1}
              style={{ width: "70%", height: "100px", display: "block", margin: "auto" }}
            />
          </div>
          <Card.Body className="text-left">
            <Card.Title className={styles.title}><p>Salesman GT (General Trade)</p></Card.Title>
            <Card.Text className={styles.category}><p>PT MTH Global Investama</p></Card.Text>
            <Card.Text className={styles.category}><p>Jakarta Barat</p></Card.Text>
            <br />
            <div className={styles.centerr}>
              <Button
                className={styles.btMoon}
                variant="outline-primary"
              >
                <div className={styles.btCnt}>Details</div>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);