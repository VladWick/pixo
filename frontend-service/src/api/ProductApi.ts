import {BaseApi} from './BaseApi';
import {CategoryModel} from '../domain/CategoryModel';
import {ProductModel} from '../domain/ProductModel';
import {ProductRequest} from '../domain/ProductRequest';
import {baseUrl} from '../utils/Utils';

class Api extends BaseApi {

  getAllCategories(): Promise<CategoryModel[]> {
    return fetch(baseUrl + '/api/product/category', {
      method: 'GET',
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<CategoryModel[]>;
    });
  }

  getAllProducts(): Promise<ProductModel[]> {
    return fetch(baseUrl + '/api/product', {
      method: 'GET',
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ProductModel[]>;
    });
  }

  addProduct(product: ProductModel): Promise<ProductModel> {
    return fetch(baseUrl + '/api/product', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<ProductModel>;
    });
  }

}

export const ProductApi = new Api();
