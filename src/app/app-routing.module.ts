import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { PageComponent } from './page/page.component';
import { PostsComponent } from './posts/posts.component';
import { ProductsWithDiscountComponent } from './products-with-discount/products-with-discount.component';
import { ProductsWithNoDiscountComponent } from './products-with-no-discount/products-with-no-discount.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormLoginComponent } from './reactive-form-login/reactive-form-login.component';
import { ReactiveFormRegisterComponent } from './reactive-form-register/reactive-form-register.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = 
[
  {path:'',redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"products",component:ProductsComponent,children:[
    {path:"WithDiscount",component:ProductsWithDiscountComponent},
    {path:"WithNoDiscount",component:ProductsWithNoDiscountComponent}]},
  {path:"users",component:UsersComponent},
  {path:"posts",component:PostsComponent},
  // {path:"register",component:RegisterComponent},
  // {path:"login",component:LoginComponent},
  {path:"notes",component:NotesComponent},
  {path:"register",component:ReactiveFormRegisterComponent},
  {path:"login",component:ReactiveFormLoginComponent},
  {path:"**",component:PageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
