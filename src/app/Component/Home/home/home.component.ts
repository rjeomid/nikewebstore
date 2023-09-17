import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  array = [1, 2, 3, 4];
  
}
