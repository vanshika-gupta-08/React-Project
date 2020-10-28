import React, { Component } from "react";
import logo from './logoToroidTechnologies.jpg';
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ Navbar, Nav, NavDropdown} from 'react-bootstrap';


class Navbar1 extends Component {
  
 
 
  render() {
    return (

      <Navbar style = {{ position: "sticky"}} fixed="top" bg="light" expand="md">
	   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Navbar.Brand href="#home"><img src={logo} alt="Logo" className = "logo" /></Navbar.Brand>
     
        <Nav className="mr-auto items .px-2  ">
          <Nav.Link className = "links" style = {{color:"black"}} href="#home">MODEL A</Nav.Link>
          <Nav.Link className = "links"  style = {{color:"black"}} href="#link">MODEL B</Nav.Link>
          <Nav.Link className = "links" style = {{color:"black"}} href="#home">MODEL C</Nav.Link>
          <Nav.Link className = "links" style = {{color:"black"}} href="#link">MODEL D</Nav.Link>
          <Nav.Link className = "links" style = {{color:"black"}} href="#home">MODEL E</Nav.Link>
          <Nav.Link className = "links" style = {{color:"black"}} href="#home">Accessories</Nav.Link>
          </Nav>
              
          </Navbar.Collapse>
         
     
        <div className = "ml-auto shoppingCart"  >
         <FontAwesomeIcon icon={faShoppingCart} />
           
         </div>
         
         <div >
   
 
 
 Hi, Emily  </div>

  <NavDropdown title = <FontAwesomeIcon icon={faUser} />  alignRight id="nav-dropdown">
            <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Dashboard</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Orders</NavDropdown.Item>
       
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
          
        
         
         
    </Navbar>

   
        
    
    );
  }
}
 
export default Navbar1;