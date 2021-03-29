import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"
import {SharedModule} from './shared/shared.module';

const appRoutes: Routes = [
    { path: "", redirectTo: "/recipes", pathMatch: "full" },   
    {path: "recipes", loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipiesModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes), SharedModule],
    exports: [RouterModule]
})

export class AppRoutingModule {

}