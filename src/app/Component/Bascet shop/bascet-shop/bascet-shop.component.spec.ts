import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BascetShopComponent } from './bascet-shop.component';

describe('BascetShopComponent', () => {
  let component: BascetShopComponent;
  let fixture: ComponentFixture<BascetShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BascetShopComponent]
    });
    fixture = TestBed.createComponent(BascetShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
