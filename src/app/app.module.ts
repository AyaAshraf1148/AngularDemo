import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductServicesService } from './Services/product-services.service';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithNoDiscountComponent } from './products-with-no-discount/products-with-no-discount.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';





// import { MatTableModule } from '@angular/material/table';
// import { SharedclassesandtypesComponent } from './SharedClassesAndTypes/';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    HomeComponent,
    PostsComponent,
    UsersComponent,
    PageComponent,
    ProductsWithDiscountComponent,
    ProductsWithNoDiscountComponent,
    LoginComponent,
    RegisterComponent,
    // SharedclassesandtypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
