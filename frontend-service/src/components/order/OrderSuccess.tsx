import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import '../../css/page/order-success.css';
import Button from 'react-bootstrap/Button';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={'order-success'}>

      <div className={'title-wrapper'}>
        <div className={'order-success-title'}>
          Заказ успешно оформлен!
        </div>
        <div className={'image-wrapper'}>
          <img className={'image-success'} src="https://w7.pngwing.com/pngs/541/639/png-transparent-check-mark-computer-icons-green-tick-mark-angle-text-rectangle-thumbnail.png" alt=""/>
        </div>
      </div>

      <div className={'order-number-wrapper'}>
        <p className={'order-number-text'}>Номер вашего заказа:
          <b className={'order-number'}>{location.state}</b>
        </p>
      </div>

      <div className={'button-wrapper'}>
        <Button
          className={'order-button'}
          variant="success"
          onClick={() => navigate('/')}
        >
          Вернуться на главную
        </Button>
      </div>

    </div>
  )
}

export default OrderSuccess;