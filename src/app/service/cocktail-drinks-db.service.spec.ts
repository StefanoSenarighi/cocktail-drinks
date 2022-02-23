import { TestBed } from '@angular/core/testing';

import { CocktailDrinksDbService } from './cocktail-drinks-db.service';

describe('CocktailDrinksDbService', () => {
  let service: CocktailDrinksDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDrinksDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
