import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe = undefined;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router, private dataStorageService: DataStorageService ) { }

  ngOnInit(): void {
    (this.route.params.subscribe( (params: Params) => {
      this.id = +params["id"];
      this.recipe = this.recipeService.getRecipe(this.id)
    } ))
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['../'], {relativeTo: this.route})
    this.dataStorageService.storeRecipes()
  }
}
