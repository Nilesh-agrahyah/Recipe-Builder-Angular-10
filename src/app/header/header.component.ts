import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(private dataStorageService: DataStorageService, private authService: AuthService, private recipeService: RecipeService) { }
  isAuthenticated = false;
  private userSub: Subscription;
  recipeLength = 0;
  ngOnInit(): void {
    this.userSub =  this.authService.user.subscribe( user => {
      this.isAuthenticated = !!user 
    })

    this.recipeService.recipesChanged.subscribe(recipes => {
      this.recipeLength = recipes.length
      console.log(this.recipeLength); 
    })
    
  }
  onSaveData(){
    this.dataStorageService.storeRecipes()
  }

  onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe()
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(){
    this.userSub.unsubscribe()
  }
}
