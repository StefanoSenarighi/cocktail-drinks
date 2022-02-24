import { Drink, ResponseCocktailGet } from './../../model/cocktail-drink.model';
import { CocktailDrinksDbService } from './../../service/cocktail-drinks-db.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin } from 'rxjs';

export const atLeastOne = (validator: ValidatorFn) => (group: FormGroup): ValidationErrors | null => {
    const hasAtLeastOne = group && group.controls && Object.keys(group.controls).some(k => !validator(group.controls[k]));
    return hasAtLeastOne ? null : { atLeastOne: true };
};

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('slideInOut', [
            state('in', style({
                overflow: 'hidden',
                height: '*',
                width: '300px'
            })),
            state('out', style({
                opacity: '0',
                overflow: 'hidden',
                height: '0px',
                width: '0px'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ])
    ]
})
export class HomeComponent implements OnInit {

    openFilter: string;

    listOfCathegory: string[] = [];
    listOfIngredients: string[] = [];
    listOfAlcoholic: string[] = [];

    cocktailDrinks: Drink[] | null = [];

    filterCocktailForm = this.formBuilder.group({
        name: [''],
        ingredient: [''],
        alcoholic: [''],
        cathegory: [''],
    }, { validator: atLeastOne(Validators.required) });

    constructor(private formBuilder: FormBuilder,
        private cocktailDrinksDbService: CocktailDrinksDbService,
        private snackBar: MatSnackBar) {
        this.openFilter = 'out';
    }

    ngOnInit(): void {

        this.cocktailDrinks = null;

        this.cocktailDrinksDbService
            .getListCategories()
            .subscribe(res => this.listOfCathegory = res.drinks.map(dr => dr.strCategory).sort((a, b) => a.localeCompare(b)));

        this.cocktailDrinksDbService
            .getListIngredients()
            .subscribe(res => this.listOfIngredients = res.drinks.map(dr => dr.strIngredient1).sort((a, b) => a.localeCompare(b)));

        this.cocktailDrinksDbService
            .getListAlcoholic()
            .subscribe(res => this.listOfAlcoholic = res.drinks.map(dr => dr.strAlcoholic));

        this.cocktailDrinksDbService.getCocktailDrinkByName('')
            .pipe(delay(1500))
            .subscribe(
                res => this.cocktailDrinks = this.cocktailDrinksDbService.mapDrink(res.drinks || []),
                () => this.snackBar.open('Error during retrvie drinks', '', { duration: 3000 }));
    }

    onSubmit(): void {

        this.cocktailDrinks = null;

        const name = this.filterCocktailForm.get('name')?.value;
        const ingredients = this.filterCocktailForm.get('ingredient')?.value;
        const cathegory = this.filterCocktailForm.get('cathegory')?.value;
        const alcoholic = this.filterCocktailForm.get('alcoholic')?.value;
        const requestFilterDrink: any[] = [];

        if (name) { requestFilterDrink.push(this.cocktailDrinksDbService.getCocktailDrinkByName(name)); }
        if (ingredients) { requestFilterDrink.push(this.cocktailDrinksDbService.getCocktailDrinkByIngredient(ingredients)); }
        if (cathegory) { requestFilterDrink.push(this.cocktailDrinksDbService.getCocktailDrinkByCategory(cathegory)); }
        if (alcoholic) { requestFilterDrink.push(this.cocktailDrinksDbService.getCocktailDrinkByAlcoholic(alcoholic)); }

        forkJoin(requestFilterDrink)
            .pipe(delay(2000))
            .subscribe(
                (response: any[]) => {

                    if (response.length === 1) {
                        this.cocktailDrinks = this.cocktailDrinksDbService.mapDrink(response[0].drinks || []);
                        return;
                    }

                    this.cocktailDrinks = this.intersectResult(response);
                },
                () => this.snackBar.open('Error during retrvie drinks', '', { duration: 3000 }));

    }

    toggleOpenFilter(): void {
        this.openFilter = this.openFilter === 'out' ? 'in' : 'out';
    }

    intersectResult(resultFilter: ResponseCocktailGet[]): Drink[] {

        if (resultFilter.find(resultFind => !resultFind.drinks)) {
            return [];
        }

        let intersectDrink: Drink[] = resultFilter[0].drinks;

        for (let i = 1; i < resultFilter.length; i++) {
            intersectDrink = intersectDrink.filter(value => resultFilter[i].drinks.find(findDrink => findDrink.idDrink === value.idDrink));
        }

        return this.cocktailDrinksDbService.mapDrink(intersectDrink);
    }

}


