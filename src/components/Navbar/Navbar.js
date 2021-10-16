import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Nav, Navbar, Button, Image, Modal, Form } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import { Search } from "react-bootstrap-icons";
import styles from "./Navbar.module.css";
// import ReactPaginate from "react-paginate";
import dummy from "../../assets/img/icon-defauult.png";
import { connect } from "react-redux";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      page: 1,
      limit: 5,
      isShow: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.getData(this.state.search);
    }
  }

  getData = (search) => {
    const { page, limit } = this.state;
    this.props.getAllMovie(page, limit, "movie_name ASC", "%" + search + "%");
  };

  changeText = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClose = () => {
    this.setState({
      isShow: false,
    });
  };

  handleShow = () => {
    this.setState({
      isShow: true,
    });
  };

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData(this.state.search);
    });
  };

  handleResSearch = (id) => {
    this.props.history.push(`/main/movie-detail/${id}`);
  };

  handleLogin = () => {
    this.props.history.push("/login");
  };

  handleLogout = () => {
    this.props.logout();
    this.props.history.push("/login");
  };

  render() {
    const { isShow } = this.state;
    // const { dataMovie } = this.props.movie;
    // const { data } = this.props.auth;
    const { isAdminPage } = this.props;

    return (
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          sticky="top"
        >
          <Navbar.Brand className={styles.sizeLogo}>
            <Image src={logo} fluid />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between"
          >

            <Nav>
              <a href="https://comodo.finance/"> <span className={`${styles.link} ml-sm-5 mr-2`}>Home</span></a>
              <a href="#trade"> <span className={`${styles.link} ml-sm-5 mr-2`}>Trade</span></a>
              <a href="#farms"> <span className={`${styles.link} ml-sm-5 mr-2`}>Farms</span></a>
              <a href="https://t.me/joinchat/HVKH6lhY6ChlMzE1"> <span className={`${styles.link} ml-sm-5 mr-2`}>Comunity</span></a>
              <a href="https://bscscan.com/token/0x8ddd62949700937458a5c6535d1ee5dbebe62b77"> <span className={`${styles.link} ml-sm-5 mr-2`}>Comodo Contract</span></a>
              <a href="#price"> <span className={`${styles.link} ml-sm-5 mr-2`}>Price Charts</span></a>
            </Nav>


            <Nav>


              <Modal animation={false} show={isShow} onHide={this.handleClose}>

                <Modal.Body>
                  <Form>
                    <Form.Group>
                      <Form.Control
                        name="search"
                        type="text"
                        placeholder="Type your movie name here"
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Form>

                </Modal.Body>
                <div className="d-flex justify-content-center">

                </div>
              </Modal>
              <div className="mr-sm-4 mt-2">

                <div className="d-flex flex-md-row flex-column">

                  <Button
                    className={(styles.link, styles.btNav)}
                  // onClick={() => this.handleLogout()}
                  >
                    Connect
                  </Button>
                </div>
              </div>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  movie: state.movie,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));