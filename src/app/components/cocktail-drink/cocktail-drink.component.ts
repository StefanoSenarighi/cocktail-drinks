import { LocalStorageService } from './../../service/local-storage.service';
import { Drink } from './../../model/cocktail-drink.model';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QrCodeDrinkComponent } from '../qr-code-drink/qr-code-drink.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-cocktail-drink',
    templateUrl: './cocktail-drink.component.html',
    styleUrls: ['./cocktail-drink.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CocktailDrinkComponent implements OnInit {

    @Input() cocktailDrink!: Drink;

    constructor(private router: Router,
                private snackBar: MatSnackBar,
                private matDialog: MatDialog,
                private localStorageService: LocalStorageService) { }

    ngOnInit(): void {}

    goToDetailCocktail(idDrink: string): void {
        this.router.navigate(['/detail', idDrink]);
    }

    addOrDeleteFavoritesDrink(): void {

        if (!this.cocktailDrink.favorite) {
            this.localStorageService.saveDrinkFavorite(this.cocktailDrink);
            this.cocktailDrink.favorite = true;
            this.snackBar.open(`'${this.cocktailDrink.strDrink}' added to favorites.`, '', {duration: 3000});
        } else {
            this.localStorageService.deleteDrinkFavorite(this.cocktailDrink);
            this.cocktailDrink.favorite = false;
            this.snackBar.open(`'${this.cocktailDrink.strDrink}' deleted from favorites.`, '', {duration: 3000});
        }
    }

    // TODO
    shareDrink(idDrink: string): void {
        const dialogRef = this.matDialog.open(QrCodeDrinkComponent, {
            panelClass: ['animate__animated', 'animate__slideInUp'],
            data: {idDrink}
          });
    }
}
