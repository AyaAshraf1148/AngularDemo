import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClassesAndTypes/DiscountOffers';
import { ICategory } from '../SharedClassesAndTypes/ICategory';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Discount :any= DiscountOffers.Discount1;
  StoreLogo: string="../../assets/logo.jpg";
  ProductList : IProduct[]= [
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
  ClientName: string="ClientName";
  IsPurshased: boolean=true;
  StoreName:string="Electronics section";
  CategoryList : ICategory[]=[
 
        {
          ID:100,
          Name:"Electronics",
        },
        {
          ID:101,
          Name:"Home",
        }
      ];
 
  ngOnInit() {
    
  }
  
  PrintMsg()
  {
   this.IsPurshased=!this.IsPurshased;

  }
}
