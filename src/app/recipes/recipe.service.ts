import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recipes/recipe.model'
// @Injectable()

export class RecipeService {
    constructor(){}

    selectedRecipe = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe('Jackfruit Burrito', "Recipe of how to create a Jackfruit Burrito that'll make your taste-buds happy!", 'https://images.squarespace-cdn.com/content/v1/556ddd04e4b0975c0bb32168/1504268869937-8JS0CP1IO349FXJQPKCI/ke17ZwdGBToddI8pDm48kJ8sk66WRapo3RX4khTsXKp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaUzSiviepfuOufnJa7SEDbj5B0_nllQ7Wz_LLSnnCyLIYUXv0PgTl9KTvOesAWW4/Jackfruit-Burritos-02-2.jpg'),
        new Recipe('Burrito', "Recipe of how to create a Burrito that'll make your taste-buds happy!", 'https://image.freepik.com/free-photo/burritos-wraps-with-beef-vegetables-wood-beef-burrito-mexican-food-healthy-food-background-mexican-cuisine_2829-4110.jpg')
      ];
    
    getRecipes(){
      return this.recipes.slice()
    }
}