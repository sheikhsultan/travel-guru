import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from '../Main/Main';
import { Navbar, Nav, Form,NavLink } from "react-bootstrap";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
      <div className="container" id="nav">
        <Navbar collapseOnSelect expand="lg" bg="transparent">

          <Navbar.Brand  href="/" > <img src="https://i.ibb.co/XFn3gbq/Logo.png" alt="logo" className="bg-img-color"/> </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          {/* <Navbar.Collapse */}
          <Navbar.Collapse id="responsive-navbar-nav">

          <Form  className="d-flex ml-auto p-2" inline>
          <input className="form-control searchInput" type="search" placeholder="Search your Destination..." aria-label="Search"/>
          </Form>
          
          <Nav className="ml-auto  align-items-center">
            <NavLink className='navItem' href="/">News</NavLink>
            <NavLink className='navItem' href="/">Destination</NavLink>
            <NavLink className='navItem' href="/">Blog</NavLink>
            <NavLink className='navItem' href="/">Contact</NavLink>
            {/* <button className="d-flex justify-content-center align-items-center log-btn">login</button> */}
            {
              loggedInUser.displayName ? <button className="btn logOut-btn" onClick={() => setLoggedInUser({})}>{loggedInUser.displayName} <small>[Logout]</small> </button>
                                      : <Link to="/login">
                                          <button className="btn log-btn">Login</button>
                                        </Link>
            }
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
};

export default Header;