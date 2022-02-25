import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeDrinkComponent } from './qr-code-drink.component';

describe('QrCodeDrinkComponent', () => {
  let component: QrCodeDrinkComponent;
  let fixture: ComponentFixture<QrCodeDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodeDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
