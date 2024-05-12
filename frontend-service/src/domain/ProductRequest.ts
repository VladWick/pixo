export interface ProductRequest {
  id: number,
  title: string,
  description: string,
  price: number,
  categoryId: number,
  createDate: string,
  lastUpdateDate: string,
  amountInStock: number,
  sellerId: number,
  isConfirmForSale: boolean,
  // image: File
  image: string
}

// private Long id;
//
//     private String title;
//
//     private String description;
//
//     private Long price;
//
//     private Long categoryId;
//
//     private Date createDate;

//     private Date lastUpdateDate;

//     private Long amountInStock;

//     private Long sellerId;

//     private Boolean isConfirmForSale;

//     private Long imageId;
