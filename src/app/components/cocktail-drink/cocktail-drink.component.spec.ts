import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDrinkComponent } from './cocktail-drink.component';

describe('CocktailDrinkComponent', () => {
  let component: CocktailDrinkComponent;
  let fixture: ComponentFixture<CocktailDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
