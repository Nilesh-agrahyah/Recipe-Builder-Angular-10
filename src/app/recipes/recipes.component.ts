import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe = undefined;
  loading = false;
  message = null;
  recipeSub: Subscription;
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    if (this.recipeService.getRecipes().length == 0) {
      this.loading = true
      this.recipeSub = this.dataStorageService.fetchRecipes().pipe(take(1)).subscribe(res => {
        this.loading = false        
      },
        err => {
          this.loading = false
        })
    }
  }

}
