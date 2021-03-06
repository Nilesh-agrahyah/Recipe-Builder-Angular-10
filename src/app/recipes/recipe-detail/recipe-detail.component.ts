import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe = undefined;
  id: Number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    (this.route.params.subscribe( (params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id)
    } ))
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }
}
