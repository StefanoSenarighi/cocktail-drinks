import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Drink } from '../model/cocktail-drink.model';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    _myFavoritesCocktail: Drink[] = [];
    myFavoritesCocktail$: BehaviorSubject<Drink[]>;

    get myFavoritesCocktail(): Drink[] {
        return this._myFavoritesCocktail;
    }

    set myFavoritesCocktail(value: Drink[]) {
        this._myFavoritesCocktail = [...value];
        const jsonData = JSON.stringify(this._myFavoritesCocktail);
        localStorage.setItem('drink_favorites', jsonData);
        this.myFavoritesCocktail$.next(this._myFavoritesCocktail);
    }

    constructor() {
        this.myFavoritesCocktail$ = new BehaviorSubject(this.myFavoritesCocktail);
    }

    getDrinkFavorite(): void {
        const drinkFavorites = localStorage.getItem('drink_favorites');
        const data = drinkFavorites ? JSON.parse(drinkFavorites) as Drink[] : [];
        this.myFavoritesCocktail = [...data];
    }

    saveDrinkFavorite(drink: Drink): void {
        this._myFavoritesCocktail.push(drink);
        this.myFavoritesCocktail = [...this._myFavoritesCocktail];
    }

    deleteDrinkFavorite(drinkToDelete: Drink): void {
        const data = JSON.parse(localStorage.getItem('drink_favorites') || '') as Drink[];
        this.myFavoritesCocktail = [...data].filter(drink => drink.idDrink !== drinkToDelete.idDrink);
    }
}
