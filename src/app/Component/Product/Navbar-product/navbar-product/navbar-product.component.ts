import { Component , Input, ViewChild } from '@angular/core';
import { AirJordanComponent } from '../../Pages/Air jordan/air-jordan/air-jordan.component';

@Component({
  selector: 'app-navbar-product',
  templateUrl: './navbar-product.component.html',
  styleUrls: ['./navbar-product.component.css']
})
export class NavbarProductComponent {
  
  // ====================[price range]===============
  value1 = 50;
  value2 = 150;

}
