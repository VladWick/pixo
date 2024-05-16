import React from "react";
import {ProductModel} from '../../domain/ProductModel';
import {Typography} from '@mui/material';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

interface Props {
  product: ProductModel;
}

function ProductMiniCard(props: Props) {
  const navigate = useNavigate();

  return (
    <div className={'mini-card'}>

      <div className="image-wrapper">
        <img
          src={props.product?.imageLink}
          alt="image"
          className={'image'}
          onClick={() => navigate(`/product/${props.product.id}`, { state: props.product})}
        />
      </div>

      <Typography
        variant="h5"
        className={'product-title'}
        onClick={() => navigate(`/product/${props.product.id}`, { state: props.product})}
      >
        {props.product?.title}
      </Typography>

      <Typography
        variant="h5"
        className={'product-price'}
      >
        {props.product?.price} ₽
      </Typography>

      <div className="button-wrapper">
        <Button
          variant="outline-info"
          className="m-2 details-button"
          onClick={() => navigate(`/product/${props.product.id}`, { state: props.product})}
        >
          Детали
        </Button>
      </div>

    </div>
  );
}

export default ProductMiniCard;