import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirHuaracheComponent } from './air-huarache.component';

describe('AirHuaracheComponent', () => {
  let component: AirHuaracheComponent;
  let fixture: ComponentFixture<AirHuaracheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirHuaracheComponent]
    });
    fixture = TestBed.createComponent(AirHuaracheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
