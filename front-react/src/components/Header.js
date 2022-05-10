import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Header.css";

function Header() {
  const profile = <img className="user-logo" src="img/user.png" />;
  return (
    <Navbar bg="black" expand="lg" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="logo" src="img/넷플릭스.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">추천</Nav.Link>
            <NavDropdown title="장르" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">모험</NavDropdown.Item>
              <NavDropdown.Item href="#action3">판타지</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action4">보관함</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="영화 제목, 감독 이름 등"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className="me-3" variant="outline-success">
                  Search
                </Button>
              </Form>
              <NavDropdown title={profile} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action2">👤 마이페이지</NavDropdown.Item>
                <NavDropdown.Item href="#action3">⚙  설정</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
