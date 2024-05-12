import * as React from 'react';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {login} from '../utils/Utils';

function Cart() {
  const navigate = useNavigate()

  const toPlaceOrder = () => {
    const access_token = Cookies.get("access_token");
    const username = Cookies.get("name");
    console.log("access: " + access_token);
    console.log("name: " + username);
    if (!!access_token && !!username) {
      navigate("/order");
    } else {
      login();
    }
  }

  return (
    <div>
      <h2>Корзина</h2>
      <h2>Список купленного</h2>
      <Button variant="warning" onClick={() => toPlaceOrder()} >Оформить заказ</Button>
    </div>
  );
}

export default Cart;
