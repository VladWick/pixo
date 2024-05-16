import * as React from 'react';
import {useEffect, useState} from 'react';
import {Container, ListGroup} from 'react-bootstrap';
import Account from './Account';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from 'react-router-dom';
import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {Table} from '@mui/joy';
import {ReviewModel} from '../../domain/ReviewModel';
import {ProductModel} from '../../domain/ProductModel';
import Cookies from 'js-cookie';
import {FavouriteModel} from '../../domain/FavouriteModel';
import {CategoryModel} from '../../domain/CategoryModel';
import {OrderResponse} from '../../domain/order/OrderResponse';

interface Props {
  type: string;
  reviews: ReviewModel[];
  products: ProductModel[];
  favourites: FavouriteModel[];
  categories: CategoryModel[];
  orders: OrderResponse[];
}

function CurrentAccountInfo(props: Props) {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  useEffect(() => {
  }, []);

  function getProductTitle(review: ReviewModel | FavouriteModel) {
    let title = '';
    for (let i = 0; i < props.products.length; ++i) {
      if (props.products[i] && review.productId === props.products[i].id) {
        title = props.products[i].title;
        break;
      }
    }
    return title;
  }

  function getProductById(productId: number) {
    let product: ProductModel = null;
    for (let i = 0; i < props.products.length; ++i) {
      if (props.products[i].id === productId) {
        product = props.products[i];
        return product;
      }
    }
    return product;
  }

  function getCategoryTitle(product: ProductModel) {
    let title = '';
    for (let i = 0; i < props.categories.length; ++i) {
      if (props.categories[i] && product.categoryId === props.categories[i].id) {
        title = props.categories[i].title;
        break;
      }
    }
    return title;
  }

  return (
    <div className={'current-account-info'}>

      {props.type == 'info-favourites' &&
        <div className={'favourites'}>
            <div className={'info'}>
                <div className={'image-wrapper'}>
                    <img className={'image'} src="https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg" alt="review-user-image"/>
                    <h5 className={'image-undertext'}>{Cookies.get("name")}</h5>
                </div>
                <div className={'text-wrapper'}>
                    <div className={'text-element'}>Электронная почта: {Cookies.get("email")}</div>
                    <div className={'text-element'}>Роль: {Cookies.get("role")}</div>
                </div>
            </div>

            <div className={'favourites-container'}>
                <div className={'favourites-title'}>
                    Избранное
                </div>
                <div className={'favourites-table-container'}>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Продукт</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                              {props.favourites.map((favourite) => (
                                <TableRow
                                  key={favourite.id}
                                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                  className={'table-body'}
                                >
                                  <TableCell className={'product'} align="left">
                                    <Link to={`/product/${favourite.productId}`} state={getProductById(favourite.productId)}>{getProductTitle(favourite)}</Link>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>

        </div>
      }

      {props.type == 'reviews' &&
        <div className={'reviews'}>
            <h5 className={'reviews-title'}>Отзывы</h5>

            <div className={'reviews-table'}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Продукт</TableCell>
                                <TableCell align="right">Текст</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {props.reviews.map((review) => (
                            <TableRow
                              key={review.id}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              className={'table-body'}
                            >
                              <TableCell className={'product'} align="left">{getProductTitle(review)}</TableCell>
                              <TableCell className={'text'} align="left">{review.text}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
      }

      { props.type == 'history' &&
          <div className={'history'}>
              <div className={'history-title'}>
                  История заказов
              </div>

              <TableContainer component={Paper} className={'table-wrapper'} >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="right">ID заказа</TableCell>
                              <TableCell align="right">Пожелания</TableCell>
                              <TableCell align="right">Цена</TableCell>
                              <TableCell align="right">Пользователь</TableCell>
                              <TableCell align="right">Товары</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                        {props.orders.map((order) => (
                          <TableRow
                            key={order?.orderId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className={'table-body'}
                          >
                            <TableCell className={'product'} align="left">
                              {order?.orderId}
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              {order?.productsInOrder[0]?.wishes}
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              {order?.productsInOrder[0]?.finalPrice}
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              {order?.userId}
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              {order?.productsInOrder[0]?.productId}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </div>
      }

      { props.type == 'products' &&
          <div className={'products'}>
              <div className={'products-title'}>
                  Управление товарами
              </div>

              <Button className={'products-add-button'} variant="outline-success" onClick={() => navigate('/account/product')}>Добавить продукт</Button>

              <TableContainer component={Paper} className={'table-wrapper'} >
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell align="right">Имя</TableCell>
                              <TableCell align="right">Категория</TableCell>
                              <TableCell align="right">Цена</TableCell>
                              <TableCell align="right">Описание</TableCell>
                              <TableCell align="right">Действия</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                        {props.products.map((product) => (
                          <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className={'table-body'}
                          >
                            <TableCell className={'product'} align="left">
                              <Link to={`/product/${product.id}`} state={product}>
                                {product.title}
                              </Link>
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              {getCategoryTitle(product)}
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              {product.price}
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              {product.description}
                            </TableCell>
                            <TableCell className={'product'} align="left">
                              <div className={'actions'}>
                                <Button className={'button'} variant="success">Отправить на проверку</Button>
                                <Button className={'button'} variant="warning">Убрать товар с продажи</Button>
                                <Button className={'button'} variant="danger">Удалить</Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </div>
      }

      {props.type === 'administration' &&
        <div className={'administration'}>
            <div className={'admin-title'}>
                Администрирование товаров
            </div>

            <TableContainer component={Paper} className={'table-wrapper'} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Имя</TableCell>
                            <TableCell align="right">Категория</TableCell>
                            <TableCell align="right">Цена</TableCell>
                            <TableCell align="right">Описание</TableCell>
                            <TableCell align="right">Действия</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {props.products.map((product) => (
                        <TableRow
                          key={product.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          className={'table-body'}
                        >
                          <TableCell className={'product'} align="left">
                            <Link to={`/product/${product.id}`} state={product}>
                              {product.title}
                            </Link>
                          </TableCell>
                          <TableCell className={'product'} align="left">
                            {getCategoryTitle(product)}
                          </TableCell>
                          <TableCell className={'product'} align="left">
                            {product.price}
                          </TableCell>
                          <TableCell className={'product'} align="left">
                            {product.description}
                          </TableCell>
                          <TableCell className={'product'} align="left">
                            <div className={'actions'}>
                              <Button className={'button'} variant="success">Одобрить</Button>
                              <Button className={'button'} variant="danger">Отказать</Button>
                              <Button className={'button'} variant="warning">Редактировать</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
      }


    </div>
  )
}

export default CurrentAccountInfo;
