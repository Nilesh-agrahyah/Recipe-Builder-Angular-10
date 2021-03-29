import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AuthGuard } from '../auth/auth.guard.service'
import { RecipesComponent } from '../recipes/recipes.component'
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component'
import { RecipeEditComponent } from '../recipes/recipe-edit/recipe-edit.component'
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component'
import { RecipeResolver } from '../recipes/recipes-resolver.service'


const routes: Routes = [{ path: "", canActivate: [AuthGuard], component: RecipesComponent, children: [
    { path: "", component: RecipeStartComponent},
    { path: "new", component: RecipeEditComponent },
    { path: ":id", component: RecipeDetailComponent, resolve: [RecipeResolver] },
    { path: ":id/edit", component: RecipeEditComponent, resolve: [RecipeResolver] }
] },]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule {
    
}