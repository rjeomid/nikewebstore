import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/Home/home/home.component';
import { LoginComponent } from './Auth/Login/login/login.component';
import { RegisterComponent } from './Auth/Register/register/register.component';
import { BascetShopComponent } from './Component/Bascet shop/bascet-shop/bascet-shop.component';
import { NewsComponent } from './Component/News/news/news.component';
import { ProductComponent } from './Component/Product/product/product.component';
import { AirForceComponent } from './Component/Product/Pages/Air force/air-force/air-force.component';
import { AirHuaracheComponent } from './Component/Product/Pages/Air Huarache/air-huarache/air-huarache.component';
import { AirJordanComponent } from './Component/Product/Pages/Air jordan/air-jordan/air-jordan.component';
import { AirMaxComponent } from './Component/Product/Pages/Air max/air-max/air-max.component';

const routes: Routes = [
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'bascet-shop' , component : BascetShopComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'news' , component : NewsComponent},
  {path : 'product' , component : ProductComponent},
  {path : '' , component : HomeComponent},
  {path : 'air-force' , component : AirForceComponent},
  {path : 'air-huarache' , component : AirHuaracheComponent},
  {path : 'air-jordan' , component : AirJordanComponent},
  {path : 'air-max' , component : AirMaxComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
