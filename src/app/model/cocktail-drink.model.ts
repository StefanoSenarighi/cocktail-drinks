export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate?: any;
    strTags?: any;
    strVideo?: any;
    strCategory: string;
    strIBA?: any;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES?: any;
    strInstructionsDE: string;
    strInstructionsFR?: any;
    strInstructionsIT: string;
    'strInstructionsZH-HANS': any;
    'strInstructionsZH-HANT': any;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7?: any;
    strIngredient8?: any;
    strIngredient9?: any;
    strIngredient10?: any;
    strIngredient11?: any;
    strIngredient12?: any;
    strIngredient13?: any;
    strIngredient14?: any;
    strIngredient15?: any;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6?: any;
    strMeasure7?: any;
    strMeasure8?: any;
    strMeasure9?: any;
    strMeasure10?: any;
    strMeasure11?: any;
    strMeasure12?: any;
    strMeasure13?: any;
    strMeasure14?: any;
    strMeasure15?: any;
    strImageSource?: any;
    strImageAttribution?: any;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
    favorite: boolean;

    ingredient: string[];
    ingredientAndMeausures: string[];
}

export interface ResponseCocktailGet {
    drinks: Drink[];
}
