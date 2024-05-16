import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {TextField} from '@mui/material';
import '../../css/component/product-details.css';
import {ProductApi} from '../../api/ProductApi';
import {ProductModel} from '../../domain/ProductModel';
import {CategoryModel} from '../../domain/CategoryModel';
import {ReviewModel} from '../../domain/ReviewModel';
import {ReviewApi} from '../../api/ReviewApi';
import ProductMiniCard from './ProductMiniCard';
import Cookies from 'js-cookie';
import {FavouriteModel} from '../../domain/FavouriteModel';
import {FavouritesApi} from '../../api/FavouritesApi';

function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [reviews, setReviews] = useState<ReviewModel[]>([]);
  const [review, setReview] = useState('');

  useEffect(() => {

    ProductApi.getAllProducts().then((resp) => {
      setProducts(resp);

      ProductApi.getAllCategories().then((resp) => {
        setCategories(resp);

        ReviewApi.getAllReviewsByProductId(location.state.id).then((resp) => {
          setReviews(resp);
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

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  }

  const sendReview = () => {
    const userId = Cookies.get("userId");
    const reviewForm: ReviewModel = {
      id: null,
      userId: userId,
      productId: location.state.id,
      text: review,
    };

    ReviewApi.addReview(reviewForm).then((resp) => {
    }).catch((err) => {
      console.log('LOG err: ' + JSON.stringify(err));
    });
  }

  const addToFavourites = () => {
    const userId = Cookies.get("userId");
    const favouriteForm: FavouriteModel = {
      id: null,
      userId: userId,
      productId: location.state.id,
    };

    FavouritesApi.addFavourite(favouriteForm).then((resp) => {
    }).catch((err) => {
      console.log('LOG err: ' + JSON.stringify(err));
    });
  }

  return (
    <div className={'product-details'}>
      <div className={'product-details-wrapper'}>
        <div className={'first-column'}>
          <div className="product-details-image-wrapper">
            <img
              src={location.state.imageLink}
              alt="image"
              className={'product-image'}
            />
          </div>
        </div>
        <div className={'second-column'}>
          <h5 className={'product-details-title'}>{location.state.title}</h5>
          <h5 className={'product-details-price'}>Цена: {location.state.price} ₽</h5>
          <p className={'product-details-description'}>{location.state.description}</p>
          <p className={'product-details-stock'}>Осталось - {location.state.amountInStock} шт</p>

          <div className="review-button-wrapper">
            <Button variant="outline-info" className="m-2 cart-button" onClick={() => navigate(`/cart`, { state: location.state})}>В корзину</Button>
            <Button variant="outline-danger" className="m-2 favourite-button" onClick={addToFavourites}>Добавить в избранное</Button>
          </div>

          <div className={'review-wrapper'}>
            <h5 className={'review-title'}>Оставьте отзыв на товар!</h5>
            <TextField
              id="standard-textarea"
              className={'review-input'}
              label={'Отзыв'}
              name={'review'}
              onChange={handleChange}
              variant={"outlined"}
              size={"small"}
              multiline
              maxRows={4}
            />
            <div className={'review-button-wrapper'}>
              <Button variant="info" className="m-2 review-button" onClick={sendReview} >Оставить отзыв</Button>
            </div>
          </div>
        </div>
      </div>

      <div className={'reviews'}>
        <div className={'reviews-title'}>
          Отзывы об этом товаре
        </div>

        {reviews.map((review) => (
          <div className={'review-row'}>
            <div className={'user-wrapper'} >
              <div className={'review-image-wrapper'}>
                <img className={'review-image'} src="https://t3.ftcdn.net/jpg/03/58/90/78/360_F_358907879_Vdu96gF4XVhjCZxN2kCG0THTsSQi8IhT.jpg" alt="review-user-image"/>
              </div>
            </div>
            <div className={'review-text'}>
              {review.text}
            </div>
          </div>
        ))}

      </div>

      <div className={'other-products'}>
        <div className={'other-products-title'}>
          Рекомендованные товары
        </div>

        <div className={'other-products-container'}>
          {products.slice(0, 3).map((product) => (
            <ProductMiniCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProductDetails;