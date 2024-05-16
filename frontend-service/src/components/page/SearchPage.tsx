import React, {useEffect, useState} from "react";
import {ProductApi} from '../../api/ProductApi';
import {useLocation} from 'react-router-dom';
import {ProductModel} from '../../domain/ProductModel';
import ProductCard from '../home/ProductCard';
import {CategoryModel} from '../../domain/CategoryModel';
import '../../css/page/search-page.css';

function SearchPage() {
  const location = useLocation();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    ProductApi.searchByWord(location.state.word).then((resp) => {
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
    <div className={'search-page'}>
      <p className={'search-page-title'}>Найдено: {products.length} товаров</p>
      <div className={'product-card-container'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} categories={categories} ></ProductCard>
        ))}
      </div>
    </div>
  )
}

export default SearchPage;
