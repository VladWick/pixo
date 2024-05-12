export interface ProductModel {
  id: number,
  title: string,
  description: string,
  price: number,
  categoryId: number,
  createDate: string,
  lastUpdateDate: string,
  amountInStock: number,
  sellerId: string,
  isConfirmForSale: boolean,
  imageId: number
}
