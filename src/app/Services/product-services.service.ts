import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  ProductList=
    [
      {
        Id:1,
        Name:"Laptop",
        Quantity:1,
        Price:10000,
        Img:"../../assets/laptop.jpg",
      },
      {
        Id:2,
        Name:"Iphone",
        Quantity:1,
        Price:16000,
        Img:"../../assets/iphone.jpg",

      }

    ];

  constructor() {}
  GetAllProducts():any
  {
    return this.ProductList;
  }
  GetProductById(prdId:number):any
  {
    if(isNaN(prdId))
    {
      return null;
    }
    const Product=this.ProductList.find(Product=>Product.Id===prdId)
    {
      if(!Product){
        return null;
      }
      return Product;
    };
    
  }
}
