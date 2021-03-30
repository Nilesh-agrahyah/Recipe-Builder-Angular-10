import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router, private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
      this.id = params.id;
      this.editMode = params.id != null;
      this.initForm();
    })
  }

  private initForm(){
    let recipeName='';
    let recipeImagePath='';
    let recipeDescription='';
    let recipeIgredients = new FormArray([]);
    let recipeSteps = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
      if(recipe.ingredients){
        for(let ingredient of recipe.ingredients){
          recipeIgredients.push( 
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
      if(recipe.steps){
        for(let step of recipe.steps){
          recipeSteps.push( 
            new FormGroup({
              'name': new FormControl(step.name, Validators.required),
              'description': new FormControl(step.description, [Validators.required])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIgredients,
      'steps': recipeSteps
    })
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  get stepControls(){
    return (<FormArray>this.recipeForm.get('steps')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'amount': new FormControl(1, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onIngredientDelete(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

  onAddStep(){
    (<FormArray>this.recipeForm.get('steps')).push(
      new FormGroup({
        'name': new FormControl('', Validators.required),
        'description': new FormControl('', [Validators.required])
      })
    )
  }

  onStepDelete(index: number){
    (<FormArray>this.recipeForm.get('steps')).removeAt(index)
  }


  onSubmit(){
    // console.log(this.recipeForm.value);
    let { name, description, imagePath, ingredients, steps } = this.recipeForm.value;
    const newRecipe = new Recipe(name, description, imagePath, ingredients, steps)
    if(this.editMode){
      this.recipeService.updateRecipe( this.id, newRecipe)
    }
    else{
      this.recipeService.addRecipe(newRecipe)
    }
    this.onCancel()
    this.dataStorageService.storeRecipes()
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route})
  }
}
