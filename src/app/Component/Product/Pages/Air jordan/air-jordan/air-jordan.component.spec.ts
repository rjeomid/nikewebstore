import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirJordanComponent } from './air-jordan.component';

describe('AirJordanComponent', () => {
  let component: AirJordanComponent;
  let fixture: ComponentFixture<AirJordanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirJordanComponent]
    });
    fixture = TestBed.createComponent(AirJordanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
