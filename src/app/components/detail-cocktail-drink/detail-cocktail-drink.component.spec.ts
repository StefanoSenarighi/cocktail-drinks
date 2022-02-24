import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCocktailDrinkComponent } from './detail-cocktail-drink.component';

describe('DetailCocktailDrinkComponent', () => {
  let component: DetailCocktailDrinkComponent;
  let fixture: ComponentFixture<DetailCocktailDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCocktailDrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCocktailDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
