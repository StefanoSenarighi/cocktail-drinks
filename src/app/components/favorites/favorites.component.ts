import { CocktailDrinksDbService } from './../../service/cocktail-drinks-db.service';
import { LocalStorageService } from './../../service/local-storage.service';
import { Drink } from 'src/app/model/cocktail-drink.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit, OnDestroy {

    cocktailDrinks: Drink[] | null = null;

    private unsubscribeAll: Subject<any>;

    constructor(private ls: LocalStorageService,
                private cocktailDbService: CocktailDrinksDbService) {

        // Set the private defaults
        this.unsubscribeAll = new Subject();
    }

    ngOnInit(): void {

        this.ls.myFavoritesCocktail$
            .pipe(
                takeUntil(this.unsubscribeAll),
                debounceTime(100))
            .subscribe((value: Drink[]) => this.cocktailDrinks = this.cocktailDbService.mapDrink(value));
    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

}
