import React, { useState, useRef } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
import "../pages/SearchPage/Search.css";

function NavBar() {
  let [showState, setShowstate] = useState(false);
  let [show, setShow] = useState("");
  const [dropdownClick, setDropdownClick] = useState(false);
  const outSection = useRef();
  const [isVisble, setVisible] = useState(false);
  const [keyword, setkeyword] = useState("");

  const onSetIsVisible = (e) => {
    console.log(e.ta);
    setVisible(e);
  };

  const styles = {
    padding: {
      paddingTop: 7,
      paddingBottom: 7,
    },
    navPadding: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  };

  useState(() => {});

  const handleDropdownClick = () => {
    if (showState === false) {
      setShow("show");
      setShowstate(true);
    } else {
      setShow("");
      setShowstate(false);
    }
    console.log(show);
    console.log(showState);
  };

  const handleKeyword = (e) => {
    console.log(e);
  };

  const profile = <img className="user-logo" src="img/NavAvatar.png" alt="" />;
  return (
    <Navbar
      style={styles.navPadding}
      bg="black"
      expand="lg"
      fixed="top"
      variant="dark"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            className="brand-logo"
            src="img/Navlogo.png"
            href="/mainpage"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/mainpage">홈</Nav.Link>
            <Nav.Link href="#action1">추천</Nav.Link>
            <div
              onMouseDown={() => {
                onSetIsVisible(true);
              }}
              onClick={handleDropdownClick}
              className="nav-item dropdown"
              aria-controls="navbarScroll"
            >
              <a
                id="collasible-nav-dropdown"
                aria-expanded="false"
                role="button"
                className="dropdown-toggle nav-link"
                tabIndex="0"
                href="#"
              >
                장르
              </a>
              {isVisble && (
                <div
                  aria-labelledby="collasible-nav-dropdown"
                  data-bs-popper="static"
                  className={"drop-menu hidden " + show}
                >
                  <div>
                    <a
                      href="/action"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      액션
                    </a>
                    <a
                      href="/fantasy"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      판타지
                    </a>
                    <a
                      href="/animation"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      애니메이션
                    </a>
                    <a
                      href="/drama"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      드라마
                    </a>
                    <a
                      href="/horror"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      공포
                    </a>
                    <a
                      href="/adventure"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      모험
                    </a>
                    <a
                      href="/comedy"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      코미디
                    </a>
                    <a
                      href="/history"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      역사
                    </a>
                    <a
                      href="/western"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      서부
                    </a>
                    <a
                      href="/thriller"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      스릴러
                    </a>
                    <a
                      href="/crime"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      범죄
                    </a>
                    <a
                      href="/documentary"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      다큐멘터리
                    </a>
                    <a
                      href="/sf"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      SF
                    </a>
                    <a
                      href="/mystery"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      미스터리
                    </a>
                    <a
                      href="/music"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      음악
                    </a>
                    <a
                      href="/romance"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      로맨스
                    </a>
                    <a
                      href="/family"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      가족
                    </a>
                    <a
                      href="/war"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      전쟁
                    </a>
                    <a
                      href="/tv"
                      data-rr-ui-dropdown-item=""
                      className="dropdown-item"
                    >
                      TV 영화
                    </a>
                  </div>
                </div>
              )}
              {isVisble && <OutsideClick onSetIsVisible={onSetIsVisible} />}
            </div>
            <Nav.Link href="#action4">보관함</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Form style={styles.padding} className="d-flex">
                <FormControl
                  type="search"
                  placeholder="영화 제목, 줄거리 등"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  onClick={handleKeyword}
                  className="me-2"
                  variant="outline-success"
                  href="/search"
                >
                  Search
                </Button>
              </Form>
              <NavDropdown title={profile} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action2">
                  👤 마이페이지
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const OutsideClick = ({ onSetIsVisible }) => {
  return (
    <div className="outsection" onClick={() => onSetIsVisible(false)}></div>
  );
};

export default NavBar;
