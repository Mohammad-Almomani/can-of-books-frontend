import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

function Header() {
  const {
    isAuthenticated,
  } = useAuth0();

  let log = isAuthenticated?'Log out':'Log in'
        return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <div style={{display: 'flex',fontSize: '20px', justifyContent: 'space-between', margin:'5px', color: 'white'}}>
        <NavItem><Link to="/" className="nav-link" style={{margin: '0px 15px'}} >Home</Link></NavItem>
        <NavItem><Link to="/Profile" className="nav-link" style={{margin: '0px 15px'}}>Profile</Link></NavItem>
        <NavItem><Link to="/Login" className="nav-link"  style={{margin: '0px 15px'}}>{log}</Link></NavItem>
        
        </div>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }


export default Header;