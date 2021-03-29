import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';

import { RecipiesModule } from './recipes/recipes.module'
import { RecipesRoutingModule } from './recipes/recipes-routing.module'

import {ShoppingListModule} from'./shopping-list/shopping-list.module'

import {CoreModule } from './core.module';

import {AuthModule} from './auth/auth.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    AppRoutingModule,
    RecipiesModule,
    RecipesRoutingModule,
    ShoppingListModule,
    CoreModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
