import { Component, ViewChild } from '@angular/core';
import { AirJordanComponent } from '../Pages/Air jordan/air-jordan/air-jordan.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  // ====================[price range]===============
  value1 = 50;
  value2 = 150;
}
