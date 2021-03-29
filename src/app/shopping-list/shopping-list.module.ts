import {NgModule} from '@angular/core'
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../shopping-list/shopping-edit/shopping-edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: "shopping-list", component: ShoppingListComponent }])
    ],
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ]
})

export class ShoppingListModule{}