import * as React from 'react';
import {useEffect, useState} from 'react';
import {ListGroup} from 'react-bootstrap';
import CurrentAccountInfo from './CurrentAccountInfo';
import '../../css/account.css';
import Cookies from 'js-cookie';
import {ReviewModel} from '../../domain/ReviewModel';
import {ReviewApi} from '../../api/ReviewApi';
import {ProductApi} from '../../api/ProductApi';
import {ProductModel} from '../../domain/ProductModel';
import {FavouritesApi} from '../../api/FavouritesApi';
import {FavouriteModel} from '../../domain/FavouriteModel';
import {CategoryModel} from '../../domain/CategoryModel';
import {OrderApi} from '../../api/OrderApi';
import {OrderResponse} from '../../domain/order/OrderResponse';

function Account() {
  const [role, setRole] = useState("");
  const [type, setType] = useState("info-favourites");
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [favourites, setFavourites] = useState<FavouriteModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [orders, setOrders] = useState<OrderResponse[]>([]);

  useEffect(() => {
    let role = Cookies.get("role");
    if (role == undefined) {
      setRole("user");
    } else {
      setRole(role);
    }

    const userId = Cookies.get("userId");
    ReviewApi.getAllReviewsByUserId(userId).then((resp) => {
      setReviews(resp);

      ProductApi.getAllProducts().then((resp) => {
        setProducts(resp);

        FavouritesApi.getAllFavouritesByUserId(userId).then((resp) => {
          console.log('LOG getAllFavouritesByUserId: ' + JSON.stringify(resp));
          setFavourites(resp);

          ProductApi.getAllCategories().then((resp) => {
            setCategories(resp);

            OrderApi.getAllOrders().then((resp) => {
              setOrders(resp);

            }).catch((err) => {
              console.log('LOG err: ' + JSON.stringify(err));
            });

          }).catch((err) => {
            console.log('LOG err: ' + JSON.stringify(err));
          });

        }).catch((err) => {
          console.log('LOG err: ' + JSON.stringify(err));
        });

      }).catch((err) => {
        console.log('LOG err: ' + JSON.stringify(err));
      });

    }).catch((err) => {
      console.log('LOG err: ' + JSON.stringify(err));
    });
  }, []);

  return (
    <div className={'account'}>

      <div className={'menu'}>
        <ListGroup>
          <ListGroup.Item className={'menu-item'} onClick={() => setType('info-favourites')}>Избранное</ListGroup.Item>
          <ListGroup.Item className={'menu-item'} onClick={() => setType('reviews')}>Отзывы</ListGroup.Item>
          <ListGroup.Item className={'menu-item'} onClick={() => setType('history')}>История</ListGroup.Item>

          {(role === "seller" || role === "moderator") &&
              <ListGroup.Item className={'menu-item'} onClick={() => setType('products')}>Товары</ListGroup.Item>
          }

          {role === "moderator" &&
              <ListGroup.Item className={'menu-item'} onClick={() => setType('administration')}>Администрирование</ListGroup.Item>
          }
        </ListGroup>
      </div>

      <div className={'current-info'}>
        <CurrentAccountInfo
          type={type}
          reviews={reviews}
          products={products}
          favourites={favourites}
          categories={categories}
          orders={orders}
        />
      </div>
    </div>
  );
}

export default Account;
