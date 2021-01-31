import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function TopNavbar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Nav className="container-fluid">
                <Nav.Item>
                    <Navbar.Brand href="#home">Merkraith's Dragon City Resource</Navbar.Brand>
                </Nav.Item>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#Gold">Gold Effiency</Nav.Link>
                        <Nav.Link href="#Breeding">Breeding</Nav.Link>
                        <Nav.Link href="#Strategies">Strategies</Nav.Link>
                        <Nav.Link href="#Charts">Charts</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>
        </div>
    );
}

export default TopNavbar;

