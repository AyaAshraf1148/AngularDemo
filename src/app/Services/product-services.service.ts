import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import ProductList from '../../assets/Data/products.json';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  // ProductList=
  //   [
  //     {
  //       Id:1,
  //       Name:"Laptop",
  //       Quantity:1,
  //       Price:10000,
  //       Img:"../../assets/laptop.jpg",
  //     },
  //     {
  //       Id:2,
  //       Name:"Iphone",
  //       Quantity:1,
  //       Price:16000,
  //       Img:"../../assets/iphone.jpg",

  //     }

  //   ];

  constructor(private http:HttpClient) {}
  private _url:string="/assets/Data/products.json";
  getAllProducts():Observable<IProduct[]>
  {
    // return this.ProductList;
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>
  {
    return throwError(()=>(err.message||"server error")
    )
    
  }))
  }
 
 
  getProductById(prdId:number)
  {
    if(isNaN(prdId))
    {
      return null;
    }
    const Product=ProductList.find((ProductId:IProduct)=>ProductId.Id===prdId)
    {
      if(!Product){
        return null;
      }
      return Product;
    }
    
  }
  
}
