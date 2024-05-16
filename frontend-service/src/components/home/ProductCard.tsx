import React from 'react';
import {ProductModel} from '../../domain/ProductModel';
import {CategoryModel} from '../../domain/CategoryModel';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import {Typography} from '@mui/material';

interface Props {
  product: ProductModel,
  categories: CategoryModel[]
}

function ProductCard(props: Props) {
  const navigate = useNavigate();

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
    <div className={'product-card'}>

      <div className="wrapper">
        <div className="image-wrapper">
          <img
            src={props.product.imageLink}
            alt="image"
            className={'product-image'}
            onClick={() => navigate(`/product/${props.product.id}`, { state: props.product})}
          />
        </div>

        <Typography
          variant="h5"
          className={'product-title'}
          onClick={() => navigate(`/product/${props.product.id}`, { state: props.product})}
        >
          {props.product.title}
        </Typography>
        <Typography
          variant="h5"
          className={'product-price'}
        >
          {props.product.price} ₽
        </Typography>

        <div className={'category-link-item'}>
          <Typography>{getCategoryTitle(props.product)}</Typography>
        </div>

      </div>

      <div className="button-wrapper">
        <Button
          variant="outline-info"
          className="m-2 details-button"
          onClick={() => navigate(`/product/${props.product.id}`, { state: props.product})}
        >
          Детали
        </Button>
        <Button
          variant="outline-danger"
          className="m-2 cart-button"
          onClick={() => navigate(`/cart`, { state: props.product})}
        >
          В корзину
        </Button>
      </div>

    </div>
  )

}

export default ProductCard;