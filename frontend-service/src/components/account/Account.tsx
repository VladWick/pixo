import * as React from 'react';
import {useEffect, useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import CurrentAccountInfo from './CurrentAccountInfo';
import '../../css/account.css';
import Cookies from 'js-cookie';

function Account() {
  const [role, setRole] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    let role = Cookies.get("role");
    if (role == undefined) {
      setRole("user");
    } else {
      setRole(role);
    }
  }, []);

  return (
    <div className={'account'}>

      <div className={'menu'}>
        <ListGroup>
          <ListGroup.Item onClick={() => setType('info')}>Информация</ListGroup.Item>
          <ListGroup.Item onClick={() => setType('favourites')}>Избранное</ListGroup.Item>
          <ListGroup.Item onClick={() => setType('reviews')}>Отзывы</ListGroup.Item>
          <ListGroup.Item onClick={() => setType('history')}>История</ListGroup.Item>

          {role === "seller" &&
              <ListGroup.Item onClick={() => setType('products')}>Товары</ListGroup.Item>
          }

          {role === "moderator" &&
              <ListGroup.Item onClick={() => setType('administration')}>Администрирование</ListGroup.Item>
          }
        </ListGroup>
      </div>

      <div className={'current-info'}>
        <CurrentAccountInfo type={type} />
      </div>
    </div>
  );
}

export default Account;
