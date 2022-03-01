import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
                <Container fluid>

<Navbar collapseOnSelect expand="lg" variant="dark">
    <Container>
        <Navbar.Brand className="fs-2 fw-bolder text-primary"> <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWere9YljxlRqiaP1u7uD5T8J9TaIu1m-qhQ&usqp=CAU" rounded="true" width="150px" ></Image> BOOK DELIVERY</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-info" />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link to="/" as={Link}  className="px-3 fs-5 text-black" > Home</Nav.Link>    
                <Nav.Link to="/books"  as={Link}className="px-3 fs-5 text-black" > ALL Books</Nav.Link>
             
                <Nav.Link to="/offers" as={Link} className="px-3 fs-5 text-black" >OFFERS</Nav.Link>
                <Nav.Link className=" fs-5 pe-2 text-black " >
                     CONTACT
                </Nav.Link>
                
            </Nav>
          
        </Navbar.Collapse>
    </Container>
</Navbar>

</Container>
 
            
        </div>
    );
};

export default Header;