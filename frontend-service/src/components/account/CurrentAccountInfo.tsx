import * as React from 'react';
import {useEffect, useState} from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import Account from './Account';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

interface Props {
  type: string;
}

function CurrentAccountInfo(props: Props) {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
  }, []);

  return (
    <div className={'current-account-info'}>
      <h3>current-account-info</h3>
      <h4>{props.type}</h4>

      { props.type == 'products' &&
          <Button variant="outline-success" onClick={() => navigate('/account/product')}>Добавить продукт</Button>
      }

    </div>
  )
}

export default CurrentAccountInfo;
