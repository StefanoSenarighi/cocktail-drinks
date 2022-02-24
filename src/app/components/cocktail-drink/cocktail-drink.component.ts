import { Drink } from './../../model/cocktail-drink.model';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cocktail-drink',
    templateUrl: './cocktail-drink.component.html',
    styleUrls: ['./cocktail-drink.component.scss']
})
export class CocktailDrinkComponent implements OnInit {

    @Input() cocktailDrink!: Drink;

    constructor(private router: Router) { }

    ngOnInit(): void {}

    goToDetailCocktail(idDrink: string): void {
        this.router.navigate(['/detail', idDrink]);
    }

    // TODO
    addOrDeleteFavoritesDrink(): void {}

    // TODO
    shareDrink(idDrink: string): void {}
}
