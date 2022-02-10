import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import Products2 from '../../assets/Data/products.json';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { IProducts2 } from '../SharedClassesAndTypes/Iproducts2';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  Products2:IProduct[]=
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

  _url:string="https://fakestoreapi.com/products";
  constructor(private http:HttpClient) {}
  // private _url:string="/assets/Data/products.json";
  getAllProducts():Observable<IProducts2[]>
  {
    // return this.ProductList;
    return this.http.get<IProducts2[]>(this._url).pipe(catchError((err)=>
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
    const Product=this.Products2.find((ProductId:IProduct)=>ProductId.Id===prdId)
    {
      if(!Product){
        return null;
      }
      return Product;
    }
    
  }
  
}
