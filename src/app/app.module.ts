import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocktailDrinksDbService } from './service/cocktail-drinks-db.service';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CocktailDrinkComponent } from './components/cocktail-drink/cocktail-drink.component';
import { AppElevationDirective } from './components/directive/app-elevation.directive';
import { MatCardModule } from '@angular/material/card';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { LocalStorageService } from './service/local-storage.service';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        CocktailDrinkComponent,
        AppElevationDirective,
        FavoritesComponent,
        EmptyPageComponent
    ],
    imports:[
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        FlexLayoutModule,
        NgxSkeletonLoaderModule.forRoot(),

        // Material
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatSelectModule,
        MatChipsModule,
        MatRippleModule,
        MatDialogModule,
        MatInputModule,
        MatRadioModule,
        MatSnackBarModule,
        MatCardModule

    ],
    providers: [
        CocktailDrinksDbService,
        LocalStorageService,
        Location,
        {
            provide: APP_INITIALIZER,
            useFactory: (ds: LocalStorageService) => () => ds.getDrinkFavorite(), deps: [LocalStorageService], multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
