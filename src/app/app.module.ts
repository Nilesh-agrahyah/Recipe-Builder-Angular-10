import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DropdownDirectiveDirective } from './directives/dropdown-directive.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component'
import { AuthComponent } from './auth/auth.component'
import { RecipeService } from './recipes/recipe.service';
import { AuthInterceptorService } from './auth/auth-intercepter.service'
import {AlertComponent} from './shared/alert/alert.component'

import { RecipiesModule } from './recipes/recipes.module'
import { RecipesRoutingModule } from './recipes/recipes-routing.module'

import {ShoppingListModule} from'./shopping-list/shopping-list.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirectiveDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RecipiesModule,
    RecipesRoutingModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService, RecipeService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
