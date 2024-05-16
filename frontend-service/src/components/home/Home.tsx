import * as React from 'react';
import MainBanner from './MainBanner';
import {useEffect, useState} from 'react';
import {ProductApi} from '../../api/ProductApi';
import {CategoryModel} from '../../domain/CategoryModel';
import {ProductModel} from '../../domain/ProductModel';
import ProductCard from './ProductCard';
import '../../css/main.css';
import '../../css/component/product-card.css';

function Home() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    ProductApi.getAllProducts().then((resp) => {
      setProducts(resp);

      ProductApi.getAllCategories().then((resp) => {
        setCategories(resp);
      }).catch((err) => {
        console.log('LOG err: ' + JSON.stringify(err));
      });

    }).catch((err) => {
      console.log('LOG err: ' + JSON.stringify(err));
    });
  }, []);

  return (
    <div className={'home'}>
      <div className={'main-banner-wrapper'}>
        <MainBanner />
      </div>

      <div className={'product-card-container'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} categories={categories} ></ProductCard>
        ))}
      </div>

    </div>
  );
}

export default Home;
