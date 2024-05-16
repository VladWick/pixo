import React, {useEffect, useState} from "react";
import {ProductModel} from '../../domain/ProductModel';
import {ProductApi} from '../../api/ProductApi';
import ProductCard from '../home/ProductCard';
import {CategoryModel} from '../../domain/CategoryModel';
import {useLocation} from 'react-router-dom';
import '../../css/component/product-card.css';
import '../../css/page/category-page.css';

function CategoryPage() {
  const location = useLocation();
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [categories, setCategories] = useState<CategoryModel[]>([]);

  useEffect(() => {
    ProductApi.searchProductsByCategory(location.state.id).then((resp) => {
      console.log('LOG resp searchProductsByCategory: ' + JSON.stringify(resp));
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
    <div className={'category-page'}>
      <p className={'category-page-title'}>В данной категории найдено товаров: {products.length} шт.</p>

      <div className={'product-card-container'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} categories={categories} ></ProductCard>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage;
