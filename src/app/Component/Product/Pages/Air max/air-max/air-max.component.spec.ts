import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirMaxComponent } from './air-max.component';

describe('AirMaxComponent', () => {
  let component: AirMaxComponent;
  let fixture: ComponentFixture<AirMaxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirMaxComponent]
    });
    fixture = TestBed.createComponent(AirMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
