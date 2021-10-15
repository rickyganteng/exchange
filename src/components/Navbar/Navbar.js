import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import styles from "./Navbar.module.css";
import NoProfilePicture from "../../assets/images/defaultprofilepict.png";
import Logo from "../../assets/images/Jobshall.png";
import Bell from "../../assets/icons/bell.svg";
import Mail from "../../assets/icons/mail.svg";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: localStorage.getItem("token"),
    };
  }

  componentDidMount() {

  }

  renderNav = () => {
    <nav className="Nav">
      <div className="Nav__container">
        <Link to="/" className="Nav__brand">
          <img src={Logo} className="Nav__logo" />
        </Link>

        <div className="Nav__right">
          <ul className="Nav__item-wrapper">
            <li className="Nav__item">
              <Link className="Nav__link" to="/path1">Link 1</Link>
            </li>
            ijijijij
            <li className="Nav__item">
              <Link className="Nav__link" to="/path2">Link 2</Link>
            </li>
            <li className="Nav__item">
              <Link className="Nav__link" to="/path3">Link 3</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  };

  handleClickProfile = () => {

  };

  handleEditProfile = (e) => {

  };

  handleClickRegister = (e) => {

  };

  handleClickLogin = () => {
    this.props.history.push("/");
  };

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    return (
      <Navbar
        bg="light"
        expand="lg"
        className={`p-0 d-flex justify-content-between ${styles.navbar}`}
      >
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={Logo} alt="logo" className={`${styles.logo}`} />
          </Link>
        </Navbar.Brand>
        {this.renderNav()}
      </Navbar>
    );
  }
}

export default NavbarComponent;
