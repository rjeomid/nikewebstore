import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgFor} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ========================[nz کامپوننت]===============
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
// ========================[پایان nz کامپوننت]===============
import { NavComponent } from './Shared/Nav/nav/nav.component';
import { FooterComponent } from './Shared/Footer/footer/footer.component';
import { ProductComponent } from './Component/Product/product/product.component';
import { AirForceComponent } from './Component/Product/Pages/Air force/air-force/air-force.component';
import { LoginComponent } from './Auth/Login/login/login.component';
import { RegisterComponent } from './Auth/Register/register/register.component';
import { AirJordanComponent } from './Component/Product/Pages/Air jordan/air-jordan/air-jordan.component';
import { AirHuaracheComponent } from './Component/Product/Pages/Air Huarache/air-huarache/air-huarache.component';
import { BascetShopComponent } from './Component/Bascet shop/bascet-shop/bascet-shop.component';
import { HomeComponent } from './Component/Home/home/home.component';
import { NewsComponent } from './Component/News/news/news.component';
import { RouterModule } from '@angular/router';
import { AvailableItemsDirective } from './Directives/available-items.directive';
import { CommonModule } from '@angular/common';
import { NavbarProductComponent } from './Component/Product/Navbar-product/navbar-product/navbar-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ProductComponent,
    AirForceComponent,
    LoginComponent,
    RegisterComponent,
    AirJordanComponent,
    AirHuaracheComponent,
    BascetShopComponent,
    HomeComponent,
    NewsComponent,
    AvailableItemsDirective,
    NavbarProductComponent
  ],
  imports: [
    CommonModule,
BrowserModule,
AppRoutingModule,
RouterModule,
NzSelectModule,
NzButtonModule,
NzMenuModule,
NzSliderModule,
NzLayoutModule,
NzSwitchModule,
NzUploadModule,
NzCarouselModule,
NzAvatarModule,
NzCheckboxModule,
NzInputModule,
NzFormModule,
NzRateModule,
NzCardModule,
NzInputNumberModule,
NgFor,
ReactiveFormsModule,
FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
