
import CartWidget from '../CartWidget/CartWidget'
import { Container, Nav, Navbar} from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"


const NavBar = () =>{
    return (
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
       <Link to='/'><img src='rsz_funko_brand.png' alt='logo' /></Link>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="me-auto">
           <NavLink className="nav-link" to="/categoria/DragonBall">Dragon Ball</NavLink>
           <NavLink className="nav-link" to="/categoria/Pokemon">Pokemon</NavLink>
           <NavLink className="nav-link" to="/categoria/OnePiece">One Piece</NavLink>
         </Nav>
         <Nav>
           <NavLink to="/cart">
           <CartWidget />
           </NavLink>
         </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar>

    )
}

export default NavBar
