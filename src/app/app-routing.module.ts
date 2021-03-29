import { NgModule } from "@angular/core"
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"
import {SharedModule} from './shared/shared.module';

const appRoutes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },   
    {path: "recipes", loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipiesModule) },
    {path: "shopping-list", loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule) },
    {path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }

]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}), SharedModule],
    exports: [RouterModule]
})

export class AppRoutingModule {

}