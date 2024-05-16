import * as React from 'react';
import Button from 'react-bootstrap/Button';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {login} from '../../utils/Utils';
import {useEffect, useState} from 'react';
import '../../css/cart.css';
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {Table} from '@mui/joy';
import {ProductApi} from '../../api/ProductApi';
import {ProductModel} from '../../domain/ProductModel';

function Cart() {
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState<ProductModel>();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    if (location.state?.id) {
      setProduct(location.state);
    } else {
      ProductApi.getAllProducts().then((resp) => {
        setProduct(resp[getRandomInt(7)]);
      }).catch((err) => {
        console.log('LOG err: ' + JSON.stringify(err));
      });
    }

  }, []);

  const toPlaceOrder = () => {
    const access_token = Cookies.get("access_token");
    const username = Cookies.get("name");

    if (!!access_token && !!username) {
      navigate("/order", { state: product });
    } else {
      login();
    }
  }

  return (
    <div className={'cart'}>
      <p className={'cart-title'}>Корзина</p>

      {product === null ?
        <p className={'cart-empty'}>Нету выбранных товаров</p>
      :
        <div className={'cart-wrapper'}>
          <div className={'cart-table-container'}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Имя</TableCell>
                    <TableCell align="right">Изображение</TableCell>
                    <TableCell align="right">Описание</TableCell>
                    <TableCell align="right">Цена</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key={product?.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className={'table-body'}
                  >
                    <TableCell align="left">
                      <Link to={`/product/${product?.id}`} state={product}>{product?.title}</Link>
                    </TableCell>
                    <TableCell align="left">
                      <div className={'cart-image-wrapper'}>
                        <img className={'cart-image'} src={product?.imageLink} alt=""/>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      {product?.description}
                    </TableCell>
                    <TableCell align="left">
                      {product?.price}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className={'cart-actions-wrapper'}>
            <p className={'cart-price'}>Итоговая цена: {product?.price} ₽</p>
            <Button className={'cart-place-order'} variant="warning" onClick={() => toPlaceOrder()} >Оформить заказ</Button>
            <Button className={'cart-clear'} variant="danger" onClick={() => setProduct(null)} >Очистить корзину</Button>
          </div>
        </div>
      }

    </div>
  );
}

export default Cart;
