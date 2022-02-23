import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocktailDrinksDbService } from './service/cocktail-drinks-db.service';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [CocktailDrinksDbService],
    bootstrap: [AppComponent]
})
export class AppModule { }
