import React, { useRef, useState } from 'react';
import { Button, Nav, Overlay, Popover } from 'react-bootstrap';
import { AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';

const HeaderInfo = () => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event?.target);
    };
    return (
        <div ref={ref}>
             <Button className=" text-center text-info px-3 bg-transparent border-0  " onClick={handleClick}> <AiOutlineUser className='fs-2'/></Button>
             
<Overlay
    show={show}
    target={target}
    placement="bottom"
    container={ref}
    containerPadding={20}
>
    <Popover id="popover-contained ">
        <Popover.Header as="h3">
            <Nav>
                <Nav.Link as={Link} to={"/login"} className=" text-info"> <AiOutlineLogin className='pe-1 fs-4'/>Login</Nav.Link>
            </Nav>
        </Popover.Header>
        <Popover.Header as="h3">
            <Nav>
                <Nav.Link as={Link} to={"/signup"} className=" text-info"> Signup</Nav.Link>
            </Nav>
        </Popover.Header>

    </Popover>
</Overlay>
        </div>
    );
};

export default HeaderInfo;