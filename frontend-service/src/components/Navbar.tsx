import * as React from 'react';
import {useEffect, useState} from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode'
import {TokenModel} from '../domain/Token';
import {login, logout, register} from '../utils/Utils';

function NavigationBar() {
  const navigate = useNavigate()
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      const decodedAccessToken: TokenModel = jwtDecode(accessToken);
      const name: string = decodedAccessToken.name;
      const email: string = decodedAccessToken.name;

      Cookies.set("access_token", accessToken);
      Cookies.set("email", email);
      Cookies.set("name", name);

      setEmail(email);
      setName(name);
      setIsLoggedin(true);
    }
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand onClick={() => navigate("/")}>Pixo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Каталог" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#category3">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#category4">Category 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#category5">Category 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          {isLoggedin ?
            <Nav>
              <NavDropdown title={name} id="navbarScrollingDropdown">
                <NavDropdown.Item>Личный кабинет</NavDropdown.Item>
                <NavDropdown.Item>Избранное</NavDropdown.Item>
                <NavDropdown.Item onClick={() => logout()}>Выйти</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            :
            <Nav>
              <Button variant="outline-primary" className="m-2" onClick={() => login()}>Войти</Button>
              <Button variant="outline-primary" className="m-2" onClick={() => register()}>Зарегистрироваться</Button>
            </Nav>
          }
          <Button variant="outline-danger" className="m-2" onClick={() => navigate("/cart")} >Корзина</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;