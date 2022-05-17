import React, { useState } from "react";
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
import { useNavigate } from "react-router";
import "../pages/Login/loginPage.css";

function NavBar() {
  const navigate = useNavigate();
  let [showState, setShowstate] = useState(false);
  let [show, setShow] = useState("");
  // const [dropdownClick, setDropdownClick] = useState(false);
  const [isVisble, setVisible] = useState(false);
  const [keyword, setkeyword] = useState("");

  const onSetIsVisible = (e) => {
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
  };

  //키값 받기
  const handleOnchange = (e) => {
    setkeyword(e.target.value);
  };

  // handelonchange 엔터로 받기
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate("/search", { state: keyword });
      window.location.reload(true);
    }
  };

  const handleKeyword = () => {
    navigate("/search", { state: keyword });
    window.location.reload(true);
  };

  //로그아웃
  const onLogout = () => {
    const token = localStorage.getItem("token");
    if (token) {
      localStorage.clear();
      navigate("/loginpage");
    }
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
        <Navbar.Brand href="/mainpage">
          <img
            className="brand-logo"
            src="img/Navlogo.png"
            alt="logomainpage"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="/mainpage">홈</Nav.Link>
            <Nav.Link href="/recommendPage">추천</Nav.Link>
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
                href="#!"
                // #!로 waring 삭제
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
            <Nav.Link href="/likePage">내가 찜한 컨텐츠</Nav.Link>
            <Nav.Link href="/YoutubeApp">YouTube</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Form style={styles.padding} className="d-flex">
                <FormControl
                  onChange={handleOnchange}
                  onKeyPress={onKeyPress}
                  type="text"
                  placeholder="영화 제목, 장르..."
                  className="me-1"
                  aria-label="검색기능"
                />
                <Button
                  onClick={handleKeyword}
                  className="me-2"
                  variant="outline-danger"
                >
                  Search
                </Button>
              </Form>
              <NavDropdown
                className="profile_nav"
                title={profile}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item
                  className="profile_nav_child"
                  onClick={onLogout}
                >
                  로그아웃
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
