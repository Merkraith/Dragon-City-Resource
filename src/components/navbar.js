import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function TopNavbar() {
    return (
        <div>
                {/* <Navbar expand="lg" variant="light" bg="light">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Option 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Option 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Option 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar> */}
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Merkraith's Dragon City Resource</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar>
        </div>
    );
}

export default TopNavbar;

