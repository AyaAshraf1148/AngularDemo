import { Component,ViewChild,OnInit } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { IProduct } from './SharedClassesAndTypes/IProduct';

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

 @ViewChild(ProductsComponent) child!: ProductsComponent;
  IsPurshased:boolean=true;
  ProductList:any;

  renderValues(): void
  {
    this.child.renderValues();
    this.IsPurshased=!this.IsPurshased;
  }
  
  
}


