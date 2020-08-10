import React from 'react'
import {Nav, Navbar, Button} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./NavbarComponent.css"


import { Component } from 'react'

 class NavbarComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       user:  localStorage.getItem("userTokenTime")
    }
  }
  
  render() {
    return (
      <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand href="http://localhost:3000" expand="lg">NAture  PHotoGRaPHy </Navbar.Brand>
      <Nav className="elements">
        {(this.state.user) ?
          
       <React.Fragment>
        <Nav.Link href="http://localhost:3000/images" ><Button size="lg">Images</Button></Nav.Link>

        <Nav.Link href="http://localhost:3000/logout"><Button size="lg">Logout</Button></Nav.Link>

        </React.Fragment>
        :
        <React.Fragment>
        <Nav.Link href="http://localhost:3000/login"><Button size="lg">Login</Button></Nav.Link>
        <Nav.Link href="http://localhost:3000/SignUp"><Button size="lg">SignUp</Button></Nav.Link>
        
        </React.Fragment>
        }
      
        </Nav>
  
    </Navbar>
    )
  }
}

export default NavbarComponent



    



  

