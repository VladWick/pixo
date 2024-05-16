import * as React from 'react';
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {TextField} from '@mui/material';
import '../../css/order.css';
import {OrderApi} from '../../api/OrderApi';
import {OrderRequest} from '../../domain/order/OrderRequest';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [customization, setCustomization] = useState('');

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) {
      navigate("");
    }
  }, []);

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setCustomization(event.target.value);
  }

  const placeOrder = () => {
    const userId = Cookies.get("userId");

    const productInOrder = {
      productId: location.state?.id,
      amount: 1,
      wishes: customization,
      finalPrice: location.state?.price
    };
    const orderRequestForm: OrderRequest = {
      userId: userId,
      productsInOrder: [productInOrder]
    };

    OrderApi.placeOrder(orderRequestForm).then((resp) => {
      navigate('/order/success', { state: resp } );
    }).catch((err) => {
      console.log('LOG err: ' + JSON.stringify(err));
    });

  }

  return (
    <div className={'order'}>
      <p className={'order-title'}>Итоговая сумма: {location.state?.price} ₽</p>

      <div className={'customization-wrapper'}>
        <p className={'customization-title'}>Напишите пожелания на товары</p>
        <p className={'customization-subtitle'}>(они будут учитываться продавцами)</p>
        <TextField
          id="standard-textarea"
          className={'customization-input'}
          label={'Пожелания'}
          name={'customization'}
          onChange={handleChange}
          variant={"outlined"}
          size={"medium"}
          multiline
          maxRows={4}
        />
        <div className={'order-button-wrapper'}>
          <Button
            className={'order-button'}
            variant="success"
            onClick={placeOrder}
          >
            Сделать заказ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
