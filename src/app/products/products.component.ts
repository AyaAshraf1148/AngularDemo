import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { ICategory } from '../SharedClassesAndTypes/ICategory';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Discount : DiscountOffers;
  StoreName: string;
  StoreLogo: string;
  ProductList : IProduct[];
  CategoryList : ICategory[];
  ClientName: string;
  IsPurshased: boolean=false;
  

  constructor()
  { 
    this.Discount=DiscountOffers.Discount1,
    this.StoreName="Electronics section",
    this.StoreLogo="../../assets/logo.jpg",
    this.ProductList=
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

    ],
    this.CategoryList=
    [
      {
        ID:100,
        Name:"Electronics",
      },
      {
        ID:101,
        Name:"Home",
      }
    ],
    this.ClientName="ClientName",
    this.IsPurshased=true;
  }
 
  ngOnInit(): void {
  }

  PrintMsg()
  {
   this.IsPurshased=!this.IsPurshased;

  }
  filterargs = {title: 'hello'};
  items = [{title: 'hello world'}, {title: 'hello kitty'}, {title: 'foo bar'}];

}
