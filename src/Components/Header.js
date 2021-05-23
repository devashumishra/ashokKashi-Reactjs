import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, useHistory, withRouter} from 'react-router-dom';
import bootstrap from 'react-bootstrap'
import {Row, Col, Container, Dropdown, Button, Navbar, NavDropdown, Nav} from 'react-bootstrap'
import Content from './Content';
import Advertise from './Advertise';
import Home from'./Home';
import Login from './Login';
import Slider from './Slider';
;
function Header(props) {

  const link=useHistory();
  const handleHistory=()=>{
      link.push("/Login");
  }
    return (
       
        <div>
        <header>
<Row >
 
  <Col lg={3} xl={3} sm={3} xs={4} >
  <img className="logo"  src="/assets/Images/logo.png"></img>
  </Col>
    
    <Col lg={5} xl={5} sm={9}xs={7}>
  <Navbar className="navhead" expand="md">
<Navbar.Toggle aria-controls="basic-navbar-nav" className="navmobile" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">

 <Nav.Link href="/Home">Home</Nav.Link>
     
    
     <NavDropdown title="Rent" id="basic-nav-dropdown">
      

     
       <table >
         <tr>
           <td><NavDropdown.Item  href="/Home">Home</NavDropdown.Item></td>
           <td><NavDropdown.Item href="#action/3.1">Apartment</NavDropdown.Item></td>
         </tr>
         <tr>
           <td>
         <NavDropdown.Item href="#action/3.1">Flats</NavDropdown.Item></td>
         <td><NavDropdown.Item href="#action/3.1">House Party</NavDropdown.Item></td>
         
         </tr>
         <tr>
         <td><NavDropdown.Item href="#action/3.1">Villas</NavDropdown.Item></td>
         <td><NavDropdown.Item href="#action/3.1">Co-working space</NavDropdown.Item></td>
         </tr>
         <tr>
         <td><NavDropdown.Item href="#action/3.1">Shops</NavDropdown.Item></td>
         <td><NavDropdown.Item href="#action/3.1">Office Space</NavDropdown.Item></td>
         </tr>
         <tr>
         <td><NavDropdown.Item href="#action/3.1">PC Homes</NavDropdown.Item></td>
         </tr>
         
       </table>
     
    </NavDropdown>

    <NavDropdown title="Buy" id="basic-nav-dropdown">
  

  
    <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#/action-2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#/action-3">Something else</NavDropdown.Item>
  
</NavDropdown>

    <NavDropdown title="Sell" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">XYZ</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">XYZ</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">XYZ</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.4">XYZ</NavDropdown.Item>
    </NavDropdown>

    <Nav.Link href="/Content">Blogs</Nav.Link>
    <Nav.Link href="/Slider">Contact Us</Nav.Link>
     <div className="desktop">
    <Dropdown className="headbutton">
  <Nav.Link href="/Login">
    <Button onClick={handleHistory} className="but" variant="warning"><span style={{fontSize:"1px", color:"white"}}><img style={{width:"22px"}} src="/assets/Images/user.png" alt="icon"></img>Sign in</span></Button>
    </Nav.Link>

 


<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Notification</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
   
<Button href="#" className="but" variant="warning" ><span style={{fontSize:"5px", color:"white"}}>Post Property</span></Button>
</div>
  </Nav>
  </Navbar.Collapse>
</Navbar>
</Col>


  
  <Col lg={4} xl={4} xs={3}>
   <div className="mobile"> 
  <Dropdown className="headbutton">

<Button href="#" className="but" variant="warning"><span style={{fontSize:"1px", color:"white", marginTop:"30px"}}><img style={{width:"22px"}} src="/assets/Images/user.png"></img>Sign in</span></Button>
 <br></br>


<Dropdown.Menu>
  <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Notification</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
   
<Button href="#" className="but" variant="warning" ><span style={{fontSize:"5px", color:"white"}}>Post Property</span></Button>
</div>

</Col>
</Row>
</header> 









      </div>
         
          
         

      
    );
}



export default Header

