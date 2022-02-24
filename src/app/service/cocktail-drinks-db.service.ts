import { LocalStorageService } from './local-storage.service';
import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drink, ResponseCocktailGet } from '../model/cocktail-drink.model';

@Injectable({
    providedIn: 'root'
})
export class CocktailDrinksDbService {

    constructor(private http: HttpClient,
                private localStorageService: LocalStorageService) { }

    getCocktailDrinkById(id: number): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('i', `${id}`);
        return this.http.get<ResponseCocktailGet>(`${environment.api.lookup}`, { params });
    }

    getCocktailDrinkByName(name: string): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('s', name);
        return this.http.get<ResponseCocktailGet>(`${environment.api.search}`, { params });
    }

    getCocktailDrinkByIngredient(ingredientName: string): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('i', ingredientName);
        return this.http.get<ResponseCocktailGet>(`${environment.api.filter}`, { params });
    }

    getCocktailDrinkByCategory(category: string): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('c', category);
        return this.http.get<ResponseCocktailGet>(`${environment.api.filter}`, { params });
    }

    getCocktailDrinkByAlcoholic(alcoholic: string): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('a', alcoholic);
        return this.http.get<ResponseCocktailGet>(`${environment.api.filter}`, { params });
    }

    getListCategories(): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('c', 'list');
        return this.http.get<ResponseCocktailGet>(`${environment.api.list}`, { params });
    }

    getListIngredients(): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('i', 'list');
        return this.http.get<ResponseCocktailGet>(`${environment.api.list}`, { params });
    }

    getListAlcoholic(): Observable<ResponseCocktailGet> {
        const params = new HttpParams().set('a', 'list');
        return this.http.get<ResponseCocktailGet>(`${environment.api.list}`, { params });
    }

    mapIngredient(drinkMap: Map<any, any>, meausures = false, index = 1, ingredients: string[] = []): any {

        const strIngredient = 'strIngredient' + index;
        const strMeasure = 'strMeasure' + index;
        const ingredient = drinkMap.get(strIngredient);

        if (!ingredient) {
            return ingredients;
        }

        ingredients.push(meausures && drinkMap.get(strMeasure) ? `${drinkMap.get(strMeasure)} ${ingredient}` : ingredient);
        return this.mapIngredient(drinkMap, meausures, ++index, ingredients);

    }

    mapDrink(drinks: Drink[]): Drink[] {
        drinks.map(drink => {
            drink.ingredient = this.mapIngredient(new Map(Object.entries(drink)), false);
            drink.favorite = this.localStorageService.myFavoritesCocktail
                .find(drinkFav => drinkFav.idDrink === drink.idDrink) ? true : false;
        });

        return drinks;
    }
}

