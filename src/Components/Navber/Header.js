import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import HeaderInfo from './HeaderInfo';
const Header = () => {
const {user,logOut}=useAuth()

// const [show, setShow] = useState(false);
// const [target, setTarget] = useState(null);
// const ref = useRef(null);

// const handleClicks = (event) => {
//     setShow(!show);
//     setTarget(event?.target);
// };
  
    return (
        <div>
                <Container fluid className='border-bottom'>

<Navbar collapseOnSelect expand="lg" variant="dark">
    <Container>
        <Navbar.Brand to="/admin" as={Link}   className="fs-2 fw-bolder text-white "> <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWere9YljxlRqiaP1u7uD5T8J9TaIu1m-qhQ&usqp=CAU" rounded="true" width="130px" height="70px" ></Image> BOOK DELIVERY</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-info" />
        <Navbar.Collapse className="justify-content-end">
            <Nav>
                <Nav.Link to="/" as={Link}  className="px-3 fs-5 text-white" > Home</Nav.Link>    
                <Nav.Link to="/books"  as={Link}className="px-3 fs-5 text-white" > ALL Books</Nav.Link>
             
                <Nav.Link to="/offers" as={Link} className="px-3 fs-5 text-white" >Offers</Nav.Link>
                <Nav.Link to="/allorder" as={Link} className=" fs-5 pe-2 text-white " >
                     All-Order
                </Nav.Link>
                {user?.email ?
                            <Button onClick={logOut} className="light text-danger fs-5 ms-3 me-2" >Logout</Button> :
                            <HeaderInfo/>
                        }  
                        {user?.email ?
                              <Image  className="border-0 rounded-circle " width="45px" height="45px" src= {user.photoURL}  ></Image>:
                                      
                                        <Outlet/>

                        }
                        
                
                
            </Nav>
          
        </Navbar.Collapse>
    </Container>
</Navbar>

</Container>
 
            
        </div>
    );
};

export default Header;