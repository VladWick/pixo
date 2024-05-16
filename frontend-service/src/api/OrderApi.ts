import {baseUrl} from '../utils/Utils';
import {OrderRequest} from '../domain/order/OrderRequest';
import {OrderResponse} from '../domain/order/OrderResponse';

class Api {

  placeOrder(orderRequest: OrderRequest): Promise<number> {
    return fetch(baseUrl + '/api/order/place', {
      method: 'POST',
      body: JSON.stringify(orderRequest),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<number>;
    });
  }

  getAllOrders(): Promise<OrderResponse[]> {
    return fetch(baseUrl + `/api/order`, {
      method: 'GET',
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<OrderResponse[]>;
    });
  }

}

export const OrderApi = new Api();
