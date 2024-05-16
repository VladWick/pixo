interface ProductInOrder {
  productId: number;
  amount: number;
  wishes: string;
  finalPrice: number;
}

export interface OrderRequest {
  userId: string;
  productsInOrder: ProductInOrder[];
}
