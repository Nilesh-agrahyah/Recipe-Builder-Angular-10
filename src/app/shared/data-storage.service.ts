import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service'
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from 'rxjs/operators'
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: 'root' })

export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }
    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-4cd2a-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe()
    }

    fetchRecipes() {
        return this.http.get('https://ng-course-recipe-book-4cd2a-default-rtdb.firebaseio.com/recipes.json')
            .pipe(
                map((recipes: Recipe[]) => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [], steps: recipe.steps? recipe.steps : [] }
                    })
                }),
                tap(recipes => {
                    this.recipeService.setRecipes(recipes)
                })
            )
    }
}