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
import {TokenModel} from '../domain/TokenModel';
import {baseUrl, login, logout, register} from '../utils/Utils';
import {ProductApi} from '../api/ProductApi';
import {CategoryModel} from '../domain/CategoryModel';
import '../css/navbar.css';

function NavigationBar() {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const accessTokenRegex = /access_token=([^&]+)/;
    const isMatch = window.location.href.match(accessTokenRegex);

    if (isMatch) {
      const accessToken = isMatch[1];
      const decodedAccessToken: TokenModel = jwtDecode(accessToken);
      const name: string = decodedAccessToken.name;
      const email: string = decodedAccessToken.email;
      const userId: string = decodedAccessToken.sid;
      const preferred_username: string = decodedAccessToken.preferred_username;
      const roles = decodedAccessToken.realm_access.roles;

      if (roles.includes("moderator")) {
        Cookies.set("role", "moderator");
      } else if (roles.includes("seller")) {
        Cookies.set("role", "seller");
      } else {
        Cookies.set("role", "user");
      }

      Cookies.set("access_token", accessToken);
      Cookies.set("email", email);
      Cookies.set("name", name);
      Cookies.set("userId", userId);
      Cookies.set("preferred_username", preferred_username);

      setEmail(email);
      setName(name);
      setIsLoggedin(true);
    }

    ProductApi.getAllCategories().then((resp) => {
      setCategories(resp);
    }).catch((err) => {
      console.log('LOG err: ' + JSON.stringify(err));
    });

    fetch(baseUrl + '/api/product/category', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => console.log("RESPONSE categories: " + response))
      .catch(err => console.error(err));

  }, []);

  const handleSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className={'main-title'} onClick={() => navigate("/")}>Pixo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown className={'catalog-text'} title="Каталог" id="navbarScrollingDropdown">
              {categories.map((category) => (
                <NavDropdown.Item
                  key={category.id}
                  onClick={() => navigate('/category', { state: category})}
                >
                  {category.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>

          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearchChange}
            />
            <Button variant="outline-success" onClick={() => navigate('/search', { state: {"word" : keyword} })} >Search</Button>
          </Form>

          {isLoggedin ?
            <Nav>
              <NavDropdown title={name} id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => navigate('/account')}>Личный кабинет</NavDropdown.Item>
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
          <div className={'cart-image-wrapper'}>
            <img
              className={'cart-image'}
              src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/shopping-circle-blue-512.png"
              alt="cart-image"
              onClick={() => navigate("/cart")}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
