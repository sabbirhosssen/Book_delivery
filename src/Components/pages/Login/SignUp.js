import React from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';

const SignUp = () => {
    return (
        <div className="sback_logo p-5 bg white">
            <div className=" sva w-50 border border-2 p-5 m-2 rounded mx-auto">
        <Form>
            <Form.Label className="fs-3 text-info">Sign up</Form.Label>


            <Form.Group className="mb-3 w-100">

                <Button variant="info w-100  fs-5"  >
                    <Image width="35px" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" />
                    Sign in with Google
                </Button>


            </Form.Group>
            <Form.Label className="text-success fs-2">or</Form.Label>

            <Form.Group className="mb-3" controlId="formNameText">
                <Form.Control type="text" placeholder="Full name " />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter Your Email " />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder=" Enter Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder=" Repeat Password" />
            </Form.Group>

            <Button variant="info w-100  fs-5" type="submit">
                Sign up
            </Button>
            <br /> <br />

            <Form.Text className="text-muted">
                Already have an account? <Link as={Link} to={'/login'} className="text-decoration-none fs-5">Log in</Link>
            </Form.Text>



        </Form>
    </div >
        </div>
        
    );
};

export default SignUp;