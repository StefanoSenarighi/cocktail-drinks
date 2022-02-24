import { CocktailDrinksDbService } from './../../service/cocktail-drinks-db.service';
import { ResponseCocktailGet } from './../../model/cocktail-drink.model';
import { Drink } from 'src/app/model/cocktail-drink.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-detail-cocktail-drink',
    templateUrl: './detail-cocktail-drink.component.html',
    styleUrls: ['./detail-cocktail-drink.component.scss']
})
export class DetailCocktailDrinkComponent implements OnInit {

    drink = {} as Drink;

    constructor(private route: ActivatedRoute,
        private location: Location,
        private cocktailDrinksDbService: CocktailDrinksDbService) {
    }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id') || 0;
        console.log(id);

        this.cocktailDrinksDbService.getCocktailDrinkById(+id)
            .subscribe((res: ResponseCocktailGet) => {
                this.drink = { ...res.drinks[0] };
                this.drink.ingredientAndMeausures = this.cocktailDrinksDbService.mapIngredient(new Map(Object.entries(this.drink)), true);
            });
    }

    back(): void {
        this.location.back();
    }

}
