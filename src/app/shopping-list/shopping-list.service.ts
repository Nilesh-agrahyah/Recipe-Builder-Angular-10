import { Subject } from "rxjs";
import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'

export class ShoppingListService{
    constructor(){}
    ingredientsChanged = new Subject<Ingredient[]>();
    editingStarted = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]

      getIngredient(index){
        return this.ingredients[index]
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      updateIngredient( index: number, ingredient: Ingredient){
        this.ingredients[index] = ingredient;
        return this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
      }

      deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice())
      }
}