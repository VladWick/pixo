interface ProductInOrder {
  productId: number;
  amount: number;
  wishes: string;
  finalPrice: number;
}

export interface OrderResponse {
  orderId: string;
  userId: string;
  productsInOrder: ProductInOrder[];
}
