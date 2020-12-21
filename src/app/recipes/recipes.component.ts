import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe = undefined;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(recipe => this.selectedRecipe = recipe)
  }

  onRecipeEmitted(recipe){
    this.selectedRecipe = recipe
  }

}
