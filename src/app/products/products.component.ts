import { Component, OnInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { DiscountOffers } from '../SharedClassesAndTypes/DiscountOffers';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { ICategory } from '../SharedClassesAndTypes/ICategory';
import { ProductServicesService } from '../Services/product-services.service';
import { IProducts2 } from '../SharedClassesAndTypes/Iproducts2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  // Discount :any= DiscountOffers.Discount1;
  // StoreLogo: string="../../assets/logo.jpg";
  ProductList : any;
  // ClientName: string=" ";
  IsPurshased: boolean=true;
  products:any={};
  // StoreName:string=" ";
  // CategoryList : ICategory[]=[];
  Showcard:boolean=false;

      //   {
      //     Id:1,
      //     Name:"Laptop",
      //     Quantity:1,
      //     Price:10000,
      //     Img:"../../assets/laptop.jpg",
      //   },
      //   {
      //     Id:2,
      //     Name:"Iphone",
      //     Quantity:1,
      //     Price:16000,
      //     Img:"../../assets/iphone.jpg",
  
      //   }
  
      // ]
 
      //   {
      //     ID:100,
      //     Name:"Electronics",
      //   },
      //   {
      //     ID:101,
      //     Name:"Home",
      //   }
      // ]
  

  

  
  constructor(
    private productService:ProductServicesService,
    private router:Router,
    private activeroute:ActivatedRoute
    ){}
  //   this.Discount=DiscountOffers.Discount1,
  //   this.StoreName="Electronics section",
  //   this.StoreLogo="../../assets/logo.jpg",
  //   this.ProductList=
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

  //   ],
  //   this.CategoryList=
  //   [
  //     {
  //       ID:100,
  //       Name:"Electronics",
  //     },
  //     {
  //       ID:101,
  //       Name:"Home",
  //     }
  //   ],
  //   this.ClientName="ClientName",
  //   this.IsPurshased=true;
  // }
  
  renderValues()
  {
    // this.ProductList=this.productService.getAllProducts();
    this.productService.getAllProducts().subscribe((data)=>
    {
      return this.ProductList=data;
    })
  }
  
  getProductById(id:any)
  {
    this.products = this.productService.getProductById(id);
    this.Showcard= true;
  }
  
 
  ngOnInit(): void {
    this.renderValues();
  }
  WithDiscount()
  {
    this.router.navigate(["WithDiscount"],{relativeTo:this.activeroute})
  }

  WithNoDiscount()
  {
    this.router.navigate(["WithNoDiscount"],{relativeTo:this.activeroute})
  }
  
  PrintMsg()
  {
   this.IsPurshased=!this.IsPurshased;

  }
}
