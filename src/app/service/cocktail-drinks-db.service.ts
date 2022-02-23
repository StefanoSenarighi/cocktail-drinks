import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseCocktailGet } from '../model/cocktail-drink.model';

@Injectable({
    providedIn: 'root'
})
export class CocktailDrinksDbService {

    constructor(private http: HttpClient) { }

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
}

