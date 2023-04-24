import { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Container, Nav, Navbar} from "react-bootstrap"
import { Link, NavLink, useParams } from "react-router-dom"

const NavBar = () =>{
    return (
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
       <Navbar.Brand href="#home"><img src='rsz_funko_brand.png' alt='logo' /></Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
           <Nav.Link href="#dragonball">Dragon Ball</Nav.Link>
           <Nav.Link href="#pokemon">Pokemon</Nav.Link>
           <Nav.Link href="#onepiece">One Piece</Nav.Link>
         </Nav>
         <Nav>
           <Nav.Link eventKey={2} href="#carrito">
           <p>5</p><CartWidget />
           </Nav.Link>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>

    )
}

export default NavBar
