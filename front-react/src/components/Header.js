import React from "react";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


function Header() {
    return (

        <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">NETCHA</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll                   >
                        <Nav.Link href="#action1">추천</Nav.Link>
                        <NavDropdown title="장르" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action2">모험</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">판타지</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action4">보관함</Nav.Link>
                        <Nav.Link href="#action5">마이페이지</Nav.Link>
                    </Nav>

                    <Navbar.Collapse className="justify-content-end">
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}

export default Header;