import { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Container, Nav, Navbar} from "react-bootstrap"
import { Link, NavLink, useParams } from "react-router-dom"

const NavBar = () =>{
    return (
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
       <Link to='/'><img src='rsz_funko_brand.png' alt='logo' /></Link>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
           <NavLink to="/categoria/DragonBall">Dragon Ball</NavLink>
           <NavLink to="/categoria/Pokemon">Pokemon</NavLink>
           <NavLink to="/categoria/OnePiece">One Piece</NavLink>
         </Nav>
         <Nav>
           <NavLink to="/cart">
           <p>5</p><CartWidget />
           </NavLink>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>

    )
}

export default NavBar
